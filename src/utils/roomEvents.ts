import type { Room, Puzzle } from '@/types/game';
import { useGameStore } from '@/stores/gameStore';

// ==================== 房间解锁顺序 ====================

// 4x4迷宫的解锁顺序映射 (x, y) -> 解锁等级 (0-15)
// 行优先顺序: 1→2→3→4→5→6→7→8→9→10→11→12→13→14→15→16
export const ROOM_UNLOCK_ORDER: Record<string, number> = {
  '0,0': 1,   // 房间1
  '1,0': 2,   // 房间2
  '2,0': 3,   // 房间3
  '3,0': 4,   // 房间4
  '0,1': 5,   // 房间5
  '1,1': 6,   // 房间6
  '2,1': 7,   // 房间7
  '3,1': 8,   // 房间8
  '0,2': 9,   // 房间9
  '1,2': 10,  // 房间10
  '2,2': 11,  // 房间11
  '3,2': 12,  // 房间12
  '0,3': 13,  // 房间13
  '1,3': 14,  // 房间14
  '2,3': 15,  // 房间15
  '3,3': 16,  // 房间16 (Boss)
};

// 根据解锁等级获取房间位置
export const UNLOCK_ORDER_TO_ROOM: Record<number, string> = {};
Object.entries(ROOM_UNLOCK_ORDER).forEach(([pos, order]) => {
  UNLOCK_ORDER_TO_ROOM[order] = pos;
});

// ==================== 房间事件处理 ====================

export function canEnterRoom(x: number, y: number, gameData: ReturnType<typeof useGameStore>): boolean {
  const room = gameData.dungeon.rooms.find(r => r.x === x && r.y === y);
  if (!room) return false;

  // 已探索的房间可以再次进入
  if (gameData.dungeon.exploredRooms.includes(room.position)) {
    return true;
  }

  // 获取目标房间的解锁等级
  const targetOrder = ROOM_UNLOCK_ORDER[room.position];
  if (targetOrder === undefined) return false;

  // 房间1（起点）可以直接进入
  if (targetOrder === 1) return true;

  // 检查前一个房间是否已通关
  const prevOrder = targetOrder - 1;
  const prevRoomPos = UNLOCK_ORDER_TO_ROOM[prevOrder];
  if (!prevRoomPos) return false;

  const prevRoom = gameData.dungeon.rooms.find(r => r.position === prevRoomPos);
  return prevRoom?.cleared === true;
}

export function handleCombat(room: Room, fight: boolean, gameData: ReturnType<typeof useGameStore>): { win: boolean; message: string } {
  if (!fight) {
    gameData.updatePlayerStamina(-10);
    return { win: false, message: '🏃 逃回上一个房间' };
  }

  // 计算装备属性
  const equipment = gameData.inventory.equipment.filter(e => e.equipped);
  let attackBonus = 0;
  equipment.forEach(e => {
    if (e.stats.attack) attackBonus += e.stats.attack;
  });
  
  const playerPower = gameData.player.cp + attackBonus * 10;
  const winChance = Math.min(0.9, 0.3 + playerPower / 1000);
  const win = Math.random() < winChance;

  if (win) {
    gameData.clearRoom(room.x, room.y);
    const reward = room.event.reward;
    if (reward?.cp) gameData.updatePlayerCP(reward.cp);
    if (reward?.items) {
      reward.items.forEach(itemId => gameData.addMaterial(itemId, 1));
    }
    // 战斗胜利获得经验值
    gameData.addExp(20);
    return { win: true, message: '🎉 胜利！获得奖励 +20经验' };
  } else {
    gameData.updatePlayerHP(-30);
    return { win: false, message: '😵 战斗失败，损失30HP' };
  }
}

export function handleTreasure(room: Room, gameData: ReturnType<typeof useGameStore>): string {
  const reward = room.event.reward;
  const chestLevel = (room.event as any).chestLevel || 'common';
  let message = '获得: ';

  if (reward?.items) {
    reward.items.forEach(itemId => {
      gameData.addMaterial(itemId, 1);
      message += getMaterialIcon(itemId) + ' ';
    });
  }

  if (reward?.cp) {
    gameData.updatePlayerCP(reward.cp);
    message += `${reward.cp}CP `;
  }

  // 开宝箱获得经验值
  gameData.addExp(15);

  // 方案C：根据宝箱等级概率掉落配方
  const droppedRecipe = tryDropRecipeFromChest(chestLevel, gameData);
  if (droppedRecipe) {
    message += `，解锁${droppedRecipe.icon}${droppedRecipe.name}配方`;
  }

  gameData.clearRoom(room.x, room.y);
  return message;
}

// 方案C：宝箱配方掉落逻辑
function tryDropRecipeFromChest(
  chestLevel: string,
  gameData: ReturnType<typeof useGameStore>
): { name: string; icon: string } | null {
  const rand = Math.random();
  
  // 普通宝箱：20%概率掉落Bug靴
  if (chestLevel === 'common') {
    if (rand < 0.2 && !isRecipeUnlocked('bug_boots', gameData)) {
      gameData.unlockRecipe('bug_boots');
      return { name: 'Bug靴', icon: '👟' };
    }
  }
  
  // 稀有宝箱：15%概率掉落水晶甲
  if (chestLevel === 'rare') {
    if (rand < 0.15 && !isRecipeUnlocked('crystal_armor', gameData)) {
      gameData.unlockRecipe('crystal_armor');
      return { name: '水晶甲', icon: '🛡️' };
    }
  }
  
  return null;
}

function isRecipeUnlocked(recipeId: string, gameData: ReturnType<typeof useGameStore>): boolean {
  return gameData.dynamicData.unlockedRecipes.includes(recipeId);
}

export function generatePuzzle(): Puzzle {
  const puzzles: Puzzle[] = [
    {
      question: '以下哪个是Python的正确变量名？',
      options: ['1var', '_var', 'var-name', 'var name'],
      answer: 1,
    },
    {
      question: '哪个关键字用于定义函数？',
      options: ['func', 'def', 'function', 'define'],
      answer: 1,
    },
    {
      question: 'Python中列表用什么符号定义？',
      options: ['()', '{}', '[]', '<>'],
      answer: 2,
    },
    {
      question: '哪个函数用于获取列表长度？',
      options: ['size()', 'length()', 'len()', 'count()'],
      answer: 2,
    },
    {
      question: 'Python中用于输出内容的关键字是？',
      options: ['echo', 'print', 'console', 'log'],
      answer: 1,
    },
  ];
  return puzzles[Math.floor(Math.random() * puzzles.length)];
}

export function handlePuzzle(room: Room, selected: number, correct: number, gameData: ReturnType<typeof useGameStore>): { success: boolean; message: string } {
  if (selected === correct) {
    gameData.clearRoom(room.x, room.y);
    const reward = room.event.reward;
    if (reward?.cp) gameData.updatePlayerCP(reward.cp);
    if (reward?.items) {
      reward.items.forEach(itemId => gameData.addMaterial(itemId, 1));
    }
    // 答对谜题获得经验值
    gameData.addExp(25);
    return { success: true, message: '🎉 谜题解开！获得奖励 +25经验' };
  } else {
    gameData.updatePlayerHP(-10);
    return { success: false, message: '❌ 回答错误，损失10HP' };
  }
}

export function applyRestEffect(room: Room, gameData: ReturnType<typeof useGameStore>): void {
  const effect = room.event.effect;
  if (effect) {
    if (effect.hp) gameData.updatePlayerHP(effect.hp);
    if (effect.stamina) gameData.updatePlayerStamina(effect.stamina);
    gameData.clearRoom(room.x, room.y);
  }
}

export function applyTrapEffect(room: Room, gameData: ReturnType<typeof useGameStore>): void {
  const effect = room.event.effect;
  if (effect) {
    if (effect.hp) gameData.updatePlayerHP(effect.hp);
    if (effect.items) {
      effect.items.forEach(itemId => gameData.addMaterial(itemId, 1));
    }
    gameData.clearRoom(room.x, room.y);
  }
}

export function handleBossChallenge(room: Room, gameData: ReturnType<typeof useGameStore>): { win: boolean; message: string } {
  // 计算装备属性
  const equipment = gameData.inventory.equipment.filter(e => e.equipped);
  let attackBonus = 0;
  equipment.forEach(e => {
    if (e.stats.attack) attackBonus += e.stats.attack;
  });
  
  const playerPower = gameData.player.cp + attackBonus * 10;

  if (playerPower < 500) {
    return { win: false, message: '⚠️ 实力不足，先提升装备再来挑战！需要500+战斗力' };
  }

  gameData.clearRoom(room.x, room.y);
  gameData.defeatBoss();

  const reward = room.event.reward;
  if (reward?.cp) gameData.updatePlayerCP(reward.cp);
  if (reward?.items) {
    reward.items.forEach(itemId => gameData.addMaterial(itemId, 3));
  }
  
  // 击败Boss获得大量经验值
  gameData.addExp(100);
  
  // 方案C：Boss宝箱10%概率掉落传说之剑配方
  let recipeMsg = '';
  const rand = Math.random();
  if (rand < 0.1 && !isRecipeUnlocked('legendary_sword', gameData)) {
    gameData.unlockRecipe('legendary_sword');
    recipeMsg = '，解锁⚔️传说之剑配方';
  }

  return { win: true, message: `🎉 击败Boss！获得奖励 +100经验${recipeMsg}` };
}

function getMaterialIcon(id: string): string {
  const icons: Record<string, string> = {
    wood: '🪵',
    iron: '🔩',
    crystal: '💎',
    bug: '🐛',
  };
  return icons[id] || '❓';
}

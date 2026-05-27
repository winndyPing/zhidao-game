import { defineStore } from 'pinia';
import { reactive, computed } from 'vue';
import type {
  DynamicData, StaticData, PageType, Equipment, CareerDirection,
  EquipmentSet, SetBonus, EquipmentStats
} from '@/types/game';
import { dungeonGenerator } from '@/utils/dungeonGenerator';
import { equipmentSystem } from '@/utils/equipmentSystem';
import { generateNickname, generateAvatar } from '@/utils/userUtils';
import {
  saveUserData,
  loadUserData,
  addUserToList,
  setCurrentUserEmail,
  clearCurrentUser,
  setAccessToken,
  getAccessToken,
  clearAccessToken,
  checkAutoLogin,
} from '@/utils/storageUtils';
import { adManager, AD_TYPES } from '@/utils/adManager';
import { loginWithEmailCode, fetchBootstrapSession } from '@/services/authApi';
import { fetchGameState, saveGameState } from '@/services/gameApi';
import { submitRanking } from '@/services/rankingApi';
import { calculateTotalPower, calculateTotalStat } from '@/utils/rankingSystem';

// ==================== 套装定义 ====================

const equipmentSets: EquipmentSet[] = [
  {
    id: 'debug_set',
    name: '调试专家套装',
    icon: '🐛',
    description: '专为Bug调试设计的技术套装',
    bonuses: [
      { requireCount: 2, description: 'Bug抗性+20', stats: { bugResist: 20 } },
      { requireCount: 4, description: 'Bug抗性+50, 智力+30', stats: { bugResist: 50, intelligence: 30 } },
      { requireCount: 6, description: '免疫Bug伤害, 攻击+100', stats: { bugResist: 999, attack: 100 } },
    ],
  },
  {
    id: 'code_master_set',
    name: '代码大师套装',
    icon: '💻',
    description: '传说中的程序员专属套装',
    bonuses: [
      { requireCount: 2, description: '智力+15', stats: { intelligence: 15 } },
      { requireCount: 4, description: '智力+40, 攻击+25', stats: { intelligence: 40, attack: 25 } },
      { requireCount: 6, description: '全属性+50', stats: { attack: 50, defense: 50, intelligence: 50, speed: 50, hp: 50 } },
    ],
  },
];

// ==================== 静态数据（游戏配置）====================

const staticData: StaticData = {
  recipes: [
    {
      id: 'iron_sword',
      name: '铁剑',
      icon: '🗡️',
      rarity: 'common', // 新手装备，普通稀有度
      materials: [{ id: 'wood', count: 3 }, { id: 'iron', count: 5 }],
      result: { type: 'weapon', name: '铁剑', icon: '🗡️', stats: { attack: 15, intelligence: 5 } },
      unlocked: true, // 默认解锁 - 新手装备
      setId: 'code_master_set', // 属于代码大师套装
    },
    {
      id: 'bug_boots',
      name: 'Bug靴',
      icon: '👟',
      rarity: 'rare',
      materials: [{ id: 'bug', count: 10 }, { id: 'wood', count: 2 }],
      result: { type: 'boots', name: 'Bug追踪靴', icon: '👟', stats: { speed: 15, bugResist: 20 } },
      unlocked: false, // 通关第1层解锁
      setId: 'debug_set', // 属于调试专家套装
    },
    {
      id: 'crystal_armor',
      name: '水晶甲',
      icon: '🛡️',
      rarity: 'epic',
      materials: [{ id: 'iron', count: 8 }, { id: 'crystal', count: 3 }],
      result: { type: 'armor', name: '水晶甲', icon: '🛡️', stats: { defense: 20, hp: 50 } },
      unlocked: false, // 通关第2层 + 答题正确率≥80%解锁
      setId: 'code_master_set', // 属于代码大师套装
    },
    {
      id: 'iron_helmet',
      name: '铁盔',
      icon: '⛑️',
      rarity: 'common',
      materials: [{ id: 'iron', count: 5 }, { id: 'wood', count: 2 }],
      result: { type: 'armor', name: '铁盔', icon: '⛑️', stats: { defense: 10, hp: 20 } },
      unlocked: true, // 默认解锁
      setId: 'code_master_set', // 属于代码大师套装
    },
    {
      id: 'iron_bracer',
      name: '铁护腕',
      icon: '🧤',
      rarity: 'common',
      materials: [{ id: 'iron', count: 4 }, { id: 'wood', count: 3 }],
      result: { type: 'weapon', name: '铁护腕', icon: '🧤', stats: { attack: 8, defense: 5 } },
      unlocked: true, // 默认解锁
      setId: 'debug_set', // 属于调试专家套装
    },
    {
      id: 'legendary_sword',
      name: '传说之剑',
      icon: '⚔️',
      rarity: 'legendary',
      materials: [{ id: 'iron', count: 20 }, { id: 'crystal', count: 10 }, { id: 'bug', count: 30 }],
      result: { type: 'weapon', name: '代码王者之剑', icon: '⚔️', stats: { attack: 50, intelligence: 30, crit: 20 } },
      unlocked: false, // 通关第3层 + 答题正确率≥90%解锁
      setId: 'code_master_set', // 属于代码大师套装
    },
  ],
  materialDefs: {
    wood: { name: '代码木材', icon: '🧱', rarity: 'common' },
    iron: { name: '算法铁锭', icon: '🔩', rarity: 'common' },
    crystal: { name: '逻辑水晶', icon: '💎', rarity: 'rare' },
    bug: { name: 'Bug碎片', icon: '🐛', rarity: 'common' },
    gold: { name: '金币', icon: '💰', rarity: 'common' },
    exp: { name: '经验值', icon: '⭐', rarity: 'common' },
  },
};

// ==================== 创建初始动态数据（从0开始）====================

function createInitialDynamicData(): DynamicData {
  return {
    user: {
      email: '',
      nickname: '',
      avatar: '',
      isLoggedIn: false,
      createdAt: 0,
    },
    player: {
      hp: 100,
      maxHp: 100,
      stamina: 100,
      maxStamina: 100,
      level: 1,
      exp: 0,
      nextLevelExp: 100,
      cp: 0, // 从0开始
      gold: 0, // 从0开始
    },
    dungeon: {
      seed: Date.now(),
      currentFloor: 1,
      maxFloor: 5,
      currentRoom: { x: 0, y: 0 },
      rooms: [],
      exploredRooms: ['0,0'],
      bossDefeated: false,
    },
    inventory: {
      materials: [], // 空库存
      equipment: [], // 空装备
      items: [],
    },
    unlockedRecipes: ['iron_sword'], // 铁剑默认解锁
    currentPage: 'dungeon',
  };
}

// ==================== Store ====================

export const useGameStore = defineStore('game', () => {
  // 动态数据
  const dynamicData = reactive<DynamicData>(createInitialDynamicData());
  let remoteSyncTimer: ReturnType<typeof setTimeout> | null = null;
  let remoteSyncInFlight = false;

  // 计算属性
  const user = computed(() => dynamicData.user);
  const player = computed(() => dynamicData.player);
  const dungeon = computed(() => dynamicData.dungeon);
  const inventory = computed(() => dynamicData.inventory);
  const currentPage = computed(() => dynamicData.currentPage);

  // 配方计算属性（合并解锁状态）
  const recipes = computed(() => {
    return staticData.recipes.map(recipe => ({
      ...recipe,
      unlocked: dynamicData.unlockedRecipes.includes(recipe.id),
    }));
  });

  // ==================== 本地存储同步 ====================

  function syncToStorage(): void {
    if (dynamicData.user.isLoggedIn && dynamicData.user.email) {
      saveUserData(dynamicData.user.email, JSON.parse(JSON.stringify(dynamicData)));
      scheduleRemoteSync();
    }
  }

  function buildRankingPayload() {
    return {
      level: dynamicData.player.level,
      power: calculateTotalPower(dynamicData.player, dynamicData.inventory.equipment),
      attack: calculateTotalStat(dynamicData.inventory.equipment, 'attack'),
      defense: calculateTotalStat(dynamicData.inventory.equipment, 'defense'),
      hp: calculateTotalStat(dynamicData.inventory.equipment, 'hp') + dynamicData.player.maxHp,
      equipmentCount: dynamicData.inventory.equipment.length,
    };
  }

  async function syncToServer(): Promise<void> {
    if (remoteSyncInFlight || !dynamicData.user.isLoggedIn || !dynamicData.user.email || !getAccessToken()) {
      return;
    }

    remoteSyncInFlight = true;
    const snapshot = JSON.parse(JSON.stringify(dynamicData)) as DynamicData;

    try {
      await saveGameState(snapshot);
      await submitRanking({
        ...buildRankingPayload(),
        nickname: snapshot.user.nickname,
        avatar: snapshot.user.avatar,
      });
    } catch (error) {
      console.error('远端存档同步失败:', error);
    } finally {
      remoteSyncInFlight = false;
    }
  }

  function scheduleRemoteSync(): void {
    if (!getAccessToken()) return;

    if (remoteSyncTimer) {
      clearTimeout(remoteSyncTimer);
    }

    remoteSyncTimer = setTimeout(() => {
      void syncToServer();
    }, 800);
  }

  // ==================== 用户操作 ====================

  function initializeNewUser(email: string, createdAt: number, nickname?: string, avatar?: string): void {
    Object.assign(dynamicData, createInitialDynamicData());
    dynamicData.user = {
      email,
      nickname: nickname || generateNickname(),
      avatar: avatar || generateAvatar(email),
      isLoggedIn: true,
      createdAt,
    };

    dynamicData.dungeon.seed = Date.now();
    dynamicData.dungeon.rooms = dungeonGenerator.generateDungeon(
      dynamicData.dungeon.seed,
      dynamicData.dungeon.currentFloor,
      dynamicData.dungeon.maxFloor,
      dynamicData.user.careerDirection
    );
  }

  async function login(email: string, code: string): Promise<boolean> {
    const normalizedEmail = email.trim().toLowerCase();

    try {
      const auth = await loginWithEmailCode(normalizedEmail, code);
      setAccessToken(auth.accessToken);

      const remoteState = await fetchGameState().catch(() => ({ state: null }));
      const localState = loadUserData(normalizedEmail);

      if (remoteState.state?.user) {
        Object.assign(dynamicData, remoteState.state);
        dynamicData.user = {
          ...dynamicData.user,
          ...auth.user,
          email: normalizedEmail,
          nickname: dynamicData.user.nickname || auth.user.nickname || generateNickname(),
          avatar: dynamicData.user.avatar || auth.user.avatar || generateAvatar(normalizedEmail),
          isLoggedIn: true,
        };
      } else if (localState?.user?.isLoggedIn) {
        Object.assign(dynamicData, localState);
        dynamicData.user = {
          ...dynamicData.user,
          ...auth.user,
          email: normalizedEmail,
          nickname: dynamicData.user.nickname || auth.user.nickname || generateNickname(),
          avatar: dynamicData.user.avatar || auth.user.avatar || generateAvatar(normalizedEmail),
          isLoggedIn: true,
        };
      } else {
        initializeNewUser(
          normalizedEmail,
          auth.user.createdAt || Date.now(),
          auth.user.nickname,
          auth.user.avatar,
        );
      }

      syncLevelWithCP();
      addUserToList(dynamicData.user);
      setCurrentUserEmail(dynamicData.user.email);
      syncToStorage();
      return true;
    } catch (error) {
      console.error('登录失败:', error);
      return false;
    }
  }

  function logout(): void {
    syncToStorage(); // 先保存数据
    clearCurrentUser();
    clearAccessToken();
    Object.assign(dynamicData, createInitialDynamicData());
  }

  async function tryAutoLogin(): Promise<boolean> {
    const accessToken = getAccessToken();

    if (accessToken) {
      try {
        const bootstrap = await fetchBootstrapSession();

        if (bootstrap.state?.user) {
          Object.assign(dynamicData, bootstrap.state);
          dynamicData.user = {
            ...dynamicData.user,
            ...bootstrap.user,
            nickname: dynamicData.user.nickname || bootstrap.user.nickname || generateNickname(),
            avatar: dynamicData.user.avatar || bootstrap.user.avatar || generateAvatar(bootstrap.user.email),
            isLoggedIn: true,
          };
        } else {
          initializeNewUser(
            bootstrap.user.email,
            bootstrap.user.createdAt || Date.now(),
            bootstrap.user.nickname,
            bootstrap.user.avatar,
          );
        }

        syncLevelWithCP();
        addUserToList(dynamicData.user);
        setCurrentUserEmail(dynamicData.user.email);
        syncToStorage();
        return true;
      } catch (error) {
        console.error('自动登录失败，回退本地缓存:', error);
        clearAccessToken();
      }
    }

    const result = checkAutoLogin();
    if (result) {
      Object.assign(dynamicData, result.data);
      syncLevelWithCP();
      return true;
    }

    return false;
  }

  function updateNickname(nickname: string): void {
    dynamicData.user.nickname = nickname;
    addUserToList(dynamicData.user);
    syncToStorage();
  }

  function updateAvatar(avatar: string): void {
    dynamicData.user.avatar = avatar;
    addUserToList(dynamicData.user);
    syncToStorage();
  }

  function regenerateNickname(): string {
    const newNickname = generateNickname();
    dynamicData.user.nickname = newNickname;
    addUserToList(dynamicData.user);
    syncToStorage();
    return newNickname;
  }

  function setCareerDirection(career: CareerDirection): void {
    dynamicData.user.careerDirection = career;
    dynamicData.user.hasSelectedCareer = true;
    addUserToList(dynamicData.user);
    
    // 选择职业方向后重新生成迷宫（使用新的职业方向）
    dynamicData.dungeon.seed = Date.now();
    dynamicData.dungeon.rooms = dungeonGenerator.generateDungeon(
      dynamicData.dungeon.seed,
      dynamicData.dungeon.currentFloor,
      dynamicData.dungeon.maxFloor,
      career
    );
    
    syncToStorage();
  }

  function skipCareerSelection(): void {
    dynamicData.user.hasSelectedCareer = true;
    syncToStorage();
  }

  // ==================== 玩家操作 ====================

  function updatePlayerHP(delta: number): void {
    dynamicData.player.hp = Math.max(0, Math.min(dynamicData.player.maxHp, dynamicData.player.hp + delta));
    syncToStorage();
  }

  function updatePlayerStamina(delta: number): void {
    dynamicData.player.stamina = Math.max(0, Math.min(dynamicData.player.maxStamina, dynamicData.player.stamina + delta));
    syncToStorage();
  }

  // 根据CP值计算等级
  function calculateLevelFromCP(cp: number): number {
    // 每150CP升1级，最低1级
    return Math.max(1, Math.floor(cp / 150) + 1);
  }

  // 同步等级与CP值（用于数据加载后修复等级）
  function syncLevelWithCP(): void {
    const correctLevel = calculateLevelFromCP(dynamicData.player.cp);
    if (correctLevel > dynamicData.player.level) {
      const levelDiff = correctLevel - dynamicData.player.level;
      dynamicData.player.maxHp += levelDiff * 10;
      dynamicData.player.hp = dynamicData.player.maxHp;
      dynamicData.player.level = correctLevel;
    }
  }

  function updatePlayerCP(amount: number): void {
    dynamicData.player.cp += amount;
    // 根据CP自动更新等级
    const newLevel = calculateLevelFromCP(dynamicData.player.cp);
    if (newLevel > dynamicData.player.level) {
      // 升级时恢复满血并增加HP上限
      const levelDiff = newLevel - dynamicData.player.level;
      dynamicData.player.maxHp += levelDiff * 10;
      dynamicData.player.hp = dynamicData.player.maxHp;
      dynamicData.player.level = newLevel;
    }
    syncToStorage();
  }

  function updatePlayerGold(amount: number): void {
    dynamicData.player.gold += amount;
    syncToStorage();
  }

  function addExp(amount: number): void {
    // 经验值转换为CP（比例 1:1），等级由CP决定
    updatePlayerCP(amount);
  }

  // ==================== 材料操作 ====================

  function addMaterial(materialId: string, count: number = 1): void {
    const material = dynamicData.inventory.materials.find(m => m.id === materialId);
    if (material) {
      material.count += count;
    } else {
      const def = staticData.materialDefs[materialId];
      if (def) {
        dynamicData.inventory.materials.push({
          id: materialId,
          name: def.name,
          icon: def.icon,
          count,
          rarity: def.rarity,
        });
      }
    }
    syncToStorage();
  }

  function removeMaterial(materialId: string, count: number): boolean {
    const material = dynamicData.inventory.materials.find(m => m.id === materialId);
    if (material && material.count >= count) {
      material.count -= count;
      if (material.count <= 0) {
        const index = dynamicData.inventory.materials.findIndex(m => m.id === materialId);
        if (index >= 0) {
          dynamicData.inventory.materials.splice(index, 1);
        }
      }
      syncToStorage();
      return true;
    }
    return false;
  }

  // ==================== 装备操作 ====================

  function addEquipment(equipment: Equipment): void {
    dynamicData.inventory.equipment.push(equipment);
    syncToStorage();
  }

  function equipItem(itemId: string): boolean {
    const result = equipmentSystem.equip(itemId, {
      ...dynamicData,
      recipes: recipes.value,
    } as any);
    if (result) {
      syncToStorage();
    }
    return result;
  }

  function unequipItem(itemId: string): void {
    equipmentSystem.unequip(itemId, {
      ...dynamicData,
      recipes: recipes.value,
    } as any);
    syncToStorage();
  }

  function craftItem(recipeId: string): boolean {
    const recipe = staticData.recipes.find(r => r.id === recipeId);
    if (!recipe) return false;

    // 检查材料是否足够
    for (const mat of recipe.materials) {
      const material = dynamicData.inventory.materials.find(m => m.id === mat.id);
      if (!material || material.count < mat.count) {
        return false;
      }
    }

    // 消耗材料
    for (const mat of recipe.materials) {
      removeMaterial(mat.id, mat.count);
    }

    // 生成装备
    const newEquipment: Equipment = {
      id: `${recipeId}_${Date.now()}`,
      name: recipe.result.name,
      icon: recipe.result.icon,
      type: recipe.result.type,
      rarity: recipe.rarity,
      stats: { ...recipe.result.stats },
      equipped: false,
      enhanceLevel: 0,
      setId: recipe.setId, // 传递套装ID
    };

    dynamicData.inventory.equipment.push(newEquipment);
    syncToStorage();
    return true;
  }

  // ==================== 方案A: 装备强化系统 ====================

  // 强化消耗配置
  interface EnhanceResult {
    success: boolean;
    newLevel: number;
    message: string;
  }

  function enhanceEquipment(equipmentId: string): EnhanceResult {
    const equipment = dynamicData.inventory.equipment.find(e => e.id === equipmentId);
    if (!equipment) {
      return { success: false, newLevel: 0, message: '装备不存在' };
    }

    const currentLevel = equipment.enhanceLevel || 0;
    if (currentLevel >= 10) {
      return { success: false, newLevel: currentLevel, message: '已达到最高强化等级' };
    }

    // 强化成功（通过答题学习形式，答对即成功，不消耗材料）
    const newLevel = currentLevel + 1;
    equipment.enhanceLevel = newLevel;

    // 提升属性（每级提升10%基础属性）
    const enhanceMultiplier = 1 + newLevel * 0.1;
    if (equipment.stats.attack) equipment.stats.attack = Math.floor(equipment.stats.attack * enhanceMultiplier);
    if (equipment.stats.defense) equipment.stats.defense = Math.floor(equipment.stats.defense * enhanceMultiplier);
    if (equipment.stats.hp) equipment.stats.hp = Math.floor(equipment.stats.hp * enhanceMultiplier);
    if (equipment.stats.speed) equipment.stats.speed = Math.floor(equipment.stats.speed * enhanceMultiplier);
    if (equipment.stats.intelligence) equipment.stats.intelligence = Math.floor(equipment.stats.intelligence * enhanceMultiplier);
    if (equipment.stats.crit) equipment.stats.crit = Math.floor(equipment.stats.crit * enhanceMultiplier);
    if (equipment.stats.bugResist) equipment.stats.bugResist = Math.floor(equipment.stats.bugResist * enhanceMultiplier);

    syncToStorage();

    const isMaxLevel = newLevel === 10;
    return {
      success: true,
      newLevel,
      message: isMaxLevel ? `🎉 强化成功！${equipment.name} 达到满级+10，解锁金色光效！` : `✅ 强化成功！${equipment.name} +${newLevel}`
    };
  }

  // ==================== 方案C: 装备分解回收 ====================

  interface DecomposeResult {
    success: boolean;
    materials: { id: string; name: string; icon: string; count: number }[];
    message: string;
  }

  function decomposeEquipment(equipmentId: string): DecomposeResult {
    const equipmentIndex = dynamicData.inventory.equipment.findIndex(e => e.id === equipmentId);
    if (equipmentIndex === -1) {
      return { success: false, materials: [], message: '装备不存在' };
    }

    const equipment = dynamicData.inventory.equipment[equipmentIndex];

    // 已装备的不能分解
    if (equipment.equipped) {
      return { success: false, materials: [], message: '请先卸下装备再分解' };
    }

    // 根据装备稀有度和强化等级计算返还材料
    const returnedMaterials: { id: string; name: string; icon: string; count: number }[] = [];

    // 基础材料返还（根据配方）
    const recipe = staticData.recipes.find(r => r.result.name === equipment.name);
    if (recipe) {
      recipe.materials.forEach(mat => {
        const matDef = staticData.materialDefs[mat.id];
        if (matDef) {
          // 返还50%材料
          const returnCount = Math.floor(mat.count * 0.5);
          if (returnCount > 0) {
            addMaterial(mat.id, returnCount);
            returnedMaterials.push({
              id: mat.id,
              name: matDef.name,
              icon: matDef.icon,
              count: returnCount
            });
          }
        }
      });
    }

    // 强化等级额外返还
    const enhanceLevel = equipment.enhanceLevel || 0;
    if (enhanceLevel > 0) {
      // 每级强化返还1个水晶
      const crystalReturn = Math.floor(enhanceLevel * 0.5);
      if (crystalReturn > 0) {
        addMaterial('crystal', crystalReturn);
        returnedMaterials.push({
          id: 'crystal',
          name: '逻辑水晶',
          icon: '💎',
          count: crystalReturn
        });
      }
    }

    // 删除装备
    dynamicData.inventory.equipment.splice(equipmentIndex, 1);
    syncToStorage();

    if (returnedMaterials.length === 0) {
      return { success: true, materials: [], message: `✅ 已分解 ${equipment.name}，未获得材料` };
    }

    const materialStr = returnedMaterials.map(m => `${m.icon}×${m.count}`).join(' ');
    return { success: true, materials: returnedMaterials, message: `✅ 分解成功！获得 ${materialStr}` };
  }

  function unlockRecipe(recipeId: string): void {
    if (!dynamicData.unlockedRecipes.includes(recipeId)) {
      dynamicData.unlockedRecipes.push(recipeId);
      // 同时更新配方列表中的解锁状态
      const recipe = staticData.recipes.find(r => r.id === recipeId);
      if (recipe) {
        recipe.unlocked = true;
      }
      syncToStorage();
    }
  }

  // ==================== CP兑换商店 ====================

  // 材料兑换价格表
  const materialPrices: Record<string, { price: number; batchPrice: number; batchCount: number }> = {
    wood: { price: 15, batchPrice: 60, batchCount: 5 },
    iron: { price: 15, batchPrice: 60, batchCount: 5 },
    bug: { price: 12, batchPrice: 50, batchCount: 5 },
    crystal: { price: 60, batchPrice: 150, batchCount: 3 },
  };

  function exchangeCPForMaterial(materialId: string, count: number): boolean {
    const priceInfo = materialPrices[materialId];
    if (!priceInfo) return false;

    // 计算所需CP
    let cost = 0;
    if (count === priceInfo.batchCount) {
      cost = priceInfo.batchPrice; // 批量折扣价
    } else {
      cost = priceInfo.price * count;
    }

    // 检查CP是否足够
    if (dynamicData.player.cp < cost) {
      return false;
    }

    // 扣除CP并添加材料
    dynamicData.player.cp -= cost;
    addMaterial(materialId, count);
    syncToStorage();
    return true;
  }

  // 检查配方解锁条件（层数 + 答题正确率）- 方案E
  function checkRecipeUnlock(currentFloor: number, accuracy: number): string[] {
    const unlockedRecipes: string[] = [];
    
    // Bug靴：通关第1层解锁
    if (currentFloor >= 1 && !dynamicData.unlockedRecipes.includes('bug_boots')) {
      unlockRecipe('bug_boots');
      unlockedRecipes.push('Bug靴');
    }
    
    // 水晶甲：通关第2层 + 答题正确率≥80%
    if (currentFloor >= 2 && accuracy >= 80 && !dynamicData.unlockedRecipes.includes('crystal_armor')) {
      unlockRecipe('crystal_armor');
      unlockedRecipes.push('水晶甲');
    }
    
    // 传说之剑：通关第3层 + 答题正确率≥90%
    if (currentFloor >= 3 && accuracy >= 90 && !dynamicData.unlockedRecipes.includes('legendary_sword')) {
      unlockRecipe('legendary_sword');
      unlockedRecipes.push('传说之剑');
    }
    
    return unlockedRecipes;
  }

  // ==================== 迷宫操作 ====================

  function setCurrentPage(page: PageType): void {
    dynamicData.currentPage = page;
  }

  function setCurrentRoom(x: number, y: number): void {
    dynamicData.dungeon.currentRoom = { x, y };
    syncToStorage();
  }

  function exploreRoom(position: string): void {
    if (!dynamicData.dungeon.exploredRooms.includes(position)) {
      dynamicData.dungeon.exploredRooms.push(position);
      syncToStorage();
    }
  }

  function clearRoom(x: number, y: number): void {
    const room = dynamicData.dungeon.rooms.find(r => r.x === x && r.y === y);
    if (room) {
      room.cleared = true;
      room.unlockStatus = 'cleared';
      syncToStorage();
    }
  }

  function setRoomLearning(x: number, y: number, skillId?: string): void {
    const room = dynamicData.dungeon.rooms.find(r => r.x === x && r.y === y);
    if (room) {
      room.unlockStatus = 'learning';
      if (skillId) {
        room.linkedSkillId = skillId;
      }
      syncToStorage();
    }
  }

  function resetDungeon(): void {
    dynamicData.dungeon.currentRoom = { x: 0, y: 0 };
    dynamicData.dungeon.exploredRooms = ['0,0'];
    dynamicData.dungeon.currentFloor++;
    if (dynamicData.dungeon.currentFloor > dynamicData.dungeon.maxFloor) {
      dynamicData.dungeon.currentFloor = 1;
      dynamicData.dungeon.bossDefeated = false;
    }
    const newRooms = dungeonGenerator.generateDungeon(
      dynamicData.dungeon.seed,
      dynamicData.dungeon.currentFloor,
      dynamicData.dungeon.maxFloor,
      dynamicData.user.careerDirection
    );
    dynamicData.dungeon.rooms = newRooms;
    syncToStorage();
  }

  function defeatBoss(): void {
    dynamicData.dungeon.bossDefeated = true;
    syncToStorage();
  }

  function generateDungeon(): void {
    if (dynamicData.dungeon.rooms.length === 0) {
      dynamicData.dungeon.rooms = dungeonGenerator.generateDungeon(
        dynamicData.dungeon.seed,
        dynamicData.dungeon.currentFloor,
        dynamicData.dungeon.maxFloor,
        dynamicData.user.careerDirection
      );
    }
  }

  // ==================== 广告奖励系统 ====================

  /**
   * 观看广告获得CP奖励
   */
  async function watchAdForCP(adType: string = AD_TYPES.CP_SUPPLY): Promise<{
    success: boolean;
    cpRewarded: number;
    message: string;
    remainingCount: number;
  }> {
    // 检查次数限制
    if (!adManager.checkDailyLimit(adType)) {
      return {
        success: false,
        cpRewarded: 0,
        message: '今日观看次数已达上限',
        remainingCount: 0
      };
    }

    // 播放广告
    const result = await adManager.showAd(adType);
    
    if (result.success && result.completed && result.reward) {
      // 发放CP奖励
      dynamicData.player.cp += result.reward;
      syncToStorage();
      
      const remaining = adManager.getRemainingCount(adType);
      return {
        success: true,
        cpRewarded: result.reward,
        message: `🎉 获得 ${result.reward} CP！`,
        remainingCount: remaining
      };
    } else if (result.success && !result.completed) {
      return {
        success: false,
        cpRewarded: 0,
        message: result.message || '需要完整观看视频才能获得奖励',
        remainingCount: adManager.getRemainingCount(adType)
      };
    } else {
      return {
        success: false,
        cpRewarded: 0,
        message: result.message || '广告播放失败，请稍后重试',
        remainingCount: adManager.getRemainingCount(adType)
      };
    }
  }

  /**
   * 获取广告剩余观看次数
   */
  function getAdRemainingCount(adType: string): number {
    return adManager.getRemainingCount(adType);
  }

  /**
   * 检查广告是否可以观看
   */
  function canWatchAd(adType: string): boolean {
    return adManager.checkDailyLimit(adType);
  }

  /**
   * 预加载广告
   */
  function preloadAd(adType: string): void {
    adManager.preloadAd(adType);
  }

  /**
   * 设置双倍掉落标志
   */
  function setDoubleDrop(enabled: boolean): void {
    (dynamicData as any).doubleDropEnabled = enabled;
    syncToStorage();
  }

  /**
   * 获取双倍掉落状态
   */
  function isDoubleDropEnabled(): boolean {
    return (dynamicData as any).doubleDropEnabled || false;
  }

  // ==================== 套装系统 ====================

  /**
   * 计算已激活的套装效果
   */
  const activeSetBonuses = computed(() => {
    const equippedItems = dynamicData.inventory.equipment.filter(e => e.equipped && e.setId);
    const setCounts: Record<string, number> = {};
    
    equippedItems.forEach(item => {
      if (item.setId) {
        setCounts[item.setId] = (setCounts[item.setId] || 0) + 1;
      }
    });
    
    const result: { set: EquipmentSet; count: number; activeBonus: SetBonus | null }[] = [];
    
    equipmentSets.forEach(set => {
      const count = setCounts[set.id] || 0;
      if (count >= 2) {
        // 找到最高激活的套装效果
        const activeBonus = set.bonuses
          .filter(b => count >= b.requireCount)
          .sort((a, b) => b.requireCount - a.requireCount)[0] || null;
        result.push({ set, count, activeBonus });
      }
    });
    
    return result;
  });

  /**
   * 计算套装提供的总属性加成
   */
  const setBonusStats = computed((): EquipmentStats => {
    const stats: EquipmentStats = {};
    
    activeSetBonuses.value.forEach(({ activeBonus }) => {
      if (activeBonus) {
        Object.entries(activeBonus.stats).forEach(([key, value]) => {
          if (value) {
            stats[key as keyof EquipmentStats] = (stats[key as keyof EquipmentStats] || 0) + value;
          }
        });
      }
    });
    
    return stats;
  });

  /**
   * 获取装备所属的套装信息
   */
  function getEquipmentSetInfo(equipmentId: string): { set: EquipmentSet | null; count: number } {
    const equipment = dynamicData.inventory.equipment.find(e => e.id === equipmentId);
    if (!equipment || !equipment.setId) {
      return { set: null, count: 0 };
    }
    
    const set = equipmentSets.find(s => s.id === equipment.setId) || null;
    const equippedCount = dynamicData.inventory.equipment.filter(
      e => e.equipped && e.setId === equipment.setId
    ).length;
    
    return { set, count: equippedCount };
  }

  return {
    // 数据
    dynamicData,
    staticData,
    
    // 计算属性
    user,
    player,
    dungeon,
    inventory,
    recipes,
    currentPage,
    
    // 用户操作
    login,
    logout,
    tryAutoLogin,
    updateNickname,
    updateAvatar,
    regenerateNickname,
    setCareerDirection,
    skipCareerSelection,
    
    // 玩家操作
    updatePlayerHP,
    updatePlayerStamina,
    updatePlayerCP,
    updatePlayerGold,
    addExp,
    
    // 材料操作
    addMaterial,
    removeMaterial,
    
    // 装备操作
    addEquipment,
    equipItem,
    unequipItem,
    craftItem,
    unlockRecipe,
    checkRecipeUnlock,
    
    // 方案A: 装备强化 + 方案C: 分解回收
    enhanceEquipment,
    decomposeEquipment,
    
    // 套装系统
    equipmentSets,
    activeSetBonuses,
    setBonusStats,
    getEquipmentSetInfo,

    // CP兑换商店
    exchangeCPForMaterial,
    
    // 迷宫操作
    setCurrentPage,
    setCurrentRoom,
    exploreRoom,
    clearRoom,
    setRoomLearning,
    resetDungeon,
    defeatBoss,
    generateDungeon,
    
    // 广告奖励系统
    watchAdForCP,
    getAdRemainingCount,
    canWatchAd,
    preloadAd,
    setDoubleDrop,
    isDoubleDropEnabled,
    
    // 存储操作
    syncToStorage,
  };
});

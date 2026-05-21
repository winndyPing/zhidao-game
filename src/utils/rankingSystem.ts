/**
 * 排行榜系统
 * 包含装备评分计算、全服排名等功能
 */

import type { Equipment, Player, Rarity } from '@/types/game';

// ==================== 装备评分系统 ====================

// 属性权重配置
const STAT_WEIGHTS = {
  attack: 10,      // 攻击力
  defense: 8,      // 防御力
  intelligence: 6, // 智力
  speed: 4,        // 速度
  hp: 0.5,         // 生命值（每点生命值权重较低）
  bugResist: 5,    // Bug抗性
  crit: 12,        // 暴击率
};

// 稀有度倍率
const RARITY_MULTIPLIERS: Record<Rarity, number> = {
  common: 1.0,
  rare: 1.3,
  epic: 1.6,
  legendary: 2.0,
};

/**
 * 计算单件装备的战力评分
 */
export function calculateEquipmentScore(equipment: Equipment): number {
  let baseScore = 0;

  // 计算基础属性分数
  Object.entries(equipment.stats).forEach(([stat, value]) => {
    if (value !== undefined && value > 0) {
      const weight = STAT_WEIGHTS[stat as keyof typeof STAT_WEIGHTS] || 1;
      baseScore += value * weight;
    }
  });

  // 应用稀有度倍率
  const rarityMultiplier = RARITY_MULTIPLIERS[equipment.rarity] || 1;
  baseScore *= rarityMultiplier;

  // 强化等级加成：每级+15%
  const enhanceLevel = equipment.enhanceLevel || 0;
  const enhanceMultiplier = 1 + enhanceLevel * 0.15;
  baseScore *= enhanceMultiplier;

  // 满级额外奖励
  if (enhanceLevel >= 10) {
    baseScore *= 1.2; // 满级额外20%
  }

  return Math.floor(baseScore);
}

/**
 * 计算玩家总战力
 */
export function calculateTotalPower(
  player: Player,
  equipment: Equipment[]
): number {
  let totalPower = 0;

  // 基础战力（等级相关）
  totalPower += player.level * 100;

  // 装备战力（只计算已装备的）
  const equippedItems = equipment.filter(e => e.equipped);
  equippedItems.forEach(item => {
    totalPower += calculateEquipmentScore(item);
  });

  // CP贡献（每100CP加1点战力）
  totalPower += Math.floor(player.cp / 100);

  return totalPower;
}

/**
 * 计算特定属性总和（只计算已装备的）
 */
export function calculateTotalStat(
  equipment: Equipment[],
  statName: keyof typeof STAT_WEIGHTS
): number {
  return equipment
    .filter(e => e.equipped)
    .reduce((total, item) => total + (item.stats[statName] || 0), 0);
}

// ==================== 排行榜数据 ====================

export interface RankingEntry {
  rank: number;
  nickname: string;
  avatar: string;
  level: number;
  score: number;
  equipmentCount: number;
  isCurrentUser?: boolean;
}

export type RankingType = 'power' | 'attack' | 'defense' | 'hp' | 'equipment';

// 模拟全服玩家数据
const MOCK_PLAYERS: Omit<RankingEntry, 'rank' | 'isCurrentUser'>[] = [
  { nickname: '代码王者', avatar: '👑', level: 50, score: 12500, equipmentCount: 12 },
  { nickname: '算法大师', avatar: '🧙', level: 48, score: 11800, equipmentCount: 11 },
  { nickname: 'Bug终结者', avatar: '🦸', level: 45, score: 10500, equipmentCount: 10 },
  { nickname: '架构师小明', avatar: '🏗️', level: 42, score: 9800, equipmentCount: 9 },
  { nickname: '前端小王', avatar: '💻', level: 40, score: 9200, equipmentCount: 8 },
  { nickname: '后端老李', avatar: '🔧', level: 38, score: 8500, equipmentCount: 8 },
  { nickname: '全栈小张', avatar: '⚡', level: 36, score: 7800, equipmentCount: 7 },
  { nickname: '测试达人', avatar: '🔍', level: 35, score: 7200, equipmentCount: 7 },
  { nickname: '运维大神', avatar: '🚀', level: 33, score: 6800, equipmentCount: 6 },
  { nickname: '产品经理', avatar: '📊', level: 32, score: 6200, equipmentCount: 6 },
  { nickname: 'Python新手', avatar: '🐍', level: 30, score: 5800, equipmentCount: 5 },
  { nickname: 'Java爱好者', avatar: '☕', level: 28, score: 5200, equipmentCount: 5 },
  { nickname: 'Go语言达人', avatar: '🔵', level: 27, score: 4800, equipmentCount: 5 },
  { nickname: 'Rust学习', avatar: '🦀', level: 25, score: 4200, equipmentCount: 4 },
  { nickname: 'JavaScript粉', avatar: '💛', level: 24, score: 3800, equipmentCount: 4 },
  { nickname: 'TypeScript粉', avatar: '💙', level: 23, score: 3500, equipmentCount: 4 },
  { nickname: 'React开发者', avatar: '⚛️', level: 22, score: 3200, equipmentCount: 3 },
  { nickname: 'Vue爱好者', avatar: '💚', level: 21, score: 2900, equipmentCount: 3 },
  { nickname: 'Angular用户', avatar: '🅰️', level: 20, score: 2600, equipmentCount: 3 },
  { nickname: 'Svelte玩家', avatar: '🔥', level: 18, score: 2200, equipmentCount: 2 },
];

/**
 * 获取排行榜数据
 * @param type 排行类型
 * @param currentUser 当前玩家数据
 */
export function getRankingList(
  type: RankingType,
  currentUser?: {
    nickname: string;
    avatar: string;
    level: number;
    power: number;
    attack: number;
    defense: number;
    hp: number;
    equipmentCount: number;
  }
): RankingEntry[] {
  // 根据类型生成不同排行榜
  let players = [...MOCK_PLAYERS];

  // 为模拟玩家生成不同属性分数
  players = players.map(p => ({
    ...p,
    score: getScoreByType(p, type),
  }));

  // 添加当前玩家
  if (currentUser) {
    const currentScore = getCurrentUserScore(currentUser, type);
    players.push({
      nickname: currentUser.nickname,
      avatar: currentUser.avatar,
      level: currentUser.level,
      score: currentScore,
      equipmentCount: currentUser.equipmentCount,
    });
  }

  // 按分数排序
  players.sort((a, b) => b.score - a.score);

  // 添加排名和标记当前用户
  return players.map((p, index) => ({
    ...p,
    rank: index + 1,
    isCurrentUser: currentUser ? p.nickname === currentUser.nickname : false,
  }));
}

/**
 * 根据类型获取模拟玩家的分数
 */
function getScoreByType(player: typeof MOCK_PLAYERS[0], type: RankingType): number {
  switch (type) {
    case 'power':
      return player.score;
    case 'attack':
      return Math.floor(player.score * 0.25);
    case 'defense':
      return Math.floor(player.score * 0.2);
    case 'hp':
      return Math.floor(player.score * 0.1);
    case 'equipment':
      return player.equipmentCount;
    default:
      return player.score;
  }
}

/**
 * 获取当前用户在排行榜的分数
 */
function getCurrentUserScore(
  currentUser: NonNullable<Parameters<typeof getRankingList>['1']>,
  type: RankingType
): number {
  switch (type) {
    case 'power':
      return currentUser.power;
    case 'attack':
      return currentUser.attack;
    case 'defense':
      return currentUser.defense;
    case 'hp':
      return currentUser.hp;
    case 'equipment':
      return currentUser.equipmentCount;
    default:
      return currentUser.power;
  }
}

/**
 * 获取当前玩家排名
 */
export function getCurrentUserRank(
  type: RankingType,
  currentUser: NonNullable<Parameters<typeof getRankingList>['1']>
): number {
  const ranking = getRankingList(type, currentUser);
  const userEntry = ranking.find(r => r.isCurrentUser);
  return userEntry?.rank || ranking.length;
}

/**
 * 获取排行榜标题
 */
export function getRankingTitle(type: RankingType): string {
  const titles: Record<RankingType, string> = {
    power: '🏆 战力排行榜',
    attack: '⚔️ 攻击排行榜',
    defense: '🛡️ 防御排行榜',
    hp: '❤️ 生命排行榜',
    equipment: '🎒 装备数量榜',
  };
  return titles[type];
}

/**
 * 获取排行榜分数单位
 */
export function getScoreUnit(type: RankingType): string {
  const units: Record<RankingType, string> = {
    power: '战力',
    attack: '攻击',
    defense: '防御',
    hp: '生命',
    equipment: '件',
  };
  return units[type];
}

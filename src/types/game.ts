// ==================== 基础类型 ====================

export type Rarity = 'common' | 'rare' | 'epic' | 'legendary';

export type RoomType = 'combat' | 'treasure' | 'puzzle' | 'rest' | 'trap' | 'boss';

export type EquipmentType = 'weapon' | 'armor' | 'boots';
export interface QuizQuestion {
  question: string
  options: string[]
  answer: number
  explanation: string
}

// ==================== 用户类型 ====================

export interface UserInfo {
  phone: string;
  nickname: string;
  avatar: string;
  isLoggedIn: boolean;
  createdAt: number;
  careerDirection?: CareerDirection; // 职业方向
  hasSelectedCareer?: boolean; // 是否已选择职业方向
}

// ==================== 职业方向类型 ====================

export interface SkillRecommendation {
  id: string;
  name: string;
  icon: string;
  description: string;
  priority: 'core' | 'important' | 'optional'; // 核心技能、重要技能、可选技能
  resources?: LearningResource[]
  quizs?: QuizQuestion[]  // 技能级别的题库
}
export interface LearningResource {
  name: string
  url: string
  type: 'docs' | 'tutorial' | 'video' | 'book' | 'course' | 'github' | 'practice' | 'community' | 'article'
}

export interface CareerDirection {
  id: string;
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'mobile' | 'data' | 'ai' | 'devops' | 'game' | 'other';
  description: string;
  skills: SkillRecommendation[];
}

// ==================== 玩家类型 ====================

export interface Player {
  hp: number;
  maxHp: number;
  stamina: number;
  maxStamina: number;
  level: number;
  exp: number;
  nextLevelExp: number;
  cp: number;
  gold: number;
}

// ==================== 材料类型 ====================

export interface Material {
  id: string;
  name: string;
  icon: string;
  count: number;
  rarity: Rarity;
}

// ==================== 装备类型 ====================

export interface EquipmentStats {
  attack?: number;
  defense?: number;
  intelligence?: number;
  speed?: number;
  hp?: number;
  bugResist?: number;
  crit?: number;
}

export interface Equipment {
  id: string;
  name: string;
  icon: string;
  type: EquipmentType;
  rarity: Rarity;
  stats: EquipmentStats;
  equipped: boolean;
  enhanceLevel?: number; // 强化等级 0-10
  setId?: string; // 套装ID
}

// ==================== 套装系统 ====================

export interface SetBonus {
  requireCount: number; // 需要的装备数量
  description: string; // 效果描述
  stats: EquipmentStats; // 属性加成
}

export interface EquipmentSet {
  id: string;
  name: string;
  icon: string;
  description: string;
  bonuses: SetBonus[]; // 2件/4件/6件效果
}

// ==================== 房间事件类型 ====================

export interface RoomReward {
  cp?: number;
  items?: string[];
  recipe?: string;
}

export interface RoomEffect {
  hp?: number;
  stamina?: number;
  items?: string[];
}

export interface RoomEvent {
  name: string;
  desc: string;
  reward?: RoomReward;
  effect?: RoomEffect;
  skillHint?: string; // 关联的技能提示
}

// 房间解锁状态
export type RoomUnlockStatus = 'locked' | 'learning' | 'cleared';

export interface Room {
  x: number;
  y: number;
  type: RoomType;
  explored: boolean;
  event: RoomEvent;
  cleared: boolean;
  position: string;
  unlockStatus: RoomUnlockStatus; // 解锁状态：locked=未解锁, learning=学习中, cleared=已通关
  linkedSkillId?: string; // 关联的技能ID，用于保持学习和挑战的一致性
}

// ==================== 迷宫类型 ====================

export interface Dungeon {
  seed: number;
  currentFloor: number;
  maxFloor: number;
  currentRoom: { x: number; y: number };
  rooms: Room[];
  exploredRooms: string[];
  bossDefeated: boolean;
}

// ==================== 库存类型 ====================

export interface Inventory {
  materials: Material[];
  equipment: Equipment[];
  items: unknown[];
}

// ==================== 配方类型 ====================

export interface RecipeMaterial {
  id: string;
  count: number;
}

export interface RecipeResult {
  type: EquipmentType;
  name: string;
  icon: string;
  stats: EquipmentStats;
}

export interface Recipe {
  id: string;
  name: string;
  icon: string;
  rarity: Rarity;
  materials: RecipeMaterial[];
  result: RecipeResult;
  unlocked: boolean;
  setId?: string; // 所属套装ID
}

// ==================== 页面类型 ====================

export type PageType = 'dungeon' | 'craft' | 'inventory';

// ==================== 动态数据类型（用户相关，从0开始）====================

export interface DynamicData {
  user: UserInfo;
  player: Player;
  dungeon: Dungeon;
  inventory: Inventory;
  unlockedRecipes: string[]; // 已解锁的配方ID列表
  currentPage: PageType;
}

// ==================== 静态数据类型（游戏配置，不随用户变化）====================

export interface StaticData {
  recipes: Recipe[]; // 所有配方定义
  materialDefs: Record<string, { name: string; icon: string; rarity: Rarity }>;
}

// ==================== 弹窗配置类型 ====================

export interface EventChoice {
  text: string;
  effect: () => void;
}

export interface EventPopupConfig {
  title: string;
  description: string;
  content?: string;
  choices: EventChoice[];
}

// ==================== 谜题类型 ====================

export interface Puzzle {
  question: string;
  options: string[];
  answer: number;
}

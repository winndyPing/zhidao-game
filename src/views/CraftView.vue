<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import type { Recipe } from '@/types/game';
import { useGameStore } from '@/stores/gameStore';
import { AD_TYPES } from '@/utils/adManager';

import StatusBar from '@/components/StatusBar.vue';
import BottomNav from '@/components/BottomNav.vue';
import UserProfile from '@/components/UserProfile.vue';

const store = useGameStore();

// ==================== 状态 ====================

const showConfirm = ref(false);
const selectedRecipe = ref<Recipe | null>(null);

// 兑换确认弹窗状态
const showExchangeConfirm = ref(false);
const selectedExchangeItem = ref<ExchangeItem | null>(null);

// 强化学习状态
const selectedEnhanceEquip = ref<any>(null);

// 分解确认弹窗状态
const showDecomposeConfirm = ref(false);
const selectedDecomposeEquip = ref<any>(null);
const decomposeReturnText = ref('');

// 广告相关状态
const adLoading = ref(false);
const remainingAdCount = ref(10);
const showAdDialog = ref(false);

// 配方解锁弹窗状态
const showUnlockDialog = ref(false);
const selectedUnlockRecipe = ref<Recipe | null>(null);
const unlockAdLoading = ref(false);

// 兑换商店商品
interface ExchangeItem {
  id: string;
  name: string;
  icon: string;
  price: number;
  count: number;
}

const exchangeItems: ExchangeItem[] = [
  { id: 'wood', name: '代码木材', icon: '🧱', price: 60, count: 5 },
  { id: 'iron', name: '算法铁锭', icon: '🔩', price: 60, count: 5 },
  { id: 'bug', name: 'Bug碎片', icon: '🐛', price: 50, count: 5 },
  { id: 'crystal', name: '逻辑水晶', icon: '💎', price: 150, count: 3 },
];

// ==================== 计算属性 ====================

const materials = computed(() => store.inventory.materials);
const recipes = computed(() => store.recipes);

// 按配方装备查找
interface RecipeEquipmentStatus {
  name: string;
  icon: string;
  equipped: boolean;
  count: number;
  unlocked: boolean;
}

const ironSwordStatus = computed<RecipeEquipmentStatus>(() => {
  const items = store.inventory.equipment.filter(e => e.name === '铁剑');
  const equipped = items.find(e => e.equipped);
  return {
    name: '铁剑',
    icon: '🗡️',
    equipped: !!equipped,
    count: items.length,
    unlocked: store.recipes.find(r => r.id === 'iron_sword')?.unlocked ?? false,
  };
});

const crystalArmorStatus = computed<RecipeEquipmentStatus>(() => {
  const items = store.inventory.equipment.filter(e => e.name === '水晶甲');
  const equipped = items.find(e => e.equipped);
  return {
    name: '水晶甲',
    icon: '🛡️',
    equipped: !!equipped,
    count: items.length,
    unlocked: store.recipes.find(r => r.id === 'crystal_armor')?.unlocked ?? false,
  };
});

const bugBootsStatus = computed<RecipeEquipmentStatus>(() => {
  const items = store.inventory.equipment.filter(e => e.name === 'Bug追踪靴');
  const equipped = items.find(e => e.equipped);
  return {
    name: 'Bug靴',
    icon: '👟',
    equipped: !!equipped,
    count: items.length,
    unlocked: store.recipes.find(r => r.id === 'bug_boots')?.unlocked ?? false,
  };
});

const legendarySwordStatus = computed<RecipeEquipmentStatus>(() => {
  const items = store.inventory.equipment.filter(e => e.name === '代码王者之剑');
  const equipped = items.find(e => e.equipped);
  return {
    name: '传说之剑',
    icon: '⚔️',
    equipped: !!equipped,
    count: items.length,
    unlocked: store.recipes.find(r => r.id === 'legendary_sword')?.unlocked ?? false,
  };
});

const ironHelmetStatus = computed<RecipeEquipmentStatus>(() => {
  const items = store.inventory.equipment.filter(e => e.name === '铁盔');
  const equipped = items.find(e => e.equipped);
  return {
    name: '铁盔',
    icon: '⛑️',
    equipped: !!equipped,
    count: items.length,
    unlocked: store.recipes.find(r => r.id === 'iron_helmet')?.unlocked ?? false,
  };
});

const ironBracerStatus = computed<RecipeEquipmentStatus>(() => {
  const items = store.inventory.equipment.filter(e => e.name === '铁护腕');
  const equipped = items.find(e => e.equipped);
  return {
    name: '铁护腕',
    icon: '🧤',
    equipped: !!equipped,
    count: items.length,
    unlocked: store.recipes.find(r => r.id === 'iron_bracer')?.unlocked ?? false,
  };
});

// 可强化的未装备装备列表
const unequippedEquipment = computed(() => {
  return store.inventory.equipment.filter(e => !e.equipped);
});

// ==================== 职场进阶系统 ====================

// 计算玩家总技能等级
const playerTotalLevel = computed(() => {
  return store.inventory.equipment.reduce((sum, e) => sum + (e.enhanceLevel || 0), 0);
});

// 下阶段目标提示
const nextJobTarget = computed(() => {
  const total = playerTotalLevel.value;
  if (total < 5) return '中级工程师 (需+5)';
  if (total < 15) return '高级工程师 (需+15)';
  if (total < 30) return '技术专家 (需+30)';
  if (total < 50) return '架构师 (需+50)';
  if (total < 70) return '技术总监 (需+70)';
  return '已到达最高职级';
});

// 职场提示语
const careerTips = [
  '持续学习是职场晋升的关键！',
  '每一项技能提升都让你离好工作更近一步！',
  '技术深度决定职业高度！',
  '现在投入学习，未来收获高薪Offer！',
  '技能树点满，大厂随便选！',
  '编程能力就是你的职场竞争力！',
];

const careerTip = computed(() => {
  return careerTips[Math.floor(Math.random() * careerTips.length)];
});

// 获取职级名称
function getJobTitle(totalLevel: number): string {
  if (totalLevel >= 70) return '👑 技术总监';
  if (totalLevel >= 50) return '🏗️ 架构师';
  if (totalLevel >= 30) return '🔬 技术专家';
  if (totalLevel >= 15) return '⚙️ 高级工程师';
  if (totalLevel >= 5) return '💻 中级工程师';
  return '🌱 初级工程师';
}

// 获取技能等级名称
function getSkillLevelName(level: number): string {
  if (level >= 10) return '【精通】';
  if (level >= 8) return '【专家】';
  if (level >= 6) return '【高级】';
  if (level >= 4) return '【熟练】';
  if (level >= 2) return '【进阶】';
  if (level >= 1) return '【入门】';
  return '【未入门】';
}

// 可分解的装备列表（未装备的）
const decomposableEquipment = computed(() => {
  return store.inventory.equipment.filter(e => !e.equipped);
});

// ==================== 方法 ====================

function canCraft(recipe: Recipe): boolean {
  if (!recipe.unlocked) return false;
  return recipe.materials.every(m => getMaterialCount(m.id) >= m.count);
}

function onRecipeClick(recipe: Recipe) {
  if (!recipe.unlocked) {
    // 显示解锁选项弹窗
    selectedUnlockRecipe.value = recipe;
    showUnlockDialog.value = true;
    return;
  }

  if (!canCraft(recipe)) {
    showToast('❌ 材料不足');
    return;
  }

  selectedRecipe.value = recipe;
  showConfirm.value = true;
}

// 邀请好友解锁
function onInviteUnlock() {
  if (!selectedUnlockRecipe.value) return;

  // 模拟邀请好友逻辑（实际项目中需要接入分享API）
  showToast('📤 分享链接已复制，邀请好友注册即可解锁！');

  // 这里模拟邀请成功（实际需要后端验证）
  setTimeout(() => {
    store.unlockRecipe(selectedUnlockRecipe.value!.id);
    showUnlockDialog.value = false;
    showToast(`🎉 恭喜解锁 ${selectedUnlockRecipe.value?.name}！`);
    selectedUnlockRecipe.value = null;
  }, 500);
}

// 观看视频解锁
async function onVideoUnlock() {
  if (!selectedUnlockRecipe.value) return;

  unlockAdLoading.value = true;

  // 模拟观看视频
  setTimeout(() => {
    store.unlockRecipe(selectedUnlockRecipe.value!.id);
    showUnlockDialog.value = false;
    showToast(`🎉 恭喜解锁 ${selectedUnlockRecipe.value?.name}！`);
    selectedUnlockRecipe.value = null;
    unlockAdLoading.value = false;
  }, 1500);
}

function confirmCraft() {
  if (selectedRecipe.value) {
    const success = store.craftItem(selectedRecipe.value.id);
    if (success) {
      showToast(`🎉 合成成功！获得 ${selectedRecipe.value.name}`);
      if (selectedRecipe.value.rarity === 'legendary') {
        showToast('🏆 解锁成就：传说工匠');
      }
    }
  }
  showConfirm.value = false;
  selectedRecipe.value = null;
}

function cancelCraft() {
  showConfirm.value = false;
  selectedRecipe.value = null;
}

function onNavChange(page: string) {
  store.setCurrentPage(page as any);
}

function getMaterialIcon(id: string): string {
  const icons: Record<string, string> = {
    wood: '🧱',
    iron: '🔩',
    crystal: '💎',
    bug: '🐛',
  };
  return icons[id] || '❓';
}

function getMaterialCount(materialId: string): number {
  const material = materials.value.find(m => m.id === materialId);
  return material?.count || 0;
}

function getRarityIcon(rarity: string): string {
  const icons: Record<string, string> = {
    common: '🥉',
    rare: '🥈',
    epic: '🥇',
    legendary: '👑',
  };
  return icons[rarity] || '🥉';
}

function showToast(message: string) {
  const toast = document.createElement('div');
  toast.className = 'fixed bottom-20 left-1/2 -translate-x-1/2 bg-gb-darker text-gb-bg px-4 py-2 border-4 border-gb-dark z-50';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}

// ==================== CP兑换 ====================

function onExchange(item: ExchangeItem) {
  if (store.player.cp < item.price) {
    showToast(`❌ CP不足，还需要 ${item.price - store.player.cp} CP`);
    return;
  }

  selectedExchangeItem.value = item;
  showExchangeConfirm.value = true;
}

function confirmExchange() {
  if (selectedExchangeItem.value) {
    const success = store.exchangeCPForMaterial(selectedExchangeItem.value.id, selectedExchangeItem.value.count);
    if (success) {
      showToast(`✅ 兑换成功！获得 ${selectedExchangeItem.value.icon} ×${selectedExchangeItem.value.count}`);
    } else {
      showToast('❌ 兑换失败');
    }
  }
  showExchangeConfirm.value = false;
  selectedExchangeItem.value = null;
}

function cancelExchange() {
  showExchangeConfirm.value = false;
  selectedExchangeItem.value = null;
}

// ==================== 方案A: 装备强化（学习技能形式）====================

// 强化学习题目
interface EnhanceQuiz {
  question: string;
  options: string[];
  answer: number; // 正确答案索引
  explanation: string;
}

// 各等级强化题目
const enhanceQuizs: EnhanceQuiz[] = [
  {
    question: 'Python中用什么关键字定义函数？',
    options: ['function', 'def', 'func', 'define'],
    answer: 1,
    explanation: 'Python使用def关键字定义函数',
  },
  {
    question: 'JavaScript中声明常量的关键字是？',
    options: ['var', 'let', 'const', 'static'],
    answer: 2,
    explanation: 'const用于声明常量',
  },
  {
    question: 'HTML中用于定义无序列表的标签是？',
    options: ['<ol>', '<ul>', '<li>', '<list>'],
    answer: 1,
    explanation: '<ul>定义无序列表',
  },
  {
    question: 'CSS中选择类选择器的符号是？',
    options: ['#', '.', '@', '$'],
    answer: 1,
    explanation: '.className 选择类',
  },
  {
    question: 'Git中查看当前状态的命令是？',
    options: ['git log', 'git status', 'git diff', 'git show'],
    answer: 1,
    explanation: 'git status查看工作区状态',
  },
  {
    question: 'Python中列表的append方法作用是？',
    options: ['删除元素', '添加元素到末尾', '排序', '反转'],
    answer: 1,
    explanation: 'append()向列表末尾添加元素',
  },
  {
    question: 'JavaScript中===和==的区别是？',
    options: ['没有区别', '===严格相等不转换类型', '==更严格', '===速度更快'],
    answer: 1,
    explanation: '===是严格相等，不进行类型转换',
  },
  {
    question: 'CSS中设置元素隐藏的常用属性是？',
    options: ['hidden', 'display: none', 'invisible', 'opacity: 0'],
    answer: 1,
    explanation: 'display: none 完全隐藏元素',
  },
  {
    question: 'Python中获取字典键值对数量的函数是？',
    options: ['size()', 'length()', 'len()', 'count()'],
    answer: 2,
    explanation: 'len()函数获取长度',
  },
  {
    question: 'Git中创建新分支的命令是？',
    options: ['git new', 'git branch', 'git create', 'git checkout'],
    answer: 1,
    explanation: 'git branch <name>创建分支',
  },
];

// 强化学习状态
const showEnhanceQuiz = ref(false);
const currentQuiz = ref<EnhanceQuiz | null>(null);
const selectedQuizAnswer = ref<number | null>(null);
const showQuizResult = ref(false);
const quizCorrect = ref(false);

function openEnhanceConfirm(equip: any) {
  const currentLevel = equip.enhanceLevel || 0;
  if (currentLevel >= 10) return;

  selectedEnhanceEquip.value = equip;
  // 随机选择一道题目
  currentQuiz.value = enhanceQuizs[Math.floor(Math.random() * enhanceQuizs.length)];
  selectedQuizAnswer.value = null;
  showQuizResult.value = false;
  quizCorrect.value = false;
  showEnhanceQuiz.value = true;
}

function selectQuizAnswer(index: number) {
  if (showQuizResult.value) return;
  selectedQuizAnswer.value = index;
}

function submitQuizAnswer() {
  if (selectedQuizAnswer.value === null || !currentQuiz.value) return;

  showQuizResult.value = true;
  quizCorrect.value = selectedQuizAnswer.value === currentQuiz.value.answer;
}

function finishEnhanceQuiz() {
  if (!selectedEnhanceEquip.value) return;

  if (quizCorrect.value) {
    // 答题正确，强化成功
    const oldJobTitle = getJobTitle(playerTotalLevel.value);
    
    const result = store.enhanceEquipment(selectedEnhanceEquip.value.id);
    
    // 检查是否获得职级晋升
    const newJobTitle = getJobTitle(playerTotalLevel.value + 1);
    if (newJobTitle !== oldJobTitle) {
      showToast(`🎉 ${result.message}`);
      setTimeout(() => {
        showToast(`🏆 恭喜晋升！成为「${newJobTitle}」！`);
      }, 500);
      setTimeout(() => {
        showToast('💼 更高的技能等级 = 更好的工作机会！');
      }, 1500);
    } else {
      showToast(result.message);
    }
  } else {
    // 答题失败
    showToast('❌ 考核未通过！请继续学习后再试');
  }

  // 关闭弹窗并重置状态
  showEnhanceQuiz.value = false;
  selectedEnhanceEquip.value = null;
  currentQuiz.value = null;
  selectedQuizAnswer.value = null;
  showQuizResult.value = false;
  quizCorrect.value = false;
}

function cancelEnhance() {
  showEnhanceQuiz.value = false;
  selectedEnhanceEquip.value = null;
  currentQuiz.value = null;
  selectedQuizAnswer.value = null;
  showQuizResult.value = false;
  quizCorrect.value = false;
}

// ==================== 方案C: 装备分解 ====================

function openDecomposeConfirm(equip: any) {
  selectedDecomposeEquip.value = equip;

  // 计算返还材料
  const returns: string[] = [];
  const recipe = store.staticData.recipes.find((r: any) => r.result.name === equip.name);
  if (recipe) {
    recipe.materials.forEach((mat: any) => {
      const returnCount = Math.floor(mat.count * 0.5);
      if (returnCount > 0) {
        const matDef = store.staticData.materialDefs[mat.id as keyof typeof store.staticData.materialDefs];
        if (matDef) {
          returns.push(`${matDef.icon}×${returnCount}`);
        }
      }
    });
  }

  // 强化等级额外返还
  const enhanceLevel = equip.enhanceLevel || 0;
  if (enhanceLevel > 0) {
    const crystalReturn = Math.floor(enhanceLevel * 0.5);
    if (crystalReturn > 0) {
      returns.push(`💎×${crystalReturn}`);
    }
  }

  decomposeReturnText.value = returns.length > 0 ? returns.join(' ') : '无';
  showDecomposeConfirm.value = true;
}

function confirmDecompose() {
  if (selectedDecomposeEquip.value) {
    const result = store.decomposeEquipment(selectedDecomposeEquip.value.id);
    showToast(result.message);
  }
  showDecomposeConfirm.value = false;
  selectedDecomposeEquip.value = null;
  decomposeReturnText.value = '';
}

function cancelDecompose() {
  showDecomposeConfirm.value = false;
  selectedDecomposeEquip.value = null;
  decomposeReturnText.value = '';
}

// ==================== 广告奖励 ====================

// 更新剩余广告次数
const updateAdCount = () => {
  remainingAdCount.value = store.getAdRemainingCount(AD_TYPES.CP_SUPPLY);
};

// 预加载广告
onMounted(() => {
  store.preloadAd(AD_TYPES.CP_SUPPLY);
  updateAdCount();
});

// 打开广告弹窗
const openAdDialog = () => {
  updateAdCount();
  showAdDialog.value = true;
};

// 关闭广告弹窗
const closeAdDialog = () => {
  showAdDialog.value = false;
};

// 观看广告获得CP
const handleWatchAd = async () => {
  if (adLoading.value) return;
  
  adLoading.value = true;
  const result = await store.watchAdForCP(AD_TYPES.CP_SUPPLY);
  adLoading.value = false;
  
  // 更新剩余次数
  updateAdCount();
  
  // 显示结果
  showToast(result.message);
  
  // 成功后关闭弹窗
  if (result.success) {
    showAdDialog.value = false;
  }
};
</script>

<template>
  <div class="mx-auto flex h-full min-h-0 w-full max-w-[430px] flex-col overflow-x-hidden rounded-[28px] border-8 border-gb-dark bg-gb-bg p-4 shadow-pixel-lg md:w-full">
    <!-- 可滚动内容区域 -->
    <div class="min-h-0 flex-1 overflow-y-auto">
      <!-- 用户资料 -->
      <UserProfile />
      
      <!-- 头部 -->
      <div class="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <button class="pixel-btn small" @click="store.setCurrentPage('dungeon')">
          ← 返回
        </button>
        <div class="text-gb-darker font-bold text-lg">⚒️ 装备工坊</div>
      </div>

      <!-- 状态栏 -->
      <StatusBar />

      <!-- 材料库存 -->
      <div class="pixel-dialog">
        <span class="font-bold block mb-3">📦 材料库存</span>
        <div class="flex flex-wrap gap-2">
          <div
            v-for="material in materials"
            :key="material.id"
            class="bg-gb-light p-2 border-2 border-gb-darker rounded text-xs flex items-center gap-1"
          >
            <span class="text-base">{{ material.icon }}</span>
            <span>{{ material.name }} ×{{ material.count }}</span>
          </div>
        </div>
      </div>

      <!-- CP兑换商店 -->
      <div class="pixel-dialog">
        <div class="mb-3 flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
          <span class="font-bold">💰 CP兑换商店 ({{ store.player.cp }}CP)</span>
          <button
            @click="openAdDialog"
            class="w-full px-2 py-1 bg-gb-gold text-white text-xs border-2 border-gb-darker rounded hover:brightness-110 active:translate-y-0.5 lg:w-auto"
          >
            📺 看广告得CP
          </button>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div
            v-for="item in exchangeItems"
            :key="item.id"
            class="bg-gb-light border-2 border-gb-darker p-2 text-center cursor-pointer transition-all"
            :class="{ 'opacity-50': store.player.cp < item.price, 'hover:border-gb-gold': store.player.cp >= item.price }"
            @click="onExchange(item)"
          >
            <div class="text-xl mb-1">{{ item.icon }}</div>
            <div class="text-[10px] mb-1">{{ item.name }}</div>
            <div class="text-xs text-gb-textgold font-bold">{{ item.price }}CP</div>
            <div class="text-[9px] text-gb-dark">{{ item.count }}个</div>
          </div>
        </div>
      </div>

      <!-- 合成配方 -->
      <div class="pixel-dialog">
        <span class="font-bold block mb-3">📜 合成配方</span>
        <div class="grid grid-cols-2 gap-3">
          <div
            v-for="recipe in recipes"
            :key="recipe.id"
            class="relative min-w-0 bg-gb-light border-4 border-gb-dark p-3 cursor-pointer transition-all"
            :class="{
              'hover:bg-gb-bg hover:border-gb-gold': recipe.unlocked
            }"
            @click="onRecipeClick(recipe)"
          >
            <!-- 未解锁遮罩 -->
            <div
              v-if="!recipe.unlocked"
              class="absolute inset-0 bg-black/50 flex flex-col items-center justify-center z-10"
            >
              <span class="text-2xl mb-1">🔒</span>
              <span class="text-white text-xs">点击解锁</span>
            </div>
            <!-- 只有传说之剑显示稀有度图标 -->
            <div v-if="recipe.id === 'legendary_sword'" class="absolute -top-2 -left-2 text-lg">
              {{ getRarityIcon(recipe.rarity) }}
            </div>
            <div class="text-2xl text-center mb-1" :class="{ 'opacity-30': !recipe.unlocked }">{{ recipe.icon }}</div>
            <div class="text-center text-sm font-bold mb-2" :class="{ 'opacity-30': !recipe.unlocked }">{{ recipe.name }}</div>
            <div class="text-xs space-y-1" :class="{ 'opacity-30': !recipe.unlocked }">
              <div
                v-for="material in recipe.materials"
                :key="material.id"
                :class="getMaterialCount(material.id) >= material.count ? 'text-green-700' : 'text-red-600'"
              >
                {{ getMaterialIcon(material.id) }} {{ getMaterialCount(material.id) }}/{{ material.count }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 已装备 -->
      <div class="pixel-dialog">
        <span class="font-bold block mb-2">🎒 装备栏</span>
        <div class="grid grid-cols-3 gap-2 bg-gb-dark p-3 border-4 border-gb-darker sm:grid-cols-6">
          <div
            class="equip-slot relative min-w-0"
            :class="{ 'opacity-50': ironSwordStatus.count === 0 }"
          >
            <span class="text-2xl text-center block">{{ ironSwordStatus.icon }}</span>
            <span class="text-[10px] text-center mt-1 block" :class="{ 'text-gb-textgold font-bold': ironSwordStatus.equipped }">
              {{ ironSwordStatus.name }}
            </span>
            <span v-if="ironSwordStatus.count > 0" class="absolute -top-1 -right-1 bg-gb-gold text-gb-darker text-[10px] px-1 rounded font-bold">
              ×{{ ironSwordStatus.count }}
            </span>
          </div>
          <div
            class="equip-slot relative min-w-0"
            :class="{ 'opacity-50': crystalArmorStatus.count === 0 }"
          >
            <span class="text-2xl text-center block">{{ crystalArmorStatus.icon }}</span>
            <span class="text-[10px] text-center mt-1 block" :class="{ 'text-gb-textgold font-bold': crystalArmorStatus.equipped }">
              {{ crystalArmorStatus.name }}
            </span>
            <span v-if="crystalArmorStatus.count > 0" class="absolute -top-1 -right-1 bg-gb-gold text-gb-darker text-[10px] px-1 rounded font-bold">
              ×{{ crystalArmorStatus.count }}
            </span>
          </div>
          <div
            class="equip-slot relative min-w-0"
            :class="{ 'opacity-50': bugBootsStatus.count === 0 }"
          >
            <span class="text-2xl text-center block">{{ bugBootsStatus.icon }}</span>
            <span class="text-[10px] text-center mt-1 block" :class="{ 'text-gb-textgold font-bold': bugBootsStatus.equipped }">
              {{ bugBootsStatus.name }}
            </span>
            <span v-if="bugBootsStatus.count > 0" class="absolute -top-1 -right-1 bg-gb-gold text-gb-darker text-[10px] px-1 rounded font-bold">
              ×{{ bugBootsStatus.count }}
            </span>
          </div>
          <div
            class="equip-slot relative min-w-0"
            :class="{ 'opacity-50': legendarySwordStatus.count === 0 }"
          >
            <span class="text-2xl text-center block">{{ legendarySwordStatus.icon }}</span>
            <span class="text-[10px] text-center mt-1 block" :class="{ 'text-gb-textgold font-bold': legendarySwordStatus.equipped }">
              {{ legendarySwordStatus.name }}
            </span>
            <span v-if="legendarySwordStatus.count > 0" class="absolute -top-1 -right-1 bg-gb-gold text-gb-darker text-[10px] px-1 rounded font-bold">
              ×{{ legendarySwordStatus.count }}
            </span>
          </div>
          <div
            class="equip-slot relative min-w-0"
            :class="{ 'opacity-50': ironHelmetStatus.count === 0 }"
          >
            <span class="text-2xl text-center block">{{ ironHelmetStatus.icon }}</span>
            <span class="text-[10px] text-center mt-1 block" :class="{ 'text-gb-textgold font-bold': ironHelmetStatus.equipped }">
              {{ ironHelmetStatus.name }}
            </span>
            <span v-if="ironHelmetStatus.count > 0" class="absolute -top-1 -right-1 bg-gb-gold text-gb-darker text-[10px] px-1 rounded font-bold">
              ×{{ ironHelmetStatus.count }}
            </span>
          </div>
          <div
            class="equip-slot relative min-w-0"
            :class="{ 'opacity-50': ironBracerStatus.count === 0 }"
          >
            <span class="text-2xl text-center block">{{ ironBracerStatus.icon }}</span>
            <span class="text-[10px] text-center mt-1 block" :class="{ 'text-gb-textgold font-bold': ironBracerStatus.equipped }">
              {{ ironBracerStatus.name }}
            </span>
            <span v-if="ironBracerStatus.count > 0" class="absolute -top-1 -right-1 bg-gb-gold text-gb-darker text-[10px] px-1 rounded font-bold">
              ×{{ ironBracerStatus.count }}
            </span>
          </div>
        </div>
      </div>

      <!-- 方案A: 装备强化 = 技能提升 -->
      <div class="pixel-dialog relative overflow-hidden">
        <!-- 顶部装饰条 -->
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-gb-gold to-purple-500"></div>
        
        <div class="mb-2 flex items-center justify-between gap-3">
          <span class="font-bold text-gb-darker">💼 装备强化</span>
        </div>
        
        <!-- 职场等级说明 -->
        <div class="bg-gb-dark/10 border border-gb-dark/30 rounded p-2 mb-3">
          <div class="flex items-center gap-2 mb-1">
            <span class="text-sm">🏢</span>
            <span class="text-xs font-bold text-gb-darker">当前职级: {{ getJobTitle(playerTotalLevel) }}</span>
          </div>
          <div class="text-[10px] text-gb-dark">
            累计技能等级: +{{ playerTotalLevel }} | 下阶目标: {{ nextJobTarget }}
          </div>
        </div>
        
        <div class="text-xs text-gb-dark mb-2 flex items-center gap-1">
          <span class="animate-pulse">📚</span>
          <span>学习编程技能提升装备 = 提升职场竞争力</span>
        </div>
        
        <div class="space-y-2 max-h-40 overflow-y-auto">
          <div
            v-for="equip in unequippedEquipment"
            :key="equip.id"
            class="relative flex flex-col gap-3 bg-gb-light border-2 border-gb-darker p-2 sm:flex-row sm:items-center sm:justify-between"
            :class="{ 'border-gb-gold bg-gb-gold/10': (equip.enhanceLevel || 0) >= 8 }"
          >
            <div class="flex min-w-0 items-center gap-2">
              <div class="relative">
                <span class="text-xl">{{ equip.icon }}</span>
                <!-- 技能熟练度光环 -->
                <div v-if="(equip.enhanceLevel || 0) >= 5" class="absolute inset-0 bg-gb-gold/30 rounded-full blur-sm animate-pulse"></div>
                <!-- 高等级职场精英标记 - 放在图标右上角 -->
                <div v-if="(equip.enhanceLevel || 0) >= 8" class="absolute -top-2 -right-2 text-xs animate-bounce">👔</div>
              </div>
              <div class="min-w-0">
                <div class="text-sm font-bold">{{ equip.name }}</div>
                <div class="text-xs">
                  <span class="text-gb-dark">{{ getSkillLevelName(equip.enhanceLevel || 0) }}</span>
                  <span class="text-gb-textgold font-bold ml-1">+{{ equip.enhanceLevel || 0 }}</span>
                  <span v-if="(equip.enhanceLevel || 0) >= 10" class="text-purple-600 font-bold ml-1">🏆 行业专家</span>
                </div>
              </div>
            </div>
            <button
              class="pixel-btn small relative w-full overflow-hidden text-xs sm:w-auto"
              :class="{ 
                'opacity-50': (equip.enhanceLevel || 0) >= 10,
                'bg-gradient-to-r from-gb-gold/30 to-green-400/30': (equip.enhanceLevel || 0) < 10
              }"
              :disabled="(equip.enhanceLevel || 0) >= 10"
              @click="openEnhanceConfirm(equip)"
            >
              <span v-if="(equip.enhanceLevel || 0) >= 10">已精通</span>
              <span v-else class="flex items-center gap-1">
                <span>🎓</span>
                <span>进修</span>
              </span>
            </button>
          </div>
        </div>
        <div v-if="unequippedEquipment.length === 0" class="text-center text-gb-dark text-sm py-4">
          暂无待提升的技能装备
        </div>
        
        <!-- 底部职场提示 -->
        <div class="mt-3 pt-2 border-t border-gb-dark/20 text-[10px] text-gb-dark text-center">
          💡 <span class="text-gb-darker font-bold">{{ careerTip }}</span>
        </div>
      </div>

      <!-- 方案C: 装备分解 -->
      <div class="pixel-dialog">
        <span class="font-bold block mb-3">♻️ 装备分解 (返还50%材料)</span>
        <div class="space-y-2 max-h-40 overflow-y-auto">
          <div
            v-for="equip in decomposableEquipment"
            :key="equip.id"
            class="flex flex-col gap-3 bg-gb-light border-2 border-gb-darker p-2 sm:flex-row sm:items-center sm:justify-between"
          >
            <div class="flex min-w-0 items-center gap-2">
              <span class="text-xl">{{ equip.icon }}</span>
              <div class="min-w-0">
                <div class="text-sm font-bold">{{ equip.name }}</div>
                <div class="text-xs text-gb-dark">+{{ equip.enhanceLevel || 0 }}</div>
              </div>
            </div>
            <button
              class="pixel-btn small w-full text-xs sm:w-auto"
              @click="openDecomposeConfirm(equip)"
            >
              分解
            </button>
          </div>
        </div>
        <div v-if="decomposableEquipment.length === 0" class="text-center text-gb-dark text-sm py-4">
          暂无可分解的装备
        </div>
      </div>
    </div>

    <!-- 底部导航 -->
    <BottomNav current-page="craft" @change="onNavChange" />
  </div>

  <!-- 合成确认弹窗 -->
  <div v-if="showConfirm" class="fixed inset-0 z-50">
    <div class="absolute inset-0 bg-black/70" />
    <div class="absolute top-1/2 left-1/2 w-[calc(100vw-24px)] max-w-72 -translate-x-1/2 -translate-y-1/2 animate-pop-in">
      <div class="bg-gb-bg border-8 border-gb-darker p-5 text-center">
        <span class="text-gb-darker font-bold text-lg block mb-2">合成 {{ selectedRecipe?.name }}?</span>
        <span class="text-gb-darker text-sm block mb-4">
          消耗材料: {{ selectedRecipe?.materials.map(m => `${getMaterialIcon(m.id)} x${m.count}`).join(' ') }}
        </span>
        <div class="flex flex-col gap-3 sm:flex-row">
          <button class="pixel-btn flex-1" @click="confirmCraft">确认</button>
          <button class="pixel-btn flex-1" @click="cancelCraft">取消</button>
        </div>
      </div>
    </div>
  </div>

  <!-- 配方解锁弹窗 -->
  <div v-if="showUnlockDialog" class="fixed inset-0 z-50">
    <div class="absolute inset-0 bg-black/70" />
    <div class="absolute top-1/2 left-1/2 w-[calc(100vw-24px)] max-w-80 -translate-x-1/2 -translate-y-1/2 animate-pop-in">
      <div class="bg-gb-bg border-8 border-gb-darker p-5 text-center">
        <div class="text-4xl mb-2">🔒</div>
        <span class="text-gb-darker font-bold text-lg block mb-2">解锁配方: {{ selectedUnlockRecipe?.name }}</span>
        <div class="text-4xl mb-3">{{ selectedUnlockRecipe?.icon }}</div>

        <div class="text-gb-dark text-xs mb-4">
          选择解锁方式：
        </div>

        <div class="space-y-3">
          <!-- 邀请好友解锁 -->
          <button
            class="pixel-btn w-full flex items-center justify-center gap-2"
            @click="onInviteUnlock"
          >
            <span class="text-lg">👥</span>
            <span>邀请好友解锁</span>
          </button>

          <!-- 观看视频解锁 -->
          <button
            class="pixel-btn w-full flex items-center justify-center gap-2"
            :class="{ 'opacity-50': unlockAdLoading }"
            :disabled="unlockAdLoading"
            @click="onVideoUnlock"
          >
            <span class="text-lg">📺</span>
            <span>{{ unlockAdLoading ? '加载中...' : '观看视频解锁' }}</span>
          </button>
        </div>

        <button
          class="mt-4 text-gb-dark text-xs hover:text-gb-darker"
          @click="showUnlockDialog = false; selectedUnlockRecipe = null"
        >
          取消
        </button>
      </div>
    </div>
  </div>

  <!-- 兑换确认弹窗 -->
  <div v-if="showExchangeConfirm" class="fixed inset-0 z-50">
    <div class="absolute inset-0 bg-black/70" />
    <div class="absolute top-1/2 left-1/2 w-[calc(100vw-24px)] max-w-72 -translate-x-1/2 -translate-y-1/2 animate-pop-in">
      <div class="bg-gb-bg border-8 border-gb-darker p-5 text-center">
        <span class="text-gb-darker font-bold text-lg block mb-2">💰 兑换 {{ selectedExchangeItem?.name }}?</span>
        <div class="text-gb-darker text-sm block mb-2">
          <span class="text-4xl">{{ selectedExchangeItem?.icon }}</span>
        </div>
        <span class="text-gb-darker text-sm block mb-4">
          消耗 <span class="text-gb-textgold font-bold">{{ selectedExchangeItem?.price }} CP</span>
          获得 <span class="font-bold">{{ selectedExchangeItem?.icon }} ×{{ selectedExchangeItem?.count }}</span>
        </span>
        <div class="flex flex-col gap-3 sm:flex-row">
          <button class="pixel-btn flex-1" @click="confirmExchange">确认</button>
          <button class="pixel-btn flex-1" @click="cancelExchange">取消</button>
        </div>
      </div>
    </div>
  </div>

  <!-- 技能进修答题弹窗 -->
  <div v-if="showEnhanceQuiz" class="fixed inset-0 z-50">
    <div class="absolute inset-0 bg-black/80" />
    <div class="absolute top-1/2 left-1/2 w-[calc(100vw-24px)] max-w-80 -translate-x-1/2 -translate-y-1/2">
      <div class="bg-gb-bg border-8 border-gb-darker p-4 relative overflow-hidden">
        <!-- 强化成功动效层 -->
        <div v-if="showQuizResult && quizCorrect" class="absolute inset-0 pointer-events-none z-20">
          <!-- 闪光背景 -->
          <div class="absolute inset-0 bg-gradient-radial from-yellow-300/60 via-transparent to-transparent animate-flash"></div>
          <!-- 星星粒子 -->
          <div v-for="i in 12" :key="i" class="absolute w-2 h-2 bg-yellow-400 animate-star-explode"
               :style="{ left: '50%', top: '50%', '--angle': `${i * 30}deg` }"></div>
          <div v-for="i in 8" :key="'sparkle-'+i" class="absolute text-2xl animate-sparkle"
               :style="{ left: `${20 + Math.random() * 60}%`, top: `${20 + Math.random() * 60}%`, animationDelay: `${i * 0.1}s` }">✨</div>
        </div>

        <!-- 标题 -->
        <div class="mb-3 flex items-start justify-between gap-3">
          <div>
            <h3 class="text-gb-darker font-bold text-lg">
              🎓 技能进修
            </h3>
            <p class="text-[10px] text-gb-dark">提升{{ selectedEnhanceEquip?.name }}技能等级</p>
          </div>
          <button class="text-gb-darker text-xl" @click="cancelEnhance">×</button>
        </div>

        <!-- 技能信息 -->
        <div class="bg-gb-light border-4 border-gb-darker p-3 mb-3 text-center relative">
          <div class="flex items-center justify-center gap-2 mb-2">
            <span class="text-4xl inline-block transition-all duration-500"
                  :class="{ 'animate-equip-glow': showQuizResult && quizCorrect }">{{ selectedEnhanceEquip?.icon }}</span>
            <!-- 职场等级徽章 -->
            <div v-if="(selectedEnhanceEquip?.enhanceLevel || 0) >= 5" class="text-xs bg-gb-gold text-white px-2 py-0.5 rounded">
              {{ getSkillLevelName((selectedEnhanceEquip?.enhanceLevel || 0) + (showQuizResult && quizCorrect ? 1 : 0)) }}
            </div>
          </div>
          <div class="mt-1 text-gb-darker font-bold">
            <span :class="{ 'text-gb-dark': !showQuizResult || !quizCorrect }">当前 {{ getSkillLevelName(selectedEnhanceEquip?.enhanceLevel || 0) }}</span>
          </div>
          <div class="mt-1">
            <span :class="{ 'text-gb-dark': !showQuizResult || !quizCorrect }">Lv.{{ selectedEnhanceEquip?.enhanceLevel || 0 }}</span>
            <span v-if="!showQuizResult || !quizCorrect" class="mx-2 text-gb-dark">→</span>
            <span v-if="showQuizResult && quizCorrect" class="mx-2 animate-bounce text-gb-gold">🎉</span>
            <span :class="{ 'text-green-600 text-xl animate-level-up': showQuizResult && quizCorrect }">Lv.{{ (selectedEnhanceEquip?.enhanceLevel || 0) + 1 }}</span>
          </div>
          <!-- 升级光环 -->
          <div v-if="showQuizResult && quizCorrect" class="absolute inset-0 border-4 border-yellow-400 rounded animate-pulse-ring pointer-events-none"></div>
        </div>

        <!-- 答题区域 -->
        <div v-if="currentQuiz" class="bg-gb-light border-4 border-gb-darker p-3 mb-3">
          <div class="mb-3 flex flex-wrap items-center gap-2">
            <span class="text-lg">📚</span>
            <span class="font-bold text-gb-darker text-sm">技能考核</span>
            <span class="text-xs text-gb-dark bg-green-100 text-green-700 px-2 py-0.5 rounded">答对=技能提升</span>
          </div>

          <!-- 题目 -->
          <p class="text-gb-darker text-sm font-bold mb-3">{{ currentQuiz.question }}</p>

          <!-- 选项 -->
          <div class="space-y-2">
            <div
              v-for="(option, idx) in currentQuiz.options"
              :key="idx"
              class="p-2 border-2 cursor-pointer transition-colors text-sm"
              :class="[
                selectedQuizAnswer === idx
                  ? 'border-gb-darker bg-gb-bg'
                  : 'border-gb-dark bg-gb-bg hover:border-gb-darker',
                showQuizResult && idx === currentQuiz.answer
                  ? '!border-green-500 !bg-green-100'
                  : '',
                showQuizResult && selectedQuizAnswer === idx && idx !== currentQuiz.answer
                  ? '!border-red-500 !bg-red-100'
                  : ''
              ]"
              @click="selectQuizAnswer(idx)"
            >
              <span class="font-bold mr-2">{{ ['A', 'B', 'C', 'D'][idx] }}.</span>
              <span class="text-gb-darker">{{ option }}</span>
            </div>
          </div>

          <!-- 答案解析 -->
          <div v-if="showQuizResult" class="mt-3 p-2 border-2 border-gb-darker text-sm" :class="quizCorrect ? 'bg-green-100' : 'bg-red-100'">
            <p class="font-bold" :class="quizCorrect ? 'text-green-800' : 'text-red-800'">
              {{ quizCorrect ? '✅ 考核通过！技能提升！' : '❌ 考核未通过！继续学习！' }}
            </p>
            <p v-if="quizCorrect" class="text-xs text-gb-darker mt-1">
              💼 技能+1，离好工作更近一步！
            </p>
            <p class="text-gb-darker mt-1 text-xs">{{ currentQuiz.explanation }}</p>
          </div>

          <!-- 操作按钮 -->
          <div class="mt-3 flex flex-col gap-3 sm:flex-row">
            <button
              v-if="!showQuizResult"
              class="pixel-btn flex-1"
              :disabled="selectedQuizAnswer === null"
              :class="{ 'opacity-50': selectedQuizAnswer === null }"
              @click="submitQuizAnswer"
            >
              提交答案
            </button>
            <button
              v-if="showQuizResult"
              class="pixel-btn flex-1"
              :class="quizCorrect ? 'bg-green-500' : ''"
              @click="finishEnhanceQuiz"
            >
              {{ quizCorrect ? '🎉 完成强化' : '知道了' }}
            </button>
          </div>
        </div>

        <!-- 提示 -->
        <div class="text-center text-xs">
          <p class="text-gb-dark">💡 持续学习编程技能 = 提升职场竞争力</p>
          <p v-if="showQuizResult && quizCorrect" class="text-gb-textgold font-bold mt-1 animate-pulse">
            🎯 技能提升成功！高薪Offer在向你招手！
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- 分解确认弹窗 -->
  <div v-if="showDecomposeConfirm" class="fixed inset-0 z-50">
    <div class="absolute inset-0 bg-black/70" />
    <div class="absolute top-1/2 left-1/2 w-[calc(100vw-24px)] max-w-72 -translate-x-1/2 -translate-y-1/2 animate-pop-in">
      <div class="bg-gb-bg border-8 border-gb-darker p-5 text-center">
        <span class="text-gb-darker font-bold text-lg block mb-2">♻️ 分解 {{ selectedDecomposeEquip?.name }}</span>
        <div class="text-gb-darker text-sm block mb-2">
          <span class="text-4xl">{{ selectedDecomposeEquip?.icon }}</span>
          <div class="mt-1 text-xs">强化等级 +{{ selectedDecomposeEquip?.enhanceLevel || 0 }}</div>
        </div>
        <div class="text-gb-darker text-sm block mb-4">
          <div>预计返还:</div>
          <div class="text-gb-textgold">{{ decomposeReturnText }}</div>
        </div>
        <div class="flex flex-col gap-3 sm:flex-row">
          <button class="pixel-btn flex-1" @click="confirmDecompose">确认</button>
          <button class="pixel-btn flex-1" @click="cancelDecompose">取消</button>
        </div>
      </div>
    </div>
  </div>

  <!-- 看广告得CP弹窗 -->
  <div v-if="showAdDialog" class="fixed inset-0 z-50">
    <div class="absolute inset-0 bg-black/70" />
    <div class="absolute top-1/2 left-1/2 w-[calc(100vw-24px)] max-w-72 -translate-x-1/2 -translate-y-1/2 animate-pop-in">
      <div class="bg-gb-bg border-8 border-gb-darker p-5 text-center">
        <span class="text-gb-darker font-bold text-lg block mb-3">📺 观看广告获得奖励</span>
        
        <div class="bg-gb-light border-4 border-gb-dark p-4 mb-4">
          <div class="text-4xl mb-2">💰</div>
          <div class="text-gb-darker font-bold text-xl">+50 CP</div>
          <div class="text-xs text-gb-dark mt-1">完整观看视频即可获得</div>
        </div>
        
        <div class="text-gb-dark text-xs mb-4">
          今日剩余: <span class="font-bold text-gb-darker">{{ remainingAdCount }}/10</span> 次
        </div>
        
        <div class="flex flex-col gap-3 sm:flex-row">
          <button
            class="pixel-btn flex-1"
            :class="{ 'opacity-50': adLoading || remainingAdCount <= 0 }"
            :disabled="adLoading || remainingAdCount <= 0"
            @click="handleWatchAd"
          >
            {{ adLoading ? '加载中...' : '观看广告' }}
          </button>
          <button class="pixel-btn flex-1" @click="closeAdDialog">关闭</button>
        </div>
      </div>
    </div>
  </div>
</template>

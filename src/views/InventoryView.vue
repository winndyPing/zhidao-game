<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Equipment } from '@/types/game';
import { useGameStore } from '@/stores/gameStore';
import { calculateTotalPower } from '@/utils/rankingSystem';

import BottomNav from '@/components/BottomNav.vue';
import UserProfile from '@/components/UserProfile.vue';
import RankingModal from '@/components/RankingModal.vue';

const store = useGameStore();

// 排行榜弹窗
const showRanking = ref(false);

// ==================== 计算属性 ====================

const equipment = computed(() => store.inventory.equipment);
const materials = computed(() => store.inventory.materials);

const totalStats = computed(() => {
  const equipment = store.inventory.equipment.filter(e => e.equipped);
  const stats: Record<string, number> = {};
  equipment.forEach(e => {
    Object.entries(e.stats).forEach(([key, value]) => {
      if (value) {
        stats[key] = (stats[key] || 0) + value;
      }
    });
  });
  // 加上套装属性加成
  const setStats = store.setBonusStats;
  Object.entries(setStats).forEach(([key, value]) => {
    if (value) {
      stats[key] = (stats[key] || 0) + value;
    }
  });
  return stats;
});

const equippedBuffs = computed(() => {
  const equipment = store.inventory.equipment.filter(e => e.equipped);
  const buffs: string[] = [];
  equipment.forEach(e => {
    const enhanceText = (e.enhanceLevel || 0) > 0 ? `+${e.enhanceLevel}` : '';
    buffs.push(`${e.icon} ${e.name}${enhanceText}`);
  });
  return buffs;
});

const hpPercent = computed(() => {
  return Math.round((store.player.hp / store.player.maxHp) * 100);
});

const staminaPercent = computed(() => {
  return Math.round((store.player.stamina / store.player.maxStamina) * 100);
});

// ==================== 方法 ====================

function onEquipClick(item: Equipment) {
  if (item.equipped) {
    store.unequipItem(item.id);
    showToast(`📦 已卸下 ${item.name}`);
  } else {
    const success = store.equipItem(item.id);
    if (success) {
      showToast(`✅ 已装备 ${item.name}`);
    }
  }
}

function formatStats(stats: Record<string, number | undefined>): string {
  return Object.entries(stats)
    .filter(([_, v]) => v !== undefined && v !== 0)
    .map(([k, v]) => `${k}+${v}`)
    .join(' ');
}

function onNavChange(page: string) {
  store.setCurrentPage(page as any);
}

function showToast(message: string) {
  const toast = document.createElement('div');
  toast.className = 'fixed bottom-20 left-1/2 -translate-x-1/2 bg-gb-darker text-gb-bg px-4 py-2 border-4 border-gb-dark z-50';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}
</script>

<template>
  <div class="mx-auto flex h-full min-h-0 w-full max-w-[430px] flex-col overflow-x-hidden rounded-[28px] border-8 border-gb-dark bg-gb-bg p-4 shadow-pixel-lg md:w-full">
    <!-- 可滚动内容区域 -->
    <div class="min-h-0 flex-1 overflow-y-auto">
      <!-- 用户资料 -->
      <UserProfile />
      
      <!-- 头部 -->
      <div class="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <button class="pixel-btn small flex items-center gap-1" @click="store.setCurrentPage('dungeon')">
          ← 返回迷宫
        </button>
        <div class="text-gb-darker font-bold text-lg flex items-center gap-2">
          <span>🎒</span>
          <span>成长背包</span>
        </div>
      </div>

      <!-- 状态栏 -->
      <div class="bg-gb-dark text-gb-bg p-3 mb-4 border-4 border-gb-darker rounded overflow-x-hidden">
        <!-- HP和体力 -->
        <div class="flex flex-col gap-2 mb-3 sm:flex-row sm:items-center sm:gap-3">
          <span class="text-lg">❤️</span>
          <div class="flex-1 h-4 bg-gb-darker rounded overflow-hidden border border-gb-light">
            <div class="h-full bg-red-500 transition-all duration-300" :style="{ width: hpPercent + '%' }" />
          </div>
          <span class="text-xs">{{ store.player.hp }}/{{ store.player.maxHp }}</span>
          <span class="text-lg">⚡</span>
          <div class="flex-1 h-4 bg-gb-darker rounded overflow-hidden border border-gb-light">
            <div class="h-full bg-yellow-400 transition-all duration-300" :style="{ width: staminaPercent + '%' }" />
          </div>
          <span class="text-xs">{{ store.player.stamina }}</span>
        </div>

        <!-- 资源 -->
        <div class="flex flex-wrap justify-between gap-2 text-sm">
          <div class="flex items-center gap-1">
            <span>💰</span>
            <span class="text-gb-gold">{{ store.player.gold }}</span>
          </div>
          <div class="flex items-center gap-1">
            <span>📊</span>
            <span class="text-gb-gold">{{ store.player.cp }}CP</span>
          </div>
          <div class="flex items-center gap-1">
            <span>⭐</span>
            <span>Lv.{{ store.player.level }}</span>
          </div>
        </div>
      </div>

      <!-- Buffs -->
      <div v-if="equippedBuffs.length > 0" class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="(buff, index) in equippedBuffs"
          :key="index"
          class="bg-gb-light border-2 border-gb-darker px-2 py-1 text-xs text-gb-darker rounded"
        >
          {{ buff }}
        </span>
      </div>

      <!-- 套装效果 -->
      <div v-if="store.activeSetBonuses.length > 0" class="bg-gb-light border-4 border-gb-dark p-4 mb-4">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-xl">🎁</span>
          <span class="font-bold text-gb-darker">套装效果</span>
        </div>
        <div class="space-y-2">
          <div
            v-for="{ set, count, activeBonus } in store.activeSetBonuses"
            :key="set.id"
            class="bg-gb-bg border-2 border-gb-darker p-2"
          >
            <div class="flex items-center gap-2 mb-1">
              <span class="text-lg">{{ set.icon }}</span>
              <span class="font-bold text-sm text-gb-darker">{{ set.name }}</span>
              <span class="text-xs text-gb-gold">({{ count }}件已激活)</span>
            </div>
            <div v-if="activeBonus" class="text-xs text-green-700 ml-6">
              {{ activeBonus.description }}
            </div>
            <div class="text-[10px] text-gb-dark ml-6 mt-1">
              <span
                v-for="bonus in set.bonuses"
                :key="bonus.requireCount"
                :class="count >= bonus.requireCount ? 'text-green-600 font-bold' : 'text-gb-dark'"
                class="mr-2"
              >
                {{ bonus.requireCount }}件: {{ bonus.description }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- 装备属性总和 -->
      <div class="grid gap-4">
      <div class="bg-gb-light border-4 border-gb-dark p-4 mb-4 lg:mb-0">
        <div class="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div class="flex items-center gap-2">
            <span class="text-xl">📊</span>
            <span class="font-bold text-gb-darker">当前成长加成</span>
          </div>
          <button
            @click="showRanking = true"
            class="w-full px-2 py-1 bg-gb-gold text-white text-xs border-2 border-gb-darker rounded hover:brightness-110 active:translate-y-0.5 sm:w-auto"
          >
            🏆 排行榜
          </button>
        </div>
        
        <!-- 战力显示 -->
        <div class="mb-3 flex flex-col gap-2 bg-gb-bg border-2 border-gb-darker p-2 sm:flex-row sm:items-center sm:justify-between">
          <span class="text-sm text-gb-dark">当前综合战力</span>
          <span class="text-lg font-bold text-gb-textgold">{{ calculateTotalPower(store.player, equipment) }}</span>
        </div>
        
        <div class="flex flex-wrap gap-2">
          <span v-if="totalStats.attack" class="border-2 border-gb-darker px-2 py-1 text-xs text-gb-darker bg-gb-bg">
            攻击 +{{ totalStats.attack }}
          </span>
          <span v-if="totalStats.defense" class="border-2 border-gb-darker px-2 py-1 text-xs text-gb-darker bg-gb-bg">
            防御 +{{ totalStats.defense }}
          </span>
          <span v-if="totalStats.intelligence" class="border-2 border-gb-darker px-2 py-1 text-xs text-gb-darker bg-gb-bg">
            智力 +{{ totalStats.intelligence }}
          </span>
          <span v-if="totalStats.hp" class="border-2 border-gb-darker px-2 py-1 text-xs text-gb-darker bg-gb-bg">
            生命 +{{ totalStats.hp }}
          </span>
        </div>
      </div>

      <!-- 装备列表 -->
      <div class="bg-gb-light border-4 border-gb-dark p-4 mb-4 xl:mb-0">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-xl">⚔️</span>
          <span class="font-bold text-gb-darker">已获得装备</span>
        </div>
        <p class="text-gb-dark text-xs mb-3">点击卡片即可装备或卸下，把当前战斗风格调整到合适状态。</p>
        <div class="grid grid-cols-2 gap-3">
          <div
            v-for="item in equipment"
            :key="item.id"
            class="bg-gb-bg border-4 border-gb-darker p-2 cursor-pointer active:scale-95 relative min-h-[80px] flex flex-col items-center justify-center"
            :class="{ 'border-gb-gold bg-gb-darker': item.equipped }"
            @click="onEquipClick(item)"
          >
            
            <!-- 强化等级标识 -->
            <span
              v-if="(item.enhanceLevel || 0) > 0"
              class="absolute -top-1 -left-1 bg-red-500 text-white text-[9px] px-1 rounded font-bold z-10"
            >
              +{{ item.enhanceLevel }}
            </span>
            <span 
              class="text-2xl mb-1"
              :class="item.equipped ? 'grayscale-0' : 'grayscale'"
            >
              {{ item.icon }}
            </span>
            <span
              class="text-[10px] text-center leading-tight"
              :class="item.equipped ? 'text-gb-textgold font-bold' : 'text-gb-dark'"
            >
              {{ item.name }}
            </span>
            <span 
              class="text-[8px] text-center mt-1"
              :class="item.equipped ? 'text-gb-bg' : 'text-gb-dark'"
            >
              {{ formatStats(item.stats) }}
            </span>
            <span
              v-if="item.equipped"
              class="absolute -top-2 -right-2 w-5 h-5 bg-gb-gold border-2 border-gb-darker text-xs flex items-center justify-center text-gb-darker font-bold"
            >
              ✓
            </span>
          </div>
        </div>
      </div>

      <!-- 材料列表 -->
      <div class="bg-gb-light border-4 border-gb-dark p-4 mb-4 lg:mb-0">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-xl">📦</span>
          <span class="font-bold text-gb-darker">项目材料</span>
        </div>
        <p class="text-gb-dark text-xs mb-3">迷宫奖励和工坊制作都会消耗这些材料，记得按目标保留库存。</p>
        <div class="grid grid-cols-2 gap-3">
          <div
            v-for="material in materials"
            :key="material.id"
            class="bg-gb-bg border-4 border-gb-darker p-2 flex flex-col items-center justify-center min-h-[80px]"
          >
            <span class="text-2xl mb-1">{{ material.icon }}</span>
            <span class="text-[10px] text-center text-gb-dark">{{ material.name }}</span>
            <span class="text-xs font-bold text-gb-darker mt-1">×{{ material.count }}</span>
          </div>
        </div>
      </div>
      </div>
    </div>

    <!-- 底部导航 -->
    <BottomNav current-page="inventory" @change="onNavChange" />
  </div>

  <!-- 排行榜弹窗 -->
  <RankingModal v-if="showRanking" @close="showRanking = false" />
</template>

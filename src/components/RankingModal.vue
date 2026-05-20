<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useGameStore } from '@/stores/gameStore';
import {
  getRankingList,
  getRankingTitle,
  getScoreUnit,
  calculateTotalPower,
  calculateTotalStat,
  type RankingType,
  type RankingEntry,
} from '@/utils/rankingSystem';

const store = useGameStore();

// 当前选中的排行榜类型
const currentType = ref<RankingType>('power');

// 强制刷新的 key
const refreshKey = ref(0);

// 排行榜类型选项
const rankingTypes: { type: RankingType; icon: string; name: string }[] = [
  { type: 'power', icon: '🏆', name: '战力' },
  { type: 'attack', icon: '⚔️', name: '攻击' },
  { type: 'defense', icon: '🛡️', name: '防御' },
  { type: 'hp', icon: '❤️', name: '生命' },
  { type: 'equipment', icon: '🎒', name: '装备' },
];

// 当前用户数据
const currentUserData = computed(() => ({
  nickname: store.user.nickname,
  avatar: store.user.avatar,
  level: store.player.level, // 从 store 获取真实等级
  power: calculateTotalPower(store.player, store.inventory.equipment),
  attack: calculateTotalStat(store.inventory.equipment, 'attack'),
  defense: calculateTotalStat(store.inventory.equipment, 'defense'),
  hp: calculateTotalStat(store.inventory.equipment, 'hp') + store.player.maxHp,
  equipmentCount: store.inventory.equipment.length,
}));

// 排行榜数据 - 依赖 refreshKey 确保响应式更新
const rankingList = computed<RankingEntry[]>(() => {
  // refreshKey 用于强制刷新
  void refreshKey.value;
  return getRankingList(currentType.value, currentUserData.value);
});

// 监听玩家等级变化，强制刷新排行榜
watch(
  () => store.player.level,
  () => {
    refreshKey.value++;
  }
);

// 监听装备变化，强制刷新排行榜
watch(
  () => store.inventory.equipment.length,
  () => {
    refreshKey.value++;
  }
);

// 当前玩家排名
const myRank = computed(() => {
  const entry = rankingList.value.find(r => r.isCurrentUser);
  return entry?.rank || '-';
});

// 切换排行榜类型
function switchType(type: RankingType) {
  currentType.value = type;
}

// 关闭弹窗
const emit = defineEmits<{
  (e: 'close'): void;
}>();

function close() {
  emit('close');
}

// 获取前3名样式
function getRankStyle(rank: number): string {
  if (rank === 1) return 'bg-yellow-400 border-yellow-500 text-yellow-900';
  if (rank === 2) return 'bg-gray-300 border-gray-400 text-gray-700';
  if (rank === 3) return 'bg-amber-600 border-amber-700 text-white';
  return 'bg-gb-light border-gb-dark';
}

// 判断是否为 base64 图片
function isBase64Avatar(avatar: string): boolean {
  return avatar.startsWith('data:image');
}
</script>

<template>
  <div class="fixed inset-0 z-50">
    <div class="absolute inset-0 bg-black/70" @click="close" />
    
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] max-h-[500px] animate-pop-in">
      <div class="bg-gb-bg border-8 border-gb-darker rounded-gameboy overflow-hidden">
        <!-- 头部 -->
        <div class="bg-gb-darker text-gb-bg p-3 flex justify-between items-center">
          <span class="font-bold">{{ getRankingTitle(currentType) }}</span>
          <button @click="close" class="text-xl leading-none hover:text-gb-gold">✕</button>
        </div>

        <!-- 类型切换 -->
        <div class="flex border-b-4 border-gb-dark bg-gb-light">
          <button
            v-for="item in rankingTypes"
            :key="item.type"
            class="flex-1 py-2 text-xs text-center transition-all"
            :class="currentType === item.type 
              ? 'bg-gb-bg text-gb-darker font-bold border-b-2 border-gb-gold' 
              : 'text-gb-dark hover:bg-gb-bg'"
            @click="switchType(item.type)"
          >
            <span class="text-base">{{ item.icon }}</span>
            <span class="block">{{ item.name }}</span>
          </button>
        </div>

        <!-- 我的排名 -->
        <div class="bg-gb-gold/20 border-b-4 border-gb-dark p-2 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="text-gb-darker font-bold">我的排名</span>
            <span class="text-xl font-bold text-gb-darker">#{{ myRank }}</span>
          </div>
          <div class="flex items-center gap-2">
            <img 
              v-if="isBase64Avatar(store.user.avatar)" 
              :src="store.user.avatar" 
              class="w-6 h-6 rounded border border-gb-darker"
            />
            <span v-else class="text-lg">{{ store.user.avatar }}</span>
            <span class="text-sm text-gb-darker">Lv.{{ store.player.level }}</span>
          </div>
        </div>

        <!-- 排行榜列表 -->
        <div class="max-h-[300px] overflow-y-auto">
          <div
            v-for="entry in rankingList"
            :key="entry.rank"
            class="flex items-center gap-3 p-2 border-b-2 border-gb-dark"
            :class="{ 
              'bg-gb-gold/30': entry.isCurrentUser,
              'bg-gb-light': !entry.isCurrentUser 
            }"
          >
            <!-- 排名 -->
            <div
              class="w-8 h-8 flex items-center justify-center font-bold border-2 rounded text-sm"
              :class="getRankStyle(entry.rank)"
            >
              <span v-if="entry.rank <= 3">{{ ['🥇', '🥈', '🥉'][entry.rank - 1] }}</span>
              <span v-else>{{ entry.rank }}</span>
            </div>

            <!-- 头像和名字 -->
            <div class="flex-1">
              <div class="flex items-center gap-2">
                <!-- 头像：区分 base64 图片和 emoji -->
                <img 
                  v-if="isBase64Avatar(entry.avatar)" 
                  :src="entry.avatar" 
                  class="w-6 h-6 rounded border border-gb-darker"
                />
                <span v-else class="text-lg">{{ entry.avatar }}</span>
                <span 
                  class="font-bold text-sm"
                  :class="entry.isCurrentUser ? 'text-gb-darker' : 'text-gb-darker'"
                >
                  {{ entry.nickname }}
                  <span v-if="entry.isCurrentUser" class="text-gb-gold">(我)</span>
                </span>
              </div>
              <div class="text-xs text-gb-dark">Lv.{{ entry.level }}</div>
            </div>

            <!-- 分数 -->
            <div class="text-right">
              <div class="font-bold text-gb-darker">{{ entry.score }}</div>
              <div class="text-[10px] text-gb-dark">{{ getScoreUnit(currentType) }}</div>
            </div>
          </div>
        </div>

        <!-- 底部提示 -->
        <div class="bg-gb-dark text-gb-bg text-xs p-2 text-center">
          排行榜每小时更新一次
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-pop-in {
  animation: popIn 0.2s ease-out;
}

@keyframes popIn {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>

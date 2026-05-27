<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { useGameStore } from '@/stores/gameStore';
import {
  getRankingTitle,
  getScoreUnit,
  type RankingType,
  type RankingEntry,
} from '@/utils/rankingSystem';
import { fetchRanking } from '@/services/rankingApi';

const store = useGameStore();

const currentType = ref<RankingType>('power');
const remoteRankingList = ref<RankingEntry[]>([]);
const remoteMyRank = ref<number | null>(null);
const rankingLoading = ref(false);

const rankingTypes: { type: RankingType; icon: string; name: string }[] = [
  { type: 'power', icon: '🏆', name: '战力' },
  { type: 'attack', icon: '⚔️', name: '攻击' },
  { type: 'defense', icon: '🛡️', name: '防御' },
  { type: 'hp', icon: '❤️', name: '生命' },
  { type: 'equipment', icon: '🎒', name: '装备' },
];

const rankingList = computed<RankingEntry[]>(() => remoteRankingList.value);

const myRank = computed(() => {
  if (remoteMyRank.value !== null) {
    return remoteMyRank.value;
  }

  return '-';
});

async function loadRanking() {
  rankingLoading.value = true;
  try {
    const response = await fetchRanking(currentType.value);
    remoteRankingList.value = response.rankings;
    remoteMyRank.value = response.myRank;
  } catch (error) {
    console.error('加载排行榜失败:', error);
    remoteRankingList.value = [];
    remoteMyRank.value = null;
  } finally {
    rankingLoading.value = false;
  }
}

function switchType(type: RankingType) {
  currentType.value = type;
}

watch(currentType, () => {
  void loadRanking();
});

onMounted(() => {
  void loadRanking();
});

const emit = defineEmits<{
  (e: 'close'): void;
}>();

function close() {
  emit('close');
}

function getRankStyle(rank: number): string {
  if (rank === 1) return 'bg-yellow-400 border-yellow-500 text-yellow-900';
  if (rank === 2) return 'bg-gray-300 border-gray-400 text-gray-700';
  if (rank === 3) return 'bg-amber-600 border-amber-700 text-white';
  return 'bg-gb-light border-gb-dark';
}

function isBase64Avatar(avatar: string): boolean {
  return avatar.startsWith('data:image');
}
</script>

<template>
  <div class="fixed inset-0 z-50">
    <div class="absolute inset-0 bg-black/70" @click="close" />

    <div class="absolute left-1/2 top-1/2 max-h-[500px] w-[340px] -translate-x-1/2 -translate-y-1/2 animate-pop-in">
      <div class="overflow-hidden rounded-gameboy border-8 border-gb-darker bg-gb-bg">
        <div class="flex items-center justify-between bg-gb-darker p-3 text-gb-bg">
          <span class="font-bold">{{ getRankingTitle(currentType) }}</span>
          <button @click="close" class="text-xl leading-none hover:text-gb-gold">✕</button>
        </div>

        <div class="flex border-b-4 border-gb-dark bg-gb-light">
          <button
            v-for="item in rankingTypes"
            :key="item.type"
            class="flex-1 py-2 text-center text-xs transition-all"
            :class="currentType === item.type
              ? 'bg-gb-bg font-bold text-gb-darker border-b-2 border-gb-gold'
              : 'text-gb-dark hover:bg-gb-bg'"
            @click="switchType(item.type)"
          >
            <span class="text-base">{{ item.icon }}</span>
            <span class="block">{{ item.name }}</span>
          </button>
        </div>

        <div class="flex items-center justify-between border-b-4 border-gb-dark bg-gb-gold/20 p-2">
          <div class="flex items-center gap-2">
            <span class="font-bold text-gb-darker">我的排名</span>
            <span class="text-xl font-bold text-gb-darker">#{{ myRank }}</span>
          </div>
          <div class="flex items-center gap-2">
            <img
              v-if="isBase64Avatar(store.user.avatar)"
              :src="store.user.avatar"
              class="h-6 w-6 rounded border border-gb-darker"
            />
            <span v-else class="text-lg">{{ store.user.avatar }}</span>
            <span class="text-sm text-gb-darker">Lv.{{ store.player.level }}</span>
          </div>
        </div>

        <div class="max-h-[300px] overflow-y-auto">
          <div v-if="rankingLoading" class="p-4 text-center text-xs text-gb-dark">
            排行榜加载中...
          </div>
          <div v-else-if="rankingList.length === 0" class="p-6 text-center text-xs text-gb-dark">
            暂无排行数据
          </div>
          <div
            v-for="entry in rankingList"
            :key="entry.rank"
            class="flex items-center gap-3 border-b-2 border-gb-dark p-2"
            :class="{
              'bg-gb-gold/30': entry.isCurrentUser,
              'bg-gb-light': !entry.isCurrentUser,
            }"
          >
            <div
              class="flex h-8 w-8 items-center justify-center rounded border-2 text-sm font-bold"
              :class="getRankStyle(entry.rank)"
            >
              <span v-if="entry.rank <= 3">{{ ['🥇', '🥈', '🥉'][entry.rank - 1] }}</span>
              <span v-else>{{ entry.rank }}</span>
            </div>

            <div class="flex-1">
              <div class="flex items-center gap-2">
                <img
                  v-if="isBase64Avatar(entry.avatar)"
                  :src="entry.avatar"
                  class="h-6 w-6 rounded border border-gb-darker"
                />
                <span v-else class="text-lg">{{ entry.avatar }}</span>
                <span class="text-sm font-bold text-gb-darker">
                  {{ entry.nickname }}
                  <span v-if="entry.isCurrentUser" class="text-gb-gold">(我)</span>
                </span>
              </div>
              <div class="text-xs text-gb-dark">Lv.{{ entry.level }}</div>
            </div>

            <div class="text-right">
              <div class="font-bold text-gb-darker">{{ entry.score }}</div>
              <div class="text-[10px] text-gb-dark">{{ getScoreUnit(currentType) }}</div>
            </div>
          </div>
        </div>

        <div class="bg-gb-dark p-2 text-center text-xs text-gb-bg">
          排行榜仅展示真实接口数据
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

<script setup lang="ts">
import type { Room } from '@/types/game';
import { useGameStore } from '@/stores/gameStore';

interface Props {
  show: boolean;
  room: Room | null;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  fight: [];
  flee: [];
}>();

const store = useGameStore();

// 获取职业方向图标
const careerIcon = () => {
  const career = store.user.careerDirection;
  return career?.icon || '📖';
};

function onFight() {
  emit('fight');
}

function onFlee() {
  emit('flee');
}
</script>

<template>
  <div v-if="show && room" class="fixed inset-0 z-50">
    <div class="absolute inset-0 bg-black/70" />
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 max-w-full animate-[popIn_0.2s_ease-out]">
      <div class="bg-gb-bg border-8 border-gb-darker p-5 text-center">
        <div class="text-4xl mb-2">{{ careerIcon() }}</div>
        <h3 class="text-gb-darker font-bold text-lg mb-2">{{ room.event.name }}</h3>
        <p class="text-gb-darker text-sm mb-2">{{ room.event.desc }}</p>
        <p class="text-gb-dark text-xs mb-4">
          完成学习任务获取奖励，或跳过继续探索
        </p>

        <!-- 奖励预览 -->
        <div v-if="room.event.reward" class="bg-gb-light border-2 border-gb-darker p-2 mb-4 text-xs">
          <span class="text-gb-dark">奖励: </span>
          <span v-if="room.event.reward.cp" class="text-gb-darker font-bold">{{ room.event.reward.cp }} CP </span>
          <span v-if="room.event.reward.items" class="text-gb-darker">+ 材料</span>
        </div>

        <div class="flex gap-3 justify-center">
          <button class="pixel-btn flex-1" @click="onFight">开始学习</button>
          <button class="pixel-btn flex-1" @click="onFlee">跳过</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@keyframes popIn {
  from { transform: translate(-50%, -30%) scale(0.8); opacity: 0; }
  to { transform: translate(-50%, -50%) scale(1); opacity: 1; }
}
</style>

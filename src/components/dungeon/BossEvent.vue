<script setup lang="ts">
import type { Room } from '@/types/game';
import { useGameStore } from '@/stores/gameStore';
import { handleBossChallenge } from '@/utils/roomEvents';

interface Props {
  show: boolean;
  room: Room | null;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  close: [];
  complete: [message: string];
}>();

const store = useGameStore();

function onChallenge() {
  if (!props.room) return;
  const result = handleBossChallenge(props.room, store);
  emit('complete', result.message);
  if (result.win) {
    emit('close');
  }
}

function onCancel() {
  emit('complete', '先去补强后再回来挑战');
  emit('close');
}
</script>

<template>
  <div v-if="show && room" class="fixed inset-0 z-50">
    <div class="absolute inset-0 bg-black/70" @click="emit('close')" />
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 max-w-full animate-[popIn_0.2s_ease-out]">
      <div class="bg-gb-bg border-8 border-gb-darker p-5 text-center">
        <h3 class="text-gb-darker font-bold text-lg mb-2">👹 Boss：{{ room.event.name }}</h3>
        <p class="text-gb-darker text-sm mb-2">{{ room.event.desc }}</p>

        <div class="bg-gb-light p-3 rounded border-2 border-gb-darker mb-4">
          <p class="text-gb-darker text-sm font-bold">准备好迎接最终挑战了吗？</p>
          <p class="text-gb-darker text-xs mt-1">建议战斗力达到 100 以上再尝试。</p>
        </div>

        <div class="flex gap-3 justify-center">
          <button class="pixel-btn flex-1 bg-red-100" @click="onChallenge">挑战 Boss</button>
          <button class="pixel-btn flex-1" @click="onCancel">先去准备</button>
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

<script setup lang="ts">
import { computed } from 'vue';
import type { Room } from '@/types/game';
import { useGameStore } from '@/stores/gameStore';
import { handleTreasure } from '@/utils/roomEvents';

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

const rewardMessage = computed(() => {
  if (!props.room) return '';
  return handleTreasure(props.room, store);
});

function onCollect() {
  emit('complete', rewardMessage.value);
  emit('close');
}
</script>

<template>
  <div v-if="show && room" class="fixed inset-0 z-50">
    <div class="absolute inset-0 bg-black/70" @click="emit('close')" />
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 max-w-full animate-[popIn_0.2s_ease-out]">
      <div class="bg-gb-bg border-8 border-gb-darker p-5 text-center">
        <h3 class="text-gb-darker font-bold text-lg mb-2">💰 {{ room.event.name }}</h3>
        <p class="text-gb-darker text-sm mb-4">{{ room.event.desc }}</p>

        <div class="bg-gb-light p-3 rounded border-2 border-gb-darker mb-4">
          <p class="text-gb-darker text-sm">{{ rewardMessage }}</p>
        </div>

        <button class="pixel-btn w-full" @click="onCollect">收下奖励</button>
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

<script setup lang="ts">
import type { Puzzle, Room } from '@/types/game';
import { useGameStore } from '@/stores/gameStore';
import { handlePuzzle } from '@/utils/roomEvents';

interface Props {
  show: boolean;
  room: Room | null;
  puzzle: Puzzle | null;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  close: [];
  complete: [message: string];
}>();

const store = useGameStore();

function onAnswer(selected: number) {
  if (!props.room || !props.puzzle) return;
  const result = handlePuzzle(props.room, selected, props.puzzle.answer, store);
  emit('complete', result.message);
  emit('close');
}
</script>

<template>
  <div v-if="show && room && puzzle" class="fixed inset-0 z-50">
    <div class="absolute inset-0 bg-black/70" @click="emit('close')" />
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 max-w-full animate-[popIn_0.2s_ease-out]">
      <div class="bg-gb-bg border-8 border-gb-darker p-5 text-center">
        <h3 class="text-gb-darker font-bold text-lg mb-2">🧩 {{ room.event.name }}</h3>
        <p class="text-gb-darker text-base mb-6">{{ puzzle.question }}</p>

        <div class="grid grid-cols-2 gap-2 mb-4">
          <button
            v-for="(option, index) in puzzle.options"
            :key="index"
            class="pixel-btn small"
            @click="onAnswer(index)"
          >
            {{ option }}
          </button>
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

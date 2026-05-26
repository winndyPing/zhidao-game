<script setup lang="ts">
import { computed } from 'vue';
import { useGameStore } from '@/stores/gameStore';

const store = useGameStore();

const hpPercent = computed(() => Math.round((store.player.hp / store.player.maxHp) * 100));
const staminaPercent = computed(() => Math.round((store.player.stamina / store.player.maxStamina) * 100));
const equippedBuffs = computed(() => {
  const equipment = store.inventory.equipment.filter((item) => item.equipped);
  return equipment.map((item) => `${item.icon} ${item.name}`);
});
</script>

<template>
  <div class="my-2 overflow-x-hidden rounded border-4 border-gb-darker bg-gb-dark p-2 text-gb-bg">
    <div class="mb-2 flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
      <div class="flex min-w-0 items-center gap-2">
        <span class="text-lg">❤️</span>
        <div class="h-3 min-w-0 flex-1 overflow-hidden rounded bg-gb-darker sm:w-16 sm:flex-none">
          <div class="h-full bg-red-500 transition-all duration-300" :style="{ width: `${hpPercent}%` }" />
        </div>
        <span class="shrink-0 text-xs">{{ store.player.hp }}/{{ store.player.maxHp }}</span>
      </div>

      <div class="flex min-w-0 items-center gap-2">
        <span class="text-lg">⚡</span>
        <div class="h-3 min-w-0 flex-1 overflow-hidden rounded bg-gb-darker sm:w-16 sm:flex-none">
          <div class="h-full bg-yellow-400 transition-all duration-300" :style="{ width: `${staminaPercent}%` }" />
        </div>
        <span class="shrink-0 text-xs">{{ store.player.stamina }}</span>
      </div>
    </div>

    <div class="flex flex-wrap items-center justify-between gap-2 border-t border-gb-light pt-2 text-sm">
      <div class="flex items-center gap-1">
        <span>🎯</span>
        <span class="text-gb-gold">{{ store.player.cp }}CP</span>
      </div>
      <div class="flex items-center gap-1">
        <span>⭐</span>
        <span>Lv.{{ store.player.level }}</span>
      </div>
    </div>

    <div v-if="equippedBuffs.length > 0" class="mt-2 flex flex-wrap gap-1 text-xs">
      <span
        v-for="(buff, index) in equippedBuffs"
        :key="index"
        class="rounded bg-gb-light px-1 text-gb-darker"
      >
        {{ buff }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useGameStore } from '@/stores/gameStore';

const store = useGameStore();

const hpPercent = computed(() => {
  return Math.round((store.player.hp / store.player.maxHp) * 100);
});

const staminaPercent = computed(() => {
  return Math.round((store.player.stamina / store.player.maxStamina) * 100);
});

const equippedBuffs = computed(() => {
  const equipment = store.inventory.equipment.filter(e => e.equipped);
  return equipment.map(e => `${e.icon} ${e.name}`);
});
</script>

<template>
  <div class="bg-gb-dark text-gb-bg p-2 my-2 border-4 border-gb-darker rounded">
    <!-- 主要状态 -->
    <div class="flex justify-between items-center text-sm mb-2">
      <div class="flex items-center gap-2">
        <span class="text-lg">❤️</span>
        <div class="w-16 h-3 bg-gb-darker rounded overflow-hidden">
          <div class="h-full bg-red-500 transition-all duration-300" :style="{ width: hpPercent + '%' }" />
        </div>
        <span class="text-xs">{{ store.player.hp }}/{{ store.player.maxHp }}</span>
      </div>

      <div class="flex items-center gap-2">
        <span class="text-lg">⚡</span>
        <div class="w-16 h-3 bg-gb-darker rounded overflow-hidden">
          <div class="h-full bg-yellow-400 transition-all duration-300" :style="{ width: staminaPercent + '%' }" />
        </div>
        <span class="text-xs">{{ store.player.stamina }}</span>
      </div>
    </div>

    <!-- 资源 -->
    <div class="flex justify-between text-sm border-t border-gb-light pt-2">
      <!-- <div class="flex items-center gap-1">
        <span>💰</span>
        <span class="text-gb-gold">{{ store.player.gold }}</span>
      </div> -->
      <div class="flex items-center gap-1">
        <span>📊</span>
        <span class="text-gb-gold">{{ store.player.cp }}CP</span>
      </div>
      <div class="flex items-center gap-1">
        <span>⭐</span>
        <span>Lv.{{ store.player.level }}</span>
      </div>
    </div>

    <!-- Buff显示 -->
    <div v-if="equippedBuffs.length > 0" class="flex flex-wrap gap-1 mt-2 text-xs">
      <span
        v-for="(buff, index) in equippedBuffs"
        :key="index"
        class="bg-gb-light text-gb-darker px-1 rounded"
      >
        {{ buff }}
      </span>
    </div>
  </div>
</template>

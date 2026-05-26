<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useGameStore } from '@/stores/gameStore';
import DungeonView from '@/views/DungeonView.vue';
import CraftView from '@/views/CraftView.vue';
import InventoryView from '@/views/InventoryView.vue';
import LoginView from '@/views/LoginView.vue';
import CareerSelectView from '@/views/CareerSelectView.vue';

const store = useGameStore();

onMounted(() => {
  store.tryAutoLogin();
});

const emit = defineEmits<{
  back: [];
}>();

const isLoggedIn = computed(() => store.user.isLoggedIn);
const hasSelectedCareer = computed(() => store.user.hasSelectedCareer);

const currentView = computed(() => {
  if (!isLoggedIn.value) {
    return LoginView;
  }

  if (!hasSelectedCareer.value) {
    return CareerSelectView;
  }

  switch (store.currentPage) {
    case 'craft':
      return CraftView;
    case 'inventory':
      return InventoryView;
    case 'dungeon':
    default:
      return DungeonView;
  }
});
</script>

<template>
  <div class="min-h-[100dvh] overflow-x-hidden bg-[radial-gradient(circle_at_top,_rgba(155,188,15,0.12),_transparent_35%),linear-gradient(180deg,_#0f380f_0%,_#0b2b0b_100%)] px-2 py-2 sm:px-4 md:px-6 md:py-6 lg:px-8 lg:py-8">
    <div class="mx-auto w-full md:max-w-[470px]">
      <div class="hidden pb-3 md:flex md:justify-center">
        <div class="h-2.5 w-24 rounded-full bg-black/35" />
      </div>
      <div class="relative md:rounded-[44px] md:border-[10px] md:border-[#23321c] md:bg-[#172111] md:p-3 md:shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
        <div class="hidden md:absolute md:-right-[14px] md:top-28 md:block md:h-16 md:w-[6px] md:rounded-r-full md:bg-[#23321c]" />
        <div class="hidden md:absolute md:-left-[14px] md:top-36 md:block md:h-24 md:w-[6px] md:rounded-l-full md:bg-[#23321c]" />
        <div class="relative md:overflow-hidden md:rounded-[34px] md:bg-[#0f380f]/40">
          <div class="pointer-events-none absolute right-2 top-2 z-30 md:right-4 md:top-4">
            <button
              class="pointer-events-auto inline-flex items-center gap-1 border-[3px] border-[#6b861f] bg-[#adc80f] px-3 py-1.5 text-[11px] font-bold leading-none text-[#17380f] shadow-[3px_3px_0_#395512] transition-all active:translate-x-px active:translate-y-px active:shadow-[2px_2px_0_#395512]"
              @click="emit('back')"
            >
              返回落地页
            </button>
          </div>
          <component :is="currentView" />
        </div>
      </div>
    </div>
  </div>
</template>

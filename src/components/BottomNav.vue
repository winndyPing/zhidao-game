<script setup lang="ts">
import { ref } from 'vue';
import type { PageType } from '@/types/game';

interface Props {
  currentPage: PageType;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  change: [page: PageType];
}>();

const navItems: { key: PageType; label: string }[] = [
  { key: 'dungeon', label: '迷宫' },
  { key: 'craft', label: '工坊' },
  { key: 'inventory', label: '背包' },
];

const showResetConfirm = ref(false);

function onNavClick(key: PageType) {
  emit('change', key);
}

function onResetClick() {
  showResetConfirm.value = true;
}

function onConfirmReset() {
  showResetConfirm.value = false;
  window.dispatchEvent(new Event('reset-dungeon'));
}

function onCancelReset() {
  showResetConfirm.value = false;
}
</script>

<template>
  <div class="sticky bottom-0 z-20 -mx-4 mt-5 shrink-0 border-t-4 border-gb-dark bg-gb-bg px-4 pb-3 pt-3 shadow-[0_-10px_24px_rgba(15,56,15,0.18)]">
    <div class="grid grid-cols-4 gap-2 text-xs">
    <button
      v-for="item in navItems"
      :key="item.key"
      class="min-w-0 px-2 py-2 text-center"
      :class="{ 'bg-gb-light border-2 border-gb-darker': props.currentPage === item.key }"
      @click="onNavClick(item.key)"
    >
      {{ item.label }}
    </button>
    <button class="min-w-0 px-2 py-2 text-center" @click="onResetClick">
      重置
    </button>
    </div>
  </div>

  <div v-if="showResetConfirm" class="fixed inset-0 z-50">
    <div class="absolute inset-0 bg-black/70" />
    <div class="absolute left-1/2 top-1/2 w-[calc(100vw-24px)] max-w-72 -translate-x-1/2 -translate-y-1/2 animate-[popIn_0.2s_ease-out]">
      <div class="border-8 border-gb-darker bg-gb-bg p-5 text-center">
        <h3 class="mb-2 text-lg font-bold text-gb-darker">⚠️ 重置迷宫</h3>
        <p class="mb-2 text-sm text-gb-darker">确定要重置当前迷宫吗？</p>
        <p class="mb-6 text-xs text-gb-dark">当前层进度将丢失，并进入下一层。</p>

        <div class="flex gap-3 justify-center">
          <button class="pixel-btn flex-1" @click="onConfirmReset">确认</button>
          <button class="pixel-btn flex-1" @click="onCancelReset">取消</button>
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

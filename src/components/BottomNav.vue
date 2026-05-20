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
  <div class="flex justify-around mt-5 pt-3 border-t-4 border-gb-dark">
    <div
      v-for="item in navItems"
      :key="item.key"
      class="text-center text-xs cursor-pointer px-2 py-1"
      :class="{ 'bg-gb-light border-2 border-gb-darker': props.currentPage === item.key }"
      @click="onNavClick(item.key)"
    >
      {{ item.label }}
    </div>
    <div class="text-center text-xs cursor-pointer px-2 py-1" @click="onResetClick">
      重置
    </div>
  </div>

  <!-- 重置确认弹框 -->
  <div v-if="showResetConfirm" class="fixed inset-0 z-50">
    <div class="absolute inset-0 bg-black/70" />
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 max-w-full animate-[popIn_0.2s_ease-out]">
      <div class="bg-gb-bg border-8 border-gb-darker p-5 text-center">
        <h3 class="text-gb-darker font-bold text-lg mb-2">⚠️ 重置迷宫</h3>
        <p class="text-gb-darker text-sm mb-2">确定要重置当前迷宫吗？</p>
        <p class="text-gb-dark text-xs mb-6">当前层进度将丢失，进入下一层</p>

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

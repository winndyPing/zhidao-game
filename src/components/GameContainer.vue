<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useGameStore } from '@/stores/gameStore';
import DungeonView from '@/views/DungeonView.vue';
import CraftView from '@/views/CraftView.vue';
import InventoryView from '@/views/InventoryView.vue';
import LoginView from '@/views/LoginView.vue';
import CareerSelectView from '@/views/CareerSelectView.vue';

const store = useGameStore();

// 应用启动时尝试自动登录
onMounted(() => {
  store.tryAutoLogin();
});

const isLoggedIn = computed(() => store.user.isLoggedIn);
const hasSelectedCareer = computed(() => store.user.hasSelectedCareer);

const currentView = computed(() => {
  // 未登录 -> 登录页
  if (!isLoggedIn.value) {
    return LoginView;
  }
  
  // 已登录但未选择职业方向 -> 职业选择页
  if (!hasSelectedCareer.value) {
    return CareerSelectView;
  }
  
  // 正常游戏页面
  switch (store.currentPage) {
    case 'dungeon': return DungeonView;
    case 'craft': return CraftView;
    case 'inventory': return InventoryView;
    default: return DungeonView;
  }
});
</script>

<template>
  <div class="min-h-screen bg-gb-darker flex flex-col items-center py-4">
    <component :is="currentView" />
  </div>
</template>

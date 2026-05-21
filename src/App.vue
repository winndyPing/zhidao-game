<script setup lang="ts">
import { ref } from 'vue';
import GameContainer from './components/GameContainer.vue';
import SalesLaunchpad from './components/SalesLaunchpad.vue';

const showDemo = ref(false);

function enterDemo() {
  showDemo.value = true;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToLaunchpad() {
  showDemo.value = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<template>
  <div>
    <template v-if="showDemo">
      <div class="sticky top-0 z-50 border-b-4 border-gb-dark bg-gb-darker/95 px-4 py-3 backdrop-blur-sm">
        <div class="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div class="text-xs uppercase tracking-[0.28em] text-gb-light">Demo Mode</div>
          <button class="pixel-btn !m-0 !px-4 !py-2 text-xs" @click="backToLaunchpad">
            返回销售页
          </button>
        </div>
      </div>
      <GameContainer />
    </template>
    <SalesLaunchpad v-else @enter-demo="enterDemo" />
  </div>
</template>

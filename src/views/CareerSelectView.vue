<script setup lang="ts">
import { computed, ref } from 'vue';
import { useGameStore } from '@/stores/gameStore';
import { careerDirections } from '@data/careerDirections';
import type { CareerDirection } from '@/types/game';

const store = useGameStore();
const selectedCareer = ref<CareerDirection | null>(null);
const showDetail = ref(false);

const categories = computed(() => Array.from(new Set(careerDirections.map((career) => career.category))));

const careersByCategory = computed(() => {
  const grouped: Record<string, CareerDirection[]> = {};
  careerDirections.forEach((career) => {
    if (!grouped[career.category]) {
      grouped[career.category] = [];
    }
    grouped[career.category].push(career);
  });
  return grouped;
});

function selectCareer(career: CareerDirection) {
  selectedCareer.value = career;
  showDetail.value = true;
}

function goBack() {
  showDetail.value = false;
  selectedCareer.value = null;
}

function confirmSelection() {
  if (!selectedCareer.value) return;
  store.setCareerDirection(selectedCareer.value);
}

const categoryNameMap: Record<string, string> = {
  frontend: '前端方向',
  backend: '后端方向',
  mobile: '移动端方向',
  data: '数据方向',
  ai: 'AI 方向',
  devops: '工程效能方向',
  game: '游戏开发方向',
  other: '综合方向',
};
</script>

<template>
  <div class="mx-auto h-full min-h-0 w-full max-w-[430px] overflow-x-hidden">
    <div class="flex h-full min-h-0 w-full flex-col border-8 border-gb-dark bg-gb-bg p-4 shadow-pixel-lg rounded-gameboy sm:p-6">
      <template v-if="!showDetail">
        <div class="text-center mb-4 flex-shrink-0 lg:mb-6">
          <div class="text-4xl mb-2">🧭</div>
          <h1 class="text-gb-darker font-bold text-xl">选择你的成长方向</h1>
          <p class="text-gb-dark text-xs mt-2">根据兴趣或目标岗位选择路线，先把更值得投入的技能链路定下来</p>
        </div>

        <div class="flex-1 overflow-y-auto space-y-4 pr-1">
          <div v-for="category in categories" :key="category" class="mb-4">
            <div class="text-gb-dark text-xs mb-2 px-1">{{ categoryNameMap[category] || category }}</div>
            <div class="grid grid-cols-1 gap-2">
              <button
                v-for="career in careersByCategory[category]"
                :key="career.id"
                class="bg-gb-light border-4 border-gb-darker p-3 text-left hover:border-gb-gold transition-colors"
                :class="{ 'border-gb-gold': selectedCareer?.id === career.id }"
                @click="selectCareer(career)"
              >
                <div class="flex items-center gap-2 mb-1">
                  <span class="text-xl">{{ career.icon }}</span>
                  <span class="text-gb-darker font-bold text-sm">{{ career.name }}</span>
                </div>
                <p class="text-gb-dark text-xs leading-5">{{ career.description }}</p>
              </button>
            </div>
          </div>
        </div>

        <div class="mt-4 text-center flex-shrink-0">
          <button class="text-gb-dark text-xs underline" @click="store.skipCareerSelection()">
            先随便看看，稍后再定 →
          </button>
        </div>
      </template>

      <template v-else-if="selectedCareer">
        <div class="flex items-center gap-2 mb-4 flex-shrink-0">
          <button class="text-gb-dark text-sm" @click="goBack">← 返回</button>
        </div>

        <div class="flex-1 overflow-y-auto">
          <div class="grid gap-4">
            <div class="text-center mb-4">
              <span class="text-5xl">{{ selectedCareer.icon }}</span>
              <h2 class="text-gb-darker font-bold text-xl mt-2">{{ selectedCareer.name }}</h2>
              <p class="text-gb-dark text-sm mt-1 leading-6">{{ selectedCareer.description }}</p>
            </div>

            <div class="grid gap-4">
              <div class="bg-gb-light border-4 border-gb-darker p-3">
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-lg">🎯</span>
                  <span class="text-gb-darker font-bold text-sm">优先补齐</span>
                  <span class="text-gb-dark text-xs">（当前阶段先打牢）</span>
                </div>
                <div class="space-y-2">
                  <div
                    v-for="skill in selectedCareer.skills.filter((skill) => skill.priority === 'core')"
                    :key="skill.id"
                    class="flex items-center gap-2 bg-gb-bg p-2 border-2 border-gb-dark"
                  >
                    <span class="text-lg">{{ skill.icon }}</span>
                    <div class="flex-1">
                      <div class="text-gb-darker text-sm font-bold">{{ skill.name }}</div>
                      <div class="text-gb-dark text-xs leading-5">{{ skill.description }}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-gb-light border-4 border-gb-darker p-3">
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-lg">⭐</span>
                  <span class="text-gb-darker font-bold text-sm">进阶加分项</span>
                  <span class="text-gb-dark text-xs">（让竞争力更完整）</span>
                </div>
                <div class="space-y-2">
                  <div
                    v-for="skill in selectedCareer.skills.filter((skill) => skill.priority === 'important')"
                    :key="skill.id"
                    class="flex items-center gap-2 bg-gb-bg p-2 border-2 border-gb-dark"
                  >
                    <span class="text-lg">{{ skill.icon }}</span>
                    <div class="flex-1">
                      <div class="text-gb-darker text-sm font-bold">{{ skill.name }}</div>
                      <div class="text-gb-dark text-xs leading-5">{{ skill.description }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button class="pixel-btn w-full mt-4 flex-shrink-0" @click="confirmSelection">
          以这个方向开始成长
        </button>
      </template>
    </div>
  </div>
</template>

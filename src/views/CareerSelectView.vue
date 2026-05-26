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
  mobile: '移动端',
  data: '数据方向',
  ai: 'AI 方向',
  devops: '运维方向',
  game: '游戏开发',
  other: '其他方向',
};
</script>

<template>
  <div class="mx-auto w-[calc(100vw-16px)] max-w-[430px] overflow-x-hidden sm:w-full">
    <div class="flex min-h-[calc(100dvh-16px)] w-full flex-col bg-gb-bg border-8 border-gb-dark rounded-gameboy shadow-pixel-lg p-4 sm:min-h-[calc(100dvh-32px)] sm:p-6">
      <template v-if="!showDetail">
        <div class="text-center mb-4 flex-shrink-0 lg:mb-6">
          <div class="text-4xl mb-2">🧭</div>
          <h1 class="text-gb-darker font-bold text-xl">选择你的职业方向</h1>
          <p class="text-gb-dark text-xs mt-2">根据兴趣或岗位目标选择，拿到更贴近自己的学习路线</p>
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
            暂不选择，稍后再说 →
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
                  <span class="text-gb-darker font-bold text-sm">核心技能</span>
                  <span class="text-gb-dark text-xs">（必须掌握）</span>
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
                  <span class="text-gb-darker font-bold text-sm">重要技能</span>
                  <span class="text-gb-dark text-xs">（提升竞争力）</span>
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
          确认选择这个方向
        </button>
      </template>
    </div>
  </div>
</template>

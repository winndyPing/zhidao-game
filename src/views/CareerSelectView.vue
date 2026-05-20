<script setup lang="ts">
import { ref, computed } from 'vue';
import { useGameStore } from '@/stores/gameStore';
import { careerDirections } from '@data/careerDirections';
import type { CareerDirection } from '@/types/game';

const store = useGameStore();

const selectedCareer = ref<CareerDirection | null>(null);
const showDetail = ref(false);

// 分类
const categories = computed(() => {
  const cats = new Set(careerDirections.map(c => c.category));
  return Array.from(cats);
});

// 按分类分组
const careersByCategory = computed(() => {
  const grouped: Record<string, CareerDirection[]> = {};
  careerDirections.forEach(career => {
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
  
  // 保存到用户数据
  store.setCareerDirection(selectedCareer.value);
}

// 分类名称映射
const categoryNameMap: Record<string, string> = {
  frontend: '前端方向',
  backend: '后端方向',
  mobile: '移动端',
  data: '数据方向',
  ai: 'AI方向',
  devops: '运维方向',
  game: '游戏开发',
  other: '其他方向',
};
</script>

<template>
  <div class="w-full min-h-screen bg-gb-darker flex flex-col items-center justify-center px-8">
    <div class="w-full width-[calc(100vw-32px)] h-[calc(100vh-70px)] bg-gb-bg border-8 border-gb-dark rounded-gameboy shadow-pixel-lg p-6 flex flex-col">
      <!-- 选择列表页面 -->
      <template v-if="!showDetail">
        <!-- 标题 -->
        <div class="text-center mb-4 flex-shrink-0">
          <div class="text-4xl mb-2">🎯</div>
          <h1 class="text-gb-darker font-bold text-xl">选择你的方向</h1>
          <p class="text-gb-dark text-xs mt-2">根据兴趣或岗位选择，获取专属学习路线</p>
        </div>

        <!-- 职业方向列表 - 可滚动 -->
        <div class="flex-1 overflow-y-auto space-y-4">
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
                <p class="text-gb-dark text-xs">{{ career.description }}</p>
              </button>
            </div>
          </div>
        </div>

        <!-- 跳过按钮 -->
        <div class="mt-4 text-center flex-shrink-0">
          <button class="text-gb-dark text-xs underline" @click="store.skipCareerSelection()">
            暂不选择，稍后再说 →
          </button>
        </div>
      </template>

      <!-- 详情页面 -->
      <template v-else-if="selectedCareer">
        <!-- 头部 -->
        <div class="flex items-center gap-2 mb-4 flex-shrink-0">
          <button class="text-gb-dark text-sm" @click="goBack">← 返回</button>
        </div>

        <!-- 详情内容 - 可滚动 -->
        <div class="flex-1 overflow-y-auto">
          <!-- 职业信息 -->
          <div class="text-center mb-4">
            <span class="text-5xl">{{ selectedCareer.icon }}</span>
            <h2 class="text-gb-darker font-bold text-xl mt-2">{{ selectedCareer.name }}</h2>
            <p class="text-gb-dark text-sm mt-1">{{ selectedCareer.description }}</p>
          </div>

          <!-- 技能推荐 -->
          <div class="space-y-4">
            <!-- 核心技能 -->
            <div class="bg-gb-light border-4 border-gb-darker p-3">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-lg">🔥</span>
                <span class="text-gb-darker font-bold text-sm">核心技能</span>
                <span class="text-gb-dark text-xs">（必须掌握）</span>
              </div>
              <div class="space-y-2">
                <div
                  v-for="skill in selectedCareer.skills.filter(s => s.priority === 'core')"
                  :key="skill.id"
                  class="flex items-center gap-2 bg-gb-bg p-2 border-2 border-gb-dark"
                >
                  <span class="text-lg">{{ skill.icon }}</span>
                  <div class="flex-1">
                    <div class="text-gb-darker text-sm font-bold">{{ skill.name }}</div>
                    <div class="text-gb-dark text-xs">{{ skill.description }}</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 重要技能 -->
            <div class="bg-gb-light border-4 border-gb-darker p-3">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-lg">⭐</span>
                <span class="text-gb-darker font-bold text-sm">重要技能</span>
                <span class="text-gb-dark text-xs">（提升竞争力）</span>
              </div>
              <div class="space-y-2">
                <div
                  v-for="skill in selectedCareer.skills.filter(s => s.priority === 'important')"
                  :key="skill.id"
                  class="flex items-center gap-2 bg-gb-bg p-2 border-2 border-gb-dark"
                >
                  <span class="text-lg">{{ skill.icon }}</span>
                  <div class="flex-1">
                    <div class="text-gb-darker text-sm font-bold">{{ skill.name }}</div>
                    <div class="text-gb-dark text-xs">{{ skill.description }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 确认按钮 -->
        <button class="pixel-btn w-full mt-4 flex-shrink-0" @click="confirmSelection">
          ✅ 确认选择此方向
        </button>
      </template>
    </div>
  </div>
</template>

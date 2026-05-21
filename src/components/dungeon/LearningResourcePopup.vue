<script setup lang="ts">
import { watch, ref } from 'vue';
import type { Room } from '@/types/game';
import type { LearningResource } from '@data/learningResources';
import { getResourcesForSkill } from '@data/learningResources';
import { careerDirections } from '@data/careerDirections';

interface Props {
  show: boolean;
  room: Room | null;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  startChallenge: [skillId: string];
  close: [];
}>();


// 当前学习资源
const currentLearning = ref<{ skillId: string; skillName: string; skillIcon: string; resource: LearningResource } | null>(null);

// 加载学习资源
function loadLearningResource() {
  // 优先使用房间已关联的技能ID（如果用户之前选择过）
  if (props.room?.linkedSkillId) {
    const skill = getSkillById(props.room.linkedSkillId);
    if (skill) {
      const resources = getResourcesForSkill(props.room.linkedSkillId);
      currentLearning.value = {
        skillId: props.room.linkedSkillId,
        skillName: skill.name,
        skillIcon: skill.icon,
        resource: resources.length > 0 ? resources[0] : {
          skillId: props.room.linkedSkillId,
          title: skill.name,
          description: skill.description,
          difficulty: 'beginner',
          resources: []
        }
      };
      return;
    }
  }
  
  // 其次使用房间关联的技能提示
  if (props.room?.event.skillHint) {
    const skill = getSkillById(props.room.event.skillHint);
    if (skill) {
      const resources = getResourcesForSkill(props.room.event.skillHint);
      currentLearning.value = {
        skillId: props.room.event.skillHint,
        skillName: skill.name,
        skillIcon: skill.icon,
        resource: resources.length > 0 ? resources[0] : {
          skillId: props.room.event.skillHint,
          title: skill.name,
          description: skill.description,
          difficulty: 'beginner',
          resources: []
        }
      };
      return;
    }
  }
  
  // 没有职业方向或没有技能提示，使用默认
  currentLearning.value = {
    skillId: 'python',
    skillName: 'Python基础',
    skillIcon: '🐍',
    resource: {
      skillId: 'python',
      title: 'Python基础语法',
      description: 'Python编程入门',
      difficulty: 'beginner',
      resources: [
        { type: 'doc', title: 'Python教程', url: 'https://www.runoob.com/python3/python3-tutorial.html', description: '菜鸟教程' },
        { type: 'practice', title: 'LeetCode', url: 'https://leetcode.cn/', description: '在线练习' },
      ]
    }
  };
}

// 根据技能ID获取技能信息
function getSkillById(skillId: string) {
  for (const career of careerDirections) {
    const skill = career.skills.find(s => s.id === skillId);
    if (skill) return skill;
  }
  return null;
}

// 监听显示状态
watch(() => props.show, (newVal) => {
  if (newVal) {
    loadLearningResource();
  }
});

function getResourceIcon(type: string): string {
  const icons: Record<string, string> = {
    doc: '📖',
    video: '🎬',
    practice: '💻',
    article: '📄',
  };
  return icons[type] || '📚';
}

function openResource(url: string) {
  window.open(url, '_blank');
}

function onStartChallenge() {
  if (currentLearning.value) {
    emit('startChallenge', currentLearning.value.skillId);
  }
}

function onClose() {
  emit('close');
}
</script>

<template>
  <div v-if="show && room" class="fixed inset-0 z-50">
    <div class="absolute inset-0 bg-black/70" />
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 max-w-[90%] animate-[popIn_0.2s_ease-out]">
      <div class="bg-gb-bg border-8 border-gb-darker p-4">
        <!-- 标题 -->
        <div class="text-center mb-4">
          <span class="text-4xl">{{ currentLearning?.skillIcon || '📖' }}</span>
          <h3 class="text-gb-darker font-bold text-lg mt-2">{{ currentLearning?.resource.title || '学习资源' }}</h3>
          <p class="text-gb-dark text-xs mt-1">{{ currentLearning?.resource.description }}</p>
        </div>

        <!-- 技能标签 -->
        <div class="flex justify-center gap-2 mb-4">
          <span class="bg-gb-light border-2 border-gb-darker px-2 py-1 text-xs text-gb-darker">
            {{ currentLearning?.skillName }}
          </span>
          <span class="bg-gb-light border-2 border-gb-darker px-2 py-1 text-xs text-gb-darker">
            {{ currentLearning?.resource.difficulty === 'beginner' ? '入门' : currentLearning?.resource.difficulty === 'intermediate' ? '进阶' : '高级' }}
          </span>
        </div>

        <!-- 学习资源列表 -->
        <div class="bg-gb-light border-4 border-gb-darker p-3 mb-4">
          <div class="flex items-center gap-2 mb-2">
            <span>🔗</span>
            <span class="font-bold text-gb-darker text-sm">推荐学习</span>
          </div>
          <div class="space-y-2">
            <div
              v-for="(res, idx) in currentLearning?.resource.resources"
              :key="idx"
              class="flex items-center gap-2 bg-gb-bg p-2 border-2 border-gb-dark cursor-pointer hover:border-gb-gold transition-colors"
              @click="openResource(res.url)"
            >
              <span class="text-lg">{{ getResourceIcon(res.type) }}</span>
              <div class="flex-1 min-w-0">
                <div class="text-gb-darker text-sm font-bold truncate">{{ res.title }}</div>
                <div v-if="res.description" class="text-gb-dark text-xs truncate">{{ res.description }}</div>
              </div>
              <span class="text-gb-dark text-sm">→</span>
            </div>
          </div>
        </div>

        <!-- 挑战说明 -->
        <div class="bg-gb-darker text-gb-bg p-3 mb-4 text-xs">
          <p>💡 学习完成后，点击下方按钮进入挑战任务</p>
          <p class="mt-1">完成任务可获得奖励！</p>
        </div>

        <!-- 操作按钮 -->
        <div class="flex gap-3">
          <button class="pixel-btn flex-1" @click="onStartChallenge">
            开始挑战
          </button>
          <button class="pixel-btn flex-1" @click="onClose">
            稍后再说
          </button>
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

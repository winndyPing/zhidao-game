<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import type { Room, QuizQuestion, SkillRecommendation } from '@/types/game';
import type { LearningResource } from '@data/learningResources';
import { useGameStore } from '@/stores/gameStore';
import { getRandomCareerResource, getResourcesForSkill } from '@data/learningResources';
import { careerDirections } from '@data/careerDirections';
import { ROOM_UNLOCK_ORDER, UNLOCK_ORDER_TO_ROOM } from '@/utils/roomEvents';

interface Props {
  show: boolean;
  room: Room | null;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  close: [];
  win: [message: string];
  flee: [message: string];
}>();

const store = useGameStore();

// 答题状态
const currentQuestionIndex = ref(0);
const selectedAnswer = ref<number | null>(null);
const showResult = ref(false);
const isCorrect = ref(false);
const correctCount = ref(0);
const answeredCount = ref(0);
const quizQuestions = ref<QuizQuestion[]>([]);
const showQuiz = ref(false);

// 当前学习资源
const currentResource = ref<{ skillId: string; skillName: string; resource: LearningResource } | null>(null);
const currentSkill = ref<SkillRecommendation | null>(null);

// 总题数
const totalQuestions = 1;

// 当前题目
const currentQuestion = computed(() => {
  return quizQuestions.value[currentQuestionIndex.value];
});

// 正确率
const accuracy = computed(() => {
  if (answeredCount.value === 0) return 0;
  return Math.round((correctCount.value / answeredCount.value) * 100);
});

// 根据技能ID获取技能数据
function getSkillById(skillId?: string): SkillRecommendation | null {
  if (!skillId) return null;
  
  for (const career of careerDirections) {
    const skill = career.skills.find(s => s.id === skillId);
    if (skill) return skill;
  }
  return null;
}

// 从技能题库中随机抽取题目
function getRandomQuestions(skill: SkillRecommendation, count: number): QuizQuestion[] {
  // 只使用当前技能的题库
  if (!skill.quizs || skill.quizs.length === 0) {
    return getDefaultQuestions(count);
  }
  
  // 去重：根据题目内容去重
  const uniqueQuestions = skill.quizs.filter((q, index, self) => 
    index === self.findIndex(t => t.question === q.question)
  );
  
  // 随机打乱并抽取指定数量
  const shuffled = [...uniqueQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// 默认题目（当技能没有题库时）
function getDefaultQuestions(count: number): QuizQuestion[] {
  const defaultQuizs: QuizQuestion[] = [
    { question: 'Python中用什么关键字定义函数？', options: ['function', 'def', 'func', 'define'], answer: 1, explanation: 'Python使用def关键字定义函数' },
    { question: 'JavaScript中什么关键字声明变量？', options: ['var', 'let', 'const', '以上都可以'], answer: 3, explanation: 'JavaScript中var、let、const都可以声明变量' },
    { question: 'HTML中最大的标题标签是？', options: ['<h6>', '<h1>', '<header>', '<title>'], answer: 1, explanation: '<h1>是最大的标题标签' },
    { question: 'CSS中设置背景颜色的属性是？', options: ['color', 'bg-color', 'background-color', 'bgcolor'], answer: 2, explanation: 'background-color设置背景颜色' },
    { question: 'Git提交代码的命令是？', options: ['git push', 'git commit', 'git add', 'git pull'], answer: 1, explanation: 'git commit用于提交代码' },
    { question: '哪种编程语言被称为"网页的灵魂"？', options: ['HTML', 'CSS', 'JavaScript', 'Python'], answer: 2, explanation: 'JavaScript为网页添加交互功能' },
    { question: 'HTML中用于创建表格行的标签是？', options: ['<td>', '<tr>', '<th>', '<table>'], answer: 1, explanation: '<tr>定义表格行' },
    { question: 'CSS中设置字体加粗的属性是？', options: ['font-size', 'font-weight', 'font-style', 'font-family'], answer: 1, explanation: 'font-weight设置字体粗细' },
    { question: '以下哪个不是JavaScript的数据类型？', options: ['string', 'number', 'float', 'boolean'], answer: 2, explanation: 'JavaScript没有float类型，只有number' },
    { question: 'Git用于查看提交历史的命令是？', options: ['git status', 'git log', 'git diff', 'git show'], answer: 1, explanation: 'git log显示提交历史' },
    { question: 'HTML5新增的用于绘图的标签是？', options: ['<draw>', '<svg>', '<canvas>', '<graphic>'], answer: 2, explanation: '<canvas>用于JavaScript绘图' },
    { question: 'CSS中设置元素层叠顺序的属性是？', options: ['z-index', 'layer', 'stack', 'order'], answer: 0, explanation: 'z-index控制元素的层叠顺序' },
    { question: 'JavaScript中用于输出内容到控制台的方法是？', options: ['print()', 'log()', 'console.log()', 'output()'], answer: 2, explanation: 'console.log()输出到控制台' },
    { question: '以下哪个HTML标签是自闭合标签？', options: ['<div>', '<span>', '<img>', '<p>'], answer: 2, explanation: '<img>是自闭合标签' },
    { question: 'CSS中实现水平居中的常用方法是？', options: ['text-align: center', 'margin: auto', 'align: center', 'center: true'], answer: 1, explanation: 'margin: auto可实现块元素水平居中' },
    { question: 'JavaScript中===和==的区别是？', options: ['没有区别', '===不进行类型转换', '==更严格', '===用于字符串'], answer: 1, explanation: '===是严格相等，不进行类型转换' },
    { question: 'Git用于创建新分支的命令是？', options: ['git new', 'git branch', 'git create', 'git make'], answer: 1, explanation: 'git branch <name>创建新分支' },
    { question: 'HTML中用于定义文档元数据的标签是？', options: ['<meta>', '<head>', '<title>', '<link>'], answer: 0, explanation: '<meta>定义文档元数据' },
    { question: 'CSS Flexbox中，主轴默认方向是？', options: ['从上到下', '从下到上', '从左到右', '从右到左'], answer: 2, explanation: 'Flexbox主轴默认从左到右' },
    { question: 'JavaScript中数组的push方法作用是？', options: ['删除元素', '添加元素到末尾', '添加元素到开头', '反转数组'], answer: 1, explanation: 'push()向数组末尾添加元素' },
  ];
  
  // 随机打乱并抽取指定数量
  const shuffled = [...defaultQuizs].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// 加载学习资源
function loadLearningResource() {
  const career = store.user.careerDirection;
  
  // 优先使用房间关联的技能ID
  if (props.room?.linkedSkillId) {
    const resources = getResourcesForSkill(props.room.linkedSkillId);
    const skill = getSkillById(props.room.linkedSkillId);
    
    if (skill) {
      currentSkill.value = skill;
      if (resources.length > 0) {
        currentResource.value = {
          skillId: props.room.linkedSkillId,
          skillName: skill.name,
          resource: resources[0]
        };
      } else {
        // 没有资源也设置默认
        currentResource.value = {
          skillId: props.room.linkedSkillId,
          skillName: skill.name,
          resource: {
            skillId: props.room.linkedSkillId,
            title: skill.name,
            description: skill.description,
            difficulty: 'beginner',
            resources: []
          }
        };
      }
      return;
    }
  }
  
  // 其次使用房间的技能提示
  if (props.room?.event.skillHint) {
    const resources = getResourcesForSkill(props.room.event.skillHint);
    const skill = getSkillById(props.room.event.skillHint);
    
    if (skill) {
      currentSkill.value = skill;
      if (resources.length > 0) {
        currentResource.value = {
          skillId: props.room.event.skillHint,
          skillName: skill.name,
          resource: resources[0]
        };
      } else {
        currentResource.value = {
          skillId: props.room.event.skillHint,
          skillName: skill.name,
          resource: {
            skillId: props.room.event.skillHint,
            title: skill.name,
            description: skill.description,
            difficulty: 'beginner',
            resources: []
          }
        };
      }
      return;
    }
  }
  
  // 没有选择职业方向，使用通用资源
  if (!career) {
    currentResource.value = {
      skillId: 'python',
      skillName: 'Python基础',
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
    return;
  }
  
  // 使用职业方向随机技能
  const result = getRandomCareerResource(career);
  if (result) {
    currentResource.value = {
      skillId: result.skill.id,
      skillName: result.skill.name,
      resource: result.resource
    };
    currentSkill.value = result.skill;
  }
}

// 开始答题
function startQuiz() {
  showQuiz.value = true;
  
  // 获取题目
  if (currentSkill.value) {
    quizQuestions.value = getRandomQuestions(currentSkill.value, totalQuestions);
  } else {
    quizQuestions.value = getDefaultQuestions(totalQuestions);
  }
  
  resetQuizState();
}

// 选择答案
function selectAnswer(index: number) {
  if (showResult.value) return;
  selectedAnswer.value = index;
}

// 提交答案
function submitAnswer() {
  if (selectedAnswer.value === null || !currentQuestion.value) return;
  
  showResult.value = true;
  answeredCount.value++;
  
  if (selectedAnswer.value === currentQuestion.value.answer) {
    isCorrect.value = true;
    correctCount.value++;
  } else {
    isCorrect.value = false;
  }
}

// 下一题
function nextQuestion() {
  if (currentQuestionIndex.value < quizQuestions.value.length - 1) {
    currentQuestionIndex.value++;
    selectedAnswer.value = null;
    showResult.value = false;
    isCorrect.value = false;
  } else {
    // 答题结束，计算奖励
    finishQuiz();
  }
}

// 完成答题
function finishQuiz() {
  if (!props.room) return;
  
  // 先获取奖励信息，再清空房间
  const rewardItems = props.room.event.reward?.items || [];
  const baseCP = props.room.event.reward?.cp || 10;
  
  store.clearRoom(props.room.x, props.room.y);
  
  // 根据正确率给予奖励
  const bonusCP = Math.floor(baseCP * (accuracy.value / 100) * 2);
  const totalCP = baseCP + bonusCP;
  
  store.updatePlayerCP(totalCP);
  
  // 正确率越高，获得材料概率越大
  let materialMsg = '';
  if (rewardItems.length > 0 && accuracy.value >= 60) {
    const addedMaterials: string[] = [];
    rewardItems.forEach(itemId => {
      store.addMaterial(itemId, 1);
      addedMaterials.push(getMaterialIcon(itemId));
    });
    if (addedMaterials.length > 0) {
      materialMsg = `，获得材料：${addedMaterials.join(' ')}`;
    }
  }
  
  // 方案C：配方通过宝箱掉落，答题不再解锁配方
  emit('win', `🎉 答题完成！正确率 ${accuracy.value}%，获得 ${totalCP} CP${materialMsg}！`);
  resetState();
}

// 放弃答题
function onFlee() {
  const current = store.dungeon.currentRoom;
  const prevRoom = findPreviousRoom(current.x, current.y);
  if (prevRoom) {
    store.setCurrentRoom(prevRoom.x, prevRoom.y);
  }
  
  store.updatePlayerStamina(-10);
  emit('flee', '🏃 放弃学习任务！消耗 10 体力');
  resetState();
}

function findPreviousRoom(x: number, y: number): { x: number; y: number } | null {
  const position = `${x},${y}`;
  const currentOrder = ROOM_UNLOCK_ORDER[position];
  
  // 如果是房间1，返回起点
  if (currentOrder === 1) {
    return { x: 0, y: 0 };
  }
  
  // 按解锁顺序找前一个房间
  const prevOrder = currentOrder - 1;
  const prevRoomPos = UNLOCK_ORDER_TO_ROOM[prevOrder];
  
  if (prevRoomPos) {
    const [prevX, prevY] = prevRoomPos.split(',').map(Number);
    return { x: prevX, y: prevY };
  }
  
  return { x: 0, y: 0 };
}

function resetQuizState() {
  currentQuestionIndex.value = 0;
  selectedAnswer.value = null;
  showResult.value = false;
  isCorrect.value = false;
  correctCount.value = 0;
  answeredCount.value = 0;
}

function resetState() {
  showQuiz.value = false;
  resetQuizState();
}

function closeModal() {
  emit('close');
  resetState();
}

function getMaterialIcon(id: string): string {
  const icons: Record<string, string> = {
    wood: '🪵',
    iron: '🔩',
    crystal: '💎',
    bug: '🐛',
  };
  return icons[id] || '❓';
}

// 监听show变化，加载新资源
watch(() => props.show, (newVal) => {
  if (newVal) {
    loadLearningResource();
    resetState();
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
</script>

<template>
  <div v-if="show && room" class="fixed inset-0 z-50">
    <div class="absolute inset-0 bg-black/80" @click="closeModal" />
    
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] max-w-[95%] max-h-[90vh] overflow-y-auto">
      <div class="bg-gb-bg border-8 border-gb-darker p-4">
        <!-- 标题 -->
        <div class="flex justify-between items-center mb-3">
          <h3 class="text-gb-darker font-bold text-lg">
            📚 {{ currentResource?.resource.title || '学习任务' }}
          </h3>
          <button class="text-gb-darker text-xl" @click="closeModal">×</button>
        </div>

        <!-- 技能标签 -->
        <div v-if="currentResource" class="flex items-center gap-2 mb-3">
          <span class="bg-gb-light border-2 border-gb-darker px-2 py-1 text-xs text-gb-darker">
            {{ currentResource.skillName }}
          </span>
          <span class="text-xs text-gb-dark">{{ currentResource.resource.difficulty === 'beginner' ? '入门' : currentResource.resource.difficulty === 'intermediate' ? '进阶' : '高级' }}</span>
        </div>
        
        <!-- 学习资源 -->
        <div v-if="currentResource && currentResource.resource.resources?.length > 0 && !showQuiz" class="bg-gb-light border-4 border-gb-darker p-3 mb-3">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-lg">🔗</span>
            <span class="font-bold text-gb-darker text-sm">学习资源</span>
          </div>
          <div class="space-y-2">
            <div
              v-for="(res, idx) in currentResource.resource.resources"
              :key="idx"
              class="flex items-center gap-2 bg-gb-bg p-2 border-2 border-gb-dark cursor-pointer hover:border-gb-gold transition-colors"
              @click="openResource(res.url)"
            >
              <span class="text-lg">{{ getResourceIcon(res.type) }}</span>
              <div class="flex-1">
                <div class="text-gb-darker text-sm font-bold">{{ res.title }}</div>
                <div v-if="res.description" class="text-gb-dark text-xs">{{ res.description }}</div>
              </div>
              <span class="text-gb-dark text-xs">→</span>
            </div>
          </div>
        </div>
        
        <!-- 答题前的开始按钮 -->
        <div v-if="!showQuiz" class="bg-gb-light border-4 border-gb-darker p-4 mb-3 text-center">
          <div class="text-3xl mb-2">📝</div>
          <p class="text-gb-darker font-bold mb-2">答题挑战</p>
          <p class="text-gb-dark text-xs mb-3">共 {{ totalQuestions }} 道选择题，根据正确率获得奖励</p>
          <button class="pixel-btn w-full" @click="startQuiz">
            开始答题
          </button>
        </div>
        
        <!-- 答题区域 -->
        <div v-else class="bg-gb-light border-4 border-gb-darker p-3 mb-3">
          <!-- 进度条 -->
          <div class="flex items-center justify-between mb-2">
            <span class="text-gb-dark text-xs">第 {{ currentQuestionIndex + 1 }} / {{ quizQuestions.length }} 题</span>
            <span class="text-gb-dark text-xs">正确: {{ correctCount }}</span>
          </div>
          
          <!-- 进度条 -->
          <div class="w-full h-2 bg-gb-darker mb-3">
            <div 
              class="h-full bg-gb-gold transition-all duration-300"
              :style="{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }"
            />
          </div>
          
          <!-- 题目 -->
          <div v-if="currentQuestion" class="mb-3">
            <p class="text-gb-darker text-sm font-bold mb-3">{{ currentQuestion.question }}</p>
            
            <!-- 选项 -->
            <div class="space-y-2">
              <div
                v-for="(option, idx) in currentQuestion.options"
                :key="idx"
                class="p-2 border-2 cursor-pointer transition-colors text-sm"
                :class="[
                  selectedAnswer === idx 
                    ? 'border-gb-darker bg-gb-bg' 
                    : 'border-gb-dark bg-gb-bg hover:border-gb-darker',
                  showResult && idx === currentQuestion.answer 
                    ? '!border-green-500 !bg-green-100' 
                    : '',
                  showResult && selectedAnswer === idx && idx !== currentQuestion.answer 
                    ? '!border-red-500 !bg-red-100' 
                    : ''
                ]"
                @click="selectAnswer(idx)"
              >
                <span class="font-bold mr-2">{{ ['A', 'B', 'C', 'D'][idx] }}.</span>
                <span class="text-gb-darker">{{ option }}</span>
              </div>
            </div>
          </div>
          
          <!-- 答案解释 -->
          <div v-if="showResult && currentQuestion" class="mt-3 p-2 border-2 border-gb-darker text-sm" :class="isCorrect ? 'bg-green-100' : 'bg-red-100'">
            <p class="font-bold" :class="isCorrect ? 'text-green-800' : 'text-red-800'">
              {{ isCorrect ? '✅ 正确！' : '❌ 错误！' }}
            </p>
            <p class="text-gb-darker mt-1">{{ currentQuestion.explanation }}</p>
          </div>
          
          <!-- 操作按钮 -->
          <div class="flex gap-3 mt-3">
            <button 
              v-if="!showResult"
              class="pixel-btn flex-1"
              :disabled="selectedAnswer === null"
              :class="{ 'opacity-50': selectedAnswer === null }"
              @click="submitAnswer"
            >
              确认答案
            </button>
            
            <button 
              v-if="showResult && currentQuestionIndex < quizQuestions.length - 1"
              class="pixel-btn flex-1"
              @click="nextQuestion"
            >
              下一题
            </button>
            
            <button 
              v-if="showResult && currentQuestionIndex >= quizQuestions.length - 1"
              class="pixel-btn flex-1"
              style="background-color: #9bbc0f;"
              @click="finishQuiz"
            >
              🎉 完成答题
            </button>
          </div>
        </div>
        
        <!-- 放弃按钮 -->
        <button 
          v-if="!showQuiz || (showQuiz && !showResult)"
          class="pixel-btn w-full mt-2"
          @click="onFlee"
        >
          放弃
        </button>
        
        <!-- 提示 -->
        <div v-if="!showQuiz" class="mt-3 text-center text-xs text-gb-dark">
          <p>💡 建议先学习资源后再答题</p>
        </div>
      </div>
    </div>
  </div>
</template>

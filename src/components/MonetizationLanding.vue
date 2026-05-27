<script setup lang="ts">
import { computed, ref } from 'vue';
import { contentArticles } from '@/data/landingProject';

type PersonaKey = 'career-switcher' | 'student' | 'early-career';

interface DirectionChoice {
  title: string;
  summary: string;
  articleId: string;
}

interface PersonaProfile {
  key: PersonaKey;
  eyebrow: string;
  title: string;
  summary: string;
  promise: string;
  searchIntents: string[];
  steps: string[];
  directions: DirectionChoice[];
  articleIds: string[];
}

const emit = defineEmits<{
  enterDemo: [];
  openArticle: [articleId: string];
}>();

const personas: PersonaProfile[] = [
  {
    key: 'career-switcher',
    eyebrow: '我想转行',
    title: '先找到容易起步、又能尽快做出作品的方向',
    summary: '适合还没定方向、想尽快建立学习顺序和求职节奏的人。',
    promise: '你会先看到能上手的方向，再看到该读哪几篇、下一步做什么。',
    searchIntents: ['零基础转行学什么', '三个月转前端', '自学怎么找第一份工作'],
    steps: ['先看方向差异，别急着囤课', '选一条最能做出作品的路线', '围绕项目、简历、面试组织输出'],
    directions: [
      {
        title: '前端开发',
        summary: '反馈快、作品展示直观，适合想快速做出可见成果的人。',
        articleId: 'frontend-roadmap',
      },
      {
        title: 'Python 应用 / 自动化',
        summary: '上手门槛低，能较快连接脚本、工具和 AI 应用场景。',
        articleId: 'python-career-options',
      },
      {
        title: '产品经理',
        summary: '如果你更擅长理解需求、表达和推进协作，可以先判断是否真适合这条路。',
        articleId: 'product-manager-entry',
      },
    ],
    articleIds: ['frontend-roadmap', 'self-taught-job-plan', 'python-career-options', 'product-manager-entry'],
  },
  {
    key: 'student',
    eyebrow: '我是大学生',
    title: '先建立职业地图，再决定该补哪类技能和项目',
    summary: '适合还在校、时间分散、希望少走弯路的同学。',
    promise: '你不需要一下子学很多，先看清岗位差异，再按学期节奏安排项目和能力。',
    searchIntents: ['大学生学什么技术', '校招准备顺序', '在校怎么选技术方向'],
    steps: ['先看岗位真实差异', '优先补能写进简历的项目', '把路线图拆到学期和假期里执行'],
    directions: [
      {
        title: '数据分析',
        summary: '适合对业务、数据表达和报表分析更敏感的人，起步路径也相对清晰。',
        articleId: 'data-analyst-entry',
      },
      {
        title: '后端开发',
        summary: '适合愿意系统打基础、做完整项目、冲校招技术岗的人。',
        articleId: 'backend-roadmap',
      },
      {
        title: 'UniApp / 小程序',
        summary: '如果你想更快做出能展示的上线作品，这条路更容易形成作品集。',
        articleId: 'uniapp-smallapp-roadmap',
      },
    ],
    articleIds: ['backend-roadmap', 'data-analyst-entry', 'uniapp-smallapp-roadmap', 'ai-career-starter'],
  },
  {
    key: 'early-career',
    eyebrow: '我已经工作 1-3 年',
    title: '先判断是继续深挖现方向，还是借已有经验横向切入',
    summary: '适合已经工作一段时间，想转技术栈、补第二增长线或换赛道的人。',
    promise: '你会优先看到和当前经验更容易衔接的方向，而不是从零推倒重来。',
    searchIntents: ['工作后怎么转技术方向', '测试转开发', '1-3 年提升路线'],
    steps: ['先盘点你已有的业务经验', '选最容易复用旧经验的新方向', '把升级动作落到项目和输出上'],
    directions: [
      {
        title: '测试到质量工程',
        summary: '如果你有测试背景，这条线比盲目重学更适合放大已有经验。',
        articleId: 'test-engineer-entry',
      },
      {
        title: 'DevOps / 平台工程',
        summary: '适合已经接触过部署、环境、流程的人，成长逻辑更偏工程化。',
        articleId: 'devops-roadmap',
      },
      {
        title: 'AI 应用方向',
        summary: '如果你已有开发或业务背景，AI 应用层通常比纯算法更现实。',
        articleId: 'ai-career-starter',
      },
    ],
    articleIds: ['test-engineer-entry', 'devops-roadmap', 'ai-career-starter', 'career-site-monetization'],
  },
];

const selectedPersona = ref<PersonaKey>('career-switcher');

function getArticleById(articleId: string) {
  return contentArticles.find((item) => item.id === articleId);
}

const activePersona = computed(
  () => personas.find((item) => item.key === selectedPersona.value) ?? personas[0],
);

const recommendedArticles = computed(() =>
  activePersona.value.articleIds
    .map((articleId) => getArticleById(articleId))
    .filter((item): item is NonNullable<typeof item> => Boolean(item)),
);

const featuredArticle = computed(() => recommendedArticles.value[0] ?? contentArticles[0]);
const supportingArticles = computed(() => recommendedArticles.value.slice(1, 4));
const fallbackArticles = computed(() =>
  contentArticles
    .filter((item) => !activePersona.value.articleIds.includes(item.id))
    .slice(0, 3),
);
</script>

<template>
  <div class="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(155,188,15,0.12),_transparent_35%),linear-gradient(180deg,_#0f380f_0%,_#0b2b0b_100%)] text-gb-darker">
    <section class="overflow-hidden border-b-4 border-[#23321c] bg-[linear-gradient(180deg,_rgba(155,188,15,0.14)_0%,_rgba(15,56,15,0)_100%)]">
      <div class="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_360px] lg:px-8 lg:py-12 xl:gap-8">
        <div>
          <div class="inline-flex border-4 border-gb-dark bg-gb-light px-3 py-1 text-[11px] font-bold uppercase tracking-[0.24em] text-gb-darker shadow-[4px_4px_0_#0f380f]">
            职业方向导航
          </div>
          <h1 class="mt-5 max-w-4xl text-4xl font-black leading-tight text-[#f7ffd4] sm:text-5xl lg:text-[60px] lg:leading-[1.04]">
            不是先刷内容，
            <br />
            而是先判断你现在该走哪条路。
          </h1>
          <p class="mt-6 max-w-3xl text-base leading-8 text-[#dbe7ac] sm:text-lg lg:text-[19px] lg:leading-9">
            这里不讲空话，也不让你在一堆相似卡片里自己猜。先选你现在的状态，再给你更合适的方向、文章和体验入口。
          </p>

          <div class="mt-9 flex flex-wrap gap-3 lg:gap-4">
            <button
              class="pixel-btn !m-0 !px-6 !py-3 text-sm sm:text-base"
              @click="emit('openArticle', featuredArticle.id)"
            >
              从推荐文章开始
            </button>
            <button
              class="border-4 border-gb-dark bg-[#306230] px-6 py-3 text-sm font-bold text-[#f7ffd4] shadow-[4px_4px_0_#0f380f] transition hover:bg-[#3a733a] lg:px-7 lg:py-3.5"
              @click="emit('enterDemo')"
            >
              直接进入职业体验
            </button>
          </div>

          <div class="mt-10 flex max-w-4xl flex-wrap gap-3 lg:mt-12 lg:gap-4">
            <span
              v-for="intent in activePersona.searchIntents"
              :key="intent"
              class="border-2 border-gb-dark bg-[#1b3a14] px-4 py-2 text-sm text-[#d5ff66] lg:px-5 lg:py-2.5"
            >
              {{ intent }}
            </span>
          </div>
        </div>

        <div class="border-8 border-[#23321c] bg-[#9bbc0f] p-6 shadow-[10px_10px_0_#0f380f] sm:p-8 lg:self-center">
          <div class="text-sm font-bold uppercase tracking-[0.18em] text-gb-darker">
            先选你是谁
          </div>
          <div class="mt-5 space-y-3">
            <button
              v-for="persona in personas"
              :key="persona.key"
              class="w-full border-4 px-5 py-5 text-left transition lg:px-6 lg:py-6"
              :class="
                persona.key === selectedPersona
                  ? 'border-gb-dark bg-[#306230] text-[#f7ffd4] shadow-[4px_4px_0_#17380f]'
                  : 'border-gb-dark bg-gb-light text-gb-darker hover:bg-[#b7d31c]'
              "
              @click="selectedPersona = persona.key"
            >
              <div class="text-xs uppercase tracking-[0.22em] opacity-70">
                {{ persona.eyebrow }}
              </div>
              <div class="mt-2 text-xl font-black leading-snug">
                {{ persona.title }}
              </div>
              <p class="mt-2 text-sm leading-7 opacity-80">
                {{ persona.summary }}
              </p>
            </button>
          </div>
        </div>
      </div>
    </section>

    <main class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10 xl:py-12">
      <section class="grid gap-6 xl:grid-cols-[340px_minmax(0,1fr)] xl:gap-8">
        <div class="border-4 border-gb-dark bg-[#1a3414] p-7 text-[#f3eddc] shadow-[8px_8px_0_#0f380f] sm:p-8 xl:sticky xl:top-6 xl:h-fit">
          <div class="text-xs uppercase tracking-[0.24em] text-[#d5ff66]">
            当前建议
          </div>
          <h2 class="mt-4 text-3xl font-black leading-tight">
            {{ activePersona.promise }}
          </h2>
          <div class="mt-8 space-y-4">
            <div
              v-for="(step, index) in activePersona.steps"
              :key="step"
              class="flex items-start gap-4 border-4 border-[#284c17] bg-[#2c5d28] px-4 py-4"
            >
              <div class="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-gb-dark bg-[#d4af37] text-sm font-black text-[#20261a]">
                {{ index + 1 }}
              </div>
              <p class="pt-1 text-sm leading-7 text-[#f3eddc]">
                {{ step }}
              </p>
            </div>
          </div>
        </div>

        <div class="border-8 border-[#23321c] bg-[#9bbc0f] p-5 shadow-[10px_10px_0_#0f380f] sm:p-8 xl:p-9">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between xl:gap-8">
            <div>
              <div class="text-xs uppercase tracking-[0.22em] text-gb-darker">
                职业方向
              </div>
              <h2 class="mt-2 max-w-[12ch] text-[30px] font-black leading-[1.15] text-gb-darker sm:max-w-none sm:text-2xl xl:max-w-none xl:text-[34px] xl:leading-[1.1]">
                先看这 3 个方向入口
              </h2>
              <p class="mt-3 max-w-2xl text-sm leading-7 text-[#29461f] xl:text-[15px]">
                基于你当前状态筛出来的优先选项，先点进去看差异，再决定往哪条路投入时间。
              </p>
            </div>
            <button
              class="pixel-btn !m-0 self-start !px-4 !py-2 text-sm sm:self-auto xl:!px-5 xl:!py-2.5"
              @click="emit('enterDemo')"
            >
              先去体验
            </button>
          </div>

          <div class="mt-6 grid gap-4 xl:mt-8 xl:grid-cols-3">
            <button
              v-for="(direction, index) in activePersona.directions"
              :key="direction.title"
              class="grid w-full gap-3 border-4 border-gb-dark bg-gb-light px-5 py-5 text-left transition hover:bg-[#b7d31c] sm:grid-cols-[72px_1fr_auto] sm:gap-4 xl:h-full xl:grid-cols-1 xl:grid-rows-[auto_auto_1fr_auto] xl:gap-5 xl:px-6 xl:py-6"
              @click="emit('openArticle', direction.articleId)"
            >
              <div class="text-[36px] font-black leading-none text-[#306230] sm:text-[40px] xl:text-[44px]">
                0{{ index + 1 }}
              </div>
              <div>
                <div class="text-[28px] font-black leading-none text-gb-darker sm:text-xl sm:leading-snug xl:text-[26px]">
                  {{ direction.title }}
                </div>
                <p class="mt-3 text-sm leading-7 text-[#29461f]">
                  {{ direction.summary }}
                </p>
              </div>
              <div class="self-center pt-1 text-sm font-semibold text-[#306230] xl:self-end">
                看这条路 →
              </div>
            </button>
          </div>
        </div>
      </section>

      <section class="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] xl:gap-8">
        <button
          class="overflow-hidden border-8 border-[#23321c] bg-[linear-gradient(180deg,_#9bbc0f_0%,_#7d9d09_100%)] p-0 text-left text-gb-darker shadow-[10px_10px_0_#0f380f] transition hover:translate-y-[-2px] xl:min-h-[420px]"
          @click="emit('openArticle', featuredArticle.id)"
        >
          <div class="p-7 sm:p-8 xl:flex xl:h-full xl:flex-col xl:justify-between xl:p-10">
            <div>
            <div class="text-xs uppercase tracking-[0.22em] text-[#306230]">
              推荐先读
            </div>
            <h2 class="mt-4 max-w-2xl text-3xl font-black leading-tight text-gb-darker xl:text-[42px] xl:leading-[1.08]">
              {{ featuredArticle.title }}
            </h2>
            <p class="mt-4 max-w-2xl text-sm leading-7 text-[#29461f] sm:text-base xl:mt-5 xl:max-w-3xl xl:text-[17px] xl:leading-8">
              {{ featuredArticle.excerpt }}
            </p>
            </div>
            <div class="mt-8 flex flex-wrap items-center gap-3 text-sm text-[#29461f]">
              <span class="border-2 border-gb-dark bg-gb-light px-3 py-1">
                {{ featuredArticle.category }}
              </span>
              <span>{{ featuredArticle.readTime }}</span>
            </div>
          </div>
          <div class="border-t-4 border-[#23321c] bg-[#b7d31c] px-7 py-4 text-sm font-semibold sm:px-8">
            进入详情页阅读 →
          </div>
        </button>

        <div class="border-8 border-[#23321c] bg-[#9bbc0f] p-6 shadow-[10px_10px_0_#0f380f] sm:p-7 xl:p-8">
          <div class="text-xs uppercase tracking-[0.22em] text-gb-darker">
            学习文章
          </div>
          <div class="mt-5 space-y-3 xl:space-y-4">
            <button
              v-for="article in supportingArticles"
              :key="article.id"
              class="w-full border-4 border-gb-dark bg-gb-light px-5 py-4 text-left transition hover:bg-[#b7d31c] xl:px-6 xl:py-5"
              @click="emit('openArticle', article.id)"
            >
              <div class="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.16em] text-[#306230]">
                <span>{{ article.category }}</span>
                <span>{{ article.readTime }}</span>
              </div>
              <div class="mt-3 text-lg font-black leading-snug text-gb-darker">
                {{ article.title }}
              </div>
              <p class="mt-2 text-sm leading-7 text-[#29461f]">
                {{ article.excerpt }}
              </p>
            </button>
          </div>
        </div>
      </section>

      <section class="mt-10 border-8 border-[#23321c] bg-[#9bbc0f] p-6 shadow-[10px_10px_0_#0f380f] sm:p-8 xl:p-9">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div class="text-xs uppercase tracking-[0.22em] text-gb-darker">
              继续往下看
            </div>
            <h2 class="mt-2 text-2xl font-black text-gb-darker">
              如果你还没决定，先从这些高频问题开始
            </h2>
          </div>
          <button
            class="pixel-btn !m-0 !px-5 !py-3 text-sm"
            @click="emit('enterDemo')"
          >
            不想读文章，直接体验
          </button>
        </div>

        <div class="mt-6 grid gap-4 md:grid-cols-3 xl:gap-5">
          <button
            v-for="article in fallbackArticles"
            :key="article.id"
            class="border-4 border-gb-dark bg-gb-light px-5 py-5 text-left transition hover:bg-[#b7d31c] xl:px-6 xl:py-6"
            @click="emit('openArticle', article.id)"
          >
            <div class="text-xs uppercase tracking-[0.18em] text-[#306230]">
              {{ article.category }}
            </div>
            <div class="mt-3 text-lg font-black leading-snug text-gb-darker">
              {{ article.title }}
            </div>
            <p class="mt-2 text-sm leading-7 text-[#29461f]">
              {{ article.excerpt }}
            </p>
          </button>
        </div>
      </section>
    </main>
  </div>
</template>

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
  <div class="min-h-screen bg-[#f6f1e7] text-[#1f2418]">
    <section class="overflow-hidden border-b border-[#d8cdb8] bg-[radial-gradient(circle_at_top_left,_rgba(232,122,65,0.18),_transparent_34%),linear-gradient(180deg,_#f7f2e8_0%,_#efe5d4_100%)]">
      <div class="mx-auto grid max-w-7xl gap-12 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1.2fr)_380px] lg:px-8 lg:py-16 xl:gap-16 xl:py-20">
        <div>
          <div class="inline-flex rounded-full border border-[#bfa37a] bg-[#fff8ef] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-[#8a5127]">
            职业方向导航
          </div>
          <h1 class="mt-5 max-w-4xl text-4xl font-black leading-tight text-[#1d2216] sm:text-5xl lg:text-[64px] lg:leading-[1.04]">
            不是先刷内容，
            <br />
            而是先判断你现在该走哪条路。
          </h1>
          <p class="mt-6 max-w-3xl text-base leading-8 text-[#534a3c] sm:text-lg lg:text-[19px] lg:leading-9">
            这里不讲空话，也不让你在一堆相似卡片里自己猜。先选你现在的状态，再给你更合适的方向、文章和试玩入口。
          </p>

          <div class="mt-9 flex flex-wrap gap-3 lg:gap-4">
            <button
              class="rounded-full bg-[#1f2418] px-6 py-3 text-sm font-semibold text-[#f8f3ea] transition hover:bg-[#11150d] lg:px-7 lg:py-3.5"
              @click="emit('openArticle', featuredArticle.id)"
            >
              从推荐文章开始
            </button>
            <button
              class="rounded-full border border-[#1f2418] px-6 py-3 text-sm font-semibold text-[#1f2418] transition hover:bg-[#1f2418] hover:text-[#f8f3ea] lg:px-7 lg:py-3.5"
              @click="emit('enterDemo')"
            >
              直接试玩职业 Demo
            </button>
          </div>

          <div class="mt-10 flex max-w-4xl flex-wrap gap-3 lg:mt-12 lg:gap-4">
            <span
              v-for="intent in activePersona.searchIntents"
              :key="intent"
              class="rounded-full border border-[#d2c0a3] bg-[#fff9f1] px-4 py-2 text-sm text-[#6a5a44] lg:px-5 lg:py-2.5"
            >
              {{ intent }}
            </span>
          </div>
        </div>

        <div class="rounded-[30px] border border-[#d6c19b] bg-[#fffaf2] p-6 shadow-[0_24px_60px_rgba(52,37,18,0.08)] sm:p-8 lg:self-center">
          <div class="text-sm font-semibold uppercase tracking-[0.18em] text-[#9d6334]">
            先选你是谁
          </div>
          <div class="mt-5 space-y-3">
            <button
              v-for="persona in personas"
              :key="persona.key"
              class="w-full rounded-[22px] border px-5 py-5 text-left transition lg:px-6 lg:py-6"
              :class="
                persona.key === selectedPersona
                  ? 'border-[#1f2418] bg-[#1f2418] text-[#f6f1e7] shadow-[0_14px_28px_rgba(25,29,19,0.18)]'
                  : 'border-[#dbc8a9] bg-[#fff6ea] text-[#1f2418] hover:border-[#9d6334] hover:bg-[#fffaf2]'
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

    <main class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 xl:py-16">
      <section class="grid gap-6 xl:grid-cols-[340px_minmax(0,1fr)] xl:gap-8">
        <div class="rounded-[28px] bg-[#20261a] p-7 text-[#f3eddc] shadow-[0_18px_40px_rgba(16,16,10,0.18)] sm:p-8 xl:sticky xl:top-6 xl:h-fit">
          <div class="text-xs uppercase tracking-[0.24em] text-[#efc38b]">
            当前建议
          </div>
          <h2 class="mt-4 text-3xl font-black leading-tight">
            {{ activePersona.promise }}
          </h2>
          <div class="mt-8 space-y-4">
            <div
              v-for="(step, index) in activePersona.steps"
              :key="step"
              class="flex items-start gap-4 rounded-[20px] border border-[#49503f] bg-[#2a3123] px-4 py-4"
            >
              <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#efc38b] text-sm font-black text-[#20261a]">
                {{ index + 1 }}
              </div>
              <p class="pt-1 text-sm leading-7 text-[#f3eddc]">
                {{ step }}
              </p>
            </div>
          </div>
        </div>

        <div class="rounded-[28px] border border-[#ddd0b7] bg-[#fffaf3] p-5 shadow-[0_20px_45px_rgba(48,36,20,0.06)] sm:p-8 xl:p-9">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between xl:gap-8">
            <div>
              <div class="text-xs uppercase tracking-[0.22em] text-[#9d6334]">
                职业方向
              </div>
              <h2 class="mt-2 max-w-[12ch] text-[30px] font-black leading-[1.15] text-[#1f2418] sm:max-w-none sm:text-2xl xl:max-w-none xl:text-[34px] xl:leading-[1.1]">
                先看这 3 个方向入口
              </h2>
              <p class="mt-3 max-w-2xl text-sm leading-7 text-[#61533f] xl:text-[15px]">
                基于你当前状态筛出来的优先选项，先点进去看差异，再决定往哪条路投入时间。
              </p>
            </div>
            <button
              class="self-start rounded-full border border-[#1f2418] px-4 py-2 text-sm font-semibold text-[#1f2418] transition hover:bg-[#1f2418] hover:text-[#fffaf3] sm:self-auto xl:px-5 xl:py-2.5"
              @click="emit('enterDemo')"
            >
              先去试玩
            </button>
          </div>

          <div class="mt-6 grid gap-4 xl:mt-8 xl:grid-cols-3">
            <button
              v-for="(direction, index) in activePersona.directions"
              :key="direction.title"
              class="grid w-full gap-3 rounded-[24px] border border-[#ded0b2] bg-[#fff4e6] px-5 py-5 text-left transition hover:border-[#9d6334] hover:bg-[#fff9f2] sm:grid-cols-[72px_1fr_auto] sm:gap-4 xl:h-full xl:grid-cols-1 xl:grid-rows-[auto_auto_1fr_auto] xl:gap-5 xl:px-6 xl:py-6"
              @click="emit('openArticle', direction.articleId)"
            >
              <div class="text-[36px] font-black leading-none text-[#b77c42] sm:text-[40px] xl:text-[44px]">
                0{{ index + 1 }}
              </div>
              <div>
                <div class="text-[28px] font-black leading-none text-[#1f2418] sm:text-xl sm:leading-snug xl:text-[26px]">
                  {{ direction.title }}
                </div>
                <p class="mt-3 text-sm leading-7 text-[#61533f]">
                  {{ direction.summary }}
                </p>
              </div>
              <div class="self-center pt-1 text-sm font-semibold text-[#8a5127] xl:self-end">
                看这条路 →
              </div>
            </button>
          </div>
        </div>
      </section>

      <section class="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] xl:gap-8">
        <button
          class="overflow-hidden rounded-[30px] bg-[linear-gradient(135deg,_#8a5127_0%,_#d68d4a_100%)] p-0 text-left text-[#fff8ee] shadow-[0_22px_50px_rgba(138,81,39,0.22)] transition hover:translate-y-[-2px] xl:min-h-[420px]"
          @click="emit('openArticle', featuredArticle.id)"
        >
          <div class="p-7 sm:p-8 xl:flex xl:h-full xl:flex-col xl:justify-between xl:p-10">
            <div>
            <div class="text-xs uppercase tracking-[0.22em] text-[#ffe2b9]">
              推荐先读
            </div>
            <h2 class="mt-4 max-w-2xl text-3xl font-black leading-tight xl:text-[42px] xl:leading-[1.08]">
              {{ featuredArticle.title }}
            </h2>
            <p class="mt-4 max-w-2xl text-sm leading-7 text-[#fff2df] sm:text-base xl:mt-5 xl:max-w-3xl xl:text-[17px] xl:leading-8">
              {{ featuredArticle.excerpt }}
            </p>
            </div>
            <div class="mt-8 flex flex-wrap items-center gap-3 text-sm text-[#fff2df]">
              <span class="rounded-full border border-[#ffd9ab]/60 px-3 py-1">
                {{ featuredArticle.category }}
              </span>
              <span>{{ featuredArticle.readTime }}</span>
            </div>
          </div>
          <div class="border-t border-white/20 bg-black/10 px-7 py-4 text-sm font-semibold sm:px-8">
            进入详情页阅读 →
          </div>
        </button>

        <div class="rounded-[30px] border border-[#ddd0b7] bg-[#fffaf3] p-6 shadow-[0_18px_40px_rgba(48,36,20,0.06)] sm:p-7 xl:p-8">
          <div class="text-xs uppercase tracking-[0.22em] text-[#9d6334]">
            学习文章
          </div>
          <div class="mt-5 space-y-3 xl:space-y-4">
            <button
              v-for="article in supportingArticles"
              :key="article.id"
              class="w-full rounded-[22px] border border-[#e4d8c3] bg-[#fff6ea] px-5 py-4 text-left transition hover:border-[#b77c42] hover:bg-[#fffaf3] xl:px-6 xl:py-5"
              @click="emit('openArticle', article.id)"
            >
              <div class="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.16em] text-[#8a5127]">
                <span>{{ article.category }}</span>
                <span>{{ article.readTime }}</span>
              </div>
              <div class="mt-3 text-lg font-black leading-snug text-[#1f2418]">
                {{ article.title }}
              </div>
              <p class="mt-2 text-sm leading-7 text-[#61533f]">
                {{ article.excerpt }}
              </p>
            </button>
          </div>
        </div>
      </section>

      <section class="mt-10 rounded-[32px] border border-[#d8cdb8] bg-[#fbf7ef] p-6 shadow-[0_16px_35px_rgba(48,36,20,0.05)] sm:p-8 xl:p-9">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div class="text-xs uppercase tracking-[0.22em] text-[#9d6334]">
              继续往下看
            </div>
            <h2 class="mt-2 text-2xl font-black text-[#1f2418]">
              如果你还没决定，先从这些高频问题开始
            </h2>
          </div>
          <button
            class="rounded-full bg-[#1f2418] px-5 py-3 text-sm font-semibold text-[#f8f3ea] transition hover:bg-[#11150d]"
            @click="emit('enterDemo')"
          >
            不想读文章，直接试玩
          </button>
        </div>

        <div class="mt-6 grid gap-4 md:grid-cols-3 xl:gap-5">
          <button
            v-for="article in fallbackArticles"
            :key="article.id"
            class="rounded-[24px] border border-[#e4d8c3] bg-white px-5 py-5 text-left transition hover:border-[#b77c42] hover:bg-[#fffaf3] xl:px-6 xl:py-6"
            @click="emit('openArticle', article.id)"
          >
            <div class="text-xs uppercase tracking-[0.18em] text-[#8a5127]">
              {{ article.category }}
            </div>
            <div class="mt-3 text-lg font-black leading-snug text-[#1f2418]">
              {{ article.title }}
            </div>
            <p class="mt-2 text-sm leading-7 text-[#61533f]">
              {{ article.excerpt }}
            </p>
          </button>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import AdSlot from './AdSlot.vue';
import { contentArticles } from '@/data/landingProject';

const props = defineProps<{
  articleId: string;
}>();

const emit = defineEmits<{
  back: [];
  openDemo: [];
  openArticle: [articleId: string];
}>();

const article = computed(
  () => contentArticles.find((item) => item.id === props.articleId) ?? contentArticles[0],
);

const relatedArticles = computed(() =>
  contentArticles
    .filter((item) => item.id !== article.value.id && item.category === article.value.category)
    .slice(0, 4),
);
</script>

<template>
  <div class="min-h-screen bg-[#07130b] text-[#e6efb6]">
    <header class="border-b border-[#29461f] bg-[#09150b]/95 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <button
          class="rounded-full border border-[#597942] px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#d5ff66] transition hover:border-[#8bac0f]"
          @click="emit('back')"
        >
          返回首页
        </button>
        <button class="pixel-btn !px-4 !py-2 text-xs" @click="emit('openDemo')">
          试玩 Demo
        </button>
      </div>
    </header>

    <main class="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div class="grid gap-8 lg:grid-cols-[1fr_320px]">
        <article class="rounded-[30px] border-4 border-[#355626] bg-[#102013] p-6 shadow-[12px_12px_0_rgba(0,0,0,0.18)] sm:p-8">
          <div class="flex flex-wrap items-center gap-3">
            <div class="rounded-full border border-[#597942] px-3 py-1 text-xs text-[#d5ff66]">
              {{ article.category }}
            </div>
            <div class="text-xs uppercase tracking-[0.2em] text-[#8bac0f]">
              {{ article.readTime }}
            </div>
          </div>

          <h1 class="mt-4 text-3xl font-bold leading-tight text-[#f7ffd4] sm:text-4xl">
            {{ article.title }}
          </h1>
          <p class="mt-4 text-sm leading-7 text-[#bed08e] sm:text-base">
            {{ article.seoTitle }}
          </p>

          <div class="mt-8 space-y-6 text-sm leading-8 text-[#e3edbf] sm:text-base">
            <template v-for="(paragraph, index) in article.body" :key="`${article.id}-${index}`">
              <p>{{ paragraph }}</p>
              <AdSlot
                v-if="index === 1"
                :slot="`${article.id}-inline-${index}`"
                title="正文中插广告位"
                description="这里只保留一个中插位，避免过多占位影响阅读。"
                variant="article"
              />
            </template>
          </div>
        </article>

        <aside class="space-y-6">
          <div class="rounded-[28px] border-4 border-[#4f6f33] bg-[#172617] p-6 shadow-[12px_12px_0_rgba(0,0,0,0.2)]">
            <div class="text-[11px] uppercase tracking-[0.24em] text-[#d5ff66]">这篇文章适合谁</div>
            <ul class="mt-4 space-y-3 text-sm leading-7 text-[#dce8ab]">
              <li class="rounded-[16px] border border-[#355626] bg-[#102013] px-4 py-3">
                正在选方向，还没建立职业地图的人
              </li>
              <li class="rounded-[16px] border border-[#355626] bg-[#102013] px-4 py-3">
                想把学习顺序和项目输出理清楚的人
              </li>
              <li class="rounded-[16px] border border-[#355626] bg-[#102013] px-4 py-3">
                想继续看相关专题内容的人
              </li>
            </ul>
          </div>

          <div class="rounded-[28px] border-4 border-[#355626] bg-[#102013] p-6 shadow-[12px_12px_0_rgba(0,0,0,0.18)]">
            <div class="text-[11px] uppercase tracking-[0.24em] text-[#8bac0f]">相关推荐</div>
            <div class="mt-4 space-y-3">
              <button
                v-for="item in relatedArticles"
                :key="item.id"
                class="block w-full rounded-[18px] border-2 border-[#2f4e20] bg-[#0b160d] px-4 py-3 text-left transition hover:border-[#8bac0f]"
                @click="emit('openArticle', item.id)"
              >
                <div class="text-sm font-bold text-[#f7ffd4]">{{ item.title }}</div>
                <div class="mt-1 text-xs text-[#8fa56a]">{{ item.category }} · {{ item.readTime }}</div>
              </button>
            </div>
          </div>

          <AdSlot
            slot="article-sidebar"
            title="侧栏广告位"
            description="保留桌面侧栏一个广告位，正文阅读区不再频繁插入占位。"
            variant="infeed"
            class="hidden lg:block"
          />
        </aside>
      </div>
    </main>
  </div>
</template>

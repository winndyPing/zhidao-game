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
  <div class="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(155,188,15,0.1),_transparent_32%),linear-gradient(180deg,_#0f380f_0%,_#0b2b0b_100%)] text-[#e6efb6]">
    <header class="border-b-4 border-[#29461f] bg-[#09150b]/95">
      <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <button
          class="border-4 border-[#597942] bg-[#102013] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#d5ff66] shadow-[4px_4px_0_#0f380f] transition hover:border-[#8bac0f]"
          @click="emit('back')"
        >
          返回首页
        </button>
        <button class="pixel-btn !px-4 !py-2 text-xs" @click="emit('openDemo')">
          进入体验
        </button>
      </div>
    </header>

    <main class="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div class="grid gap-8 lg:grid-cols-[1fr_320px]">
        <article class="border-8 border-[#23321c] bg-[#9bbc0f] p-6 shadow-[10px_10px_0_#0f380f] sm:p-8">
          <div class="flex flex-wrap items-center gap-3">
            <div class="border-2 border-gb-dark bg-[#306230] px-3 py-1 text-xs font-bold text-[#d5ff66]">
              {{ article.category }}
            </div>
            <div class="text-xs font-bold uppercase tracking-[0.2em] text-[#306230]">
              {{ article.readTime }}
            </div>
          </div>

          <h1 class="mt-4 text-3xl font-bold leading-tight text-gb-darker sm:text-4xl">
            {{ article.title }}
          </h1>
          <p class="mt-4 border-l-4 border-[#306230] pl-4 text-sm leading-7 text-[#29461f] sm:text-base">
            {{ article.seoTitle }}
          </p>

          <div class="mt-8 space-y-6 border-4 border-[#284c17] bg-[#1b3a14] p-5 text-sm leading-8 text-[#e3edbf] sm:text-base">
            <template v-for="(paragraph, index) in article.body" :key="`${article.id}-${index}`">
              <p>{{ paragraph }}</p>
              <AdSlot
                v-if="index === 1"
                slot="article-inline-primary"
                title="正文中插广告位"
                description="这里只保留一个中插位，避免过多占位影响阅读。"
                variant="article"
              />
            </template>
          </div>
        </article>

        <aside class="space-y-6">
          <div class="border-4 border-[#4f6f33] bg-[#172617] p-6 shadow-[8px_8px_0_#0f380f]">
            <div class="text-[11px] font-bold uppercase tracking-[0.24em] text-[#d5ff66]">这篇文章适合谁</div>
            <ul class="mt-4 space-y-3 text-sm leading-7 text-[#dce8ab]">
              <li class="border-2 border-[#355626] bg-[#102013] px-4 py-3">
                正在选方向，还没建立职业地图的人
              </li>
              <li class="border-2 border-[#355626] bg-[#102013] px-4 py-3">
                想把学习顺序和项目输出理清楚的人
              </li>
              <li class="border-2 border-[#355626] bg-[#102013] px-4 py-3">
                想继续看相关专题内容的人
              </li>
            </ul>
          </div>

          <div class="border-4 border-[#355626] bg-[#102013] p-6 shadow-[8px_8px_0_#0f380f]">
            <div class="text-[11px] font-bold uppercase tracking-[0.24em] text-[#8bac0f]">相关推荐</div>
            <div class="mt-4 space-y-3">
              <button
                v-for="item in relatedArticles"
                :key="item.id"
                class="block w-full border-2 border-[#2f4e20] bg-[#0b160d] px-4 py-3 text-left transition hover:border-[#8bac0f] hover:bg-[#142314]"
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

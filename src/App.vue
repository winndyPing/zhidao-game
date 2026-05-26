<script setup lang="ts">
import { ref } from 'vue';
import ArticleDetailPage from './components/ArticleDetailPage.vue';
import GameContainer from './components/GameContainer.vue';
import MonetizationLanding from './components/MonetizationLanding.vue';

const currentView = ref<'landing' | 'demo' | 'article'>('landing');
const currentArticleId = ref('');

function enterDemo() {
  currentView.value = 'demo';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToLanding() {
  currentView.value = 'landing';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openArticle(articleId: string) {
  currentArticleId.value = articleId;
  currentView.value = 'article';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<template>
  <div>
    <template v-if="currentView === 'demo'">
      <GameContainer @back="backToLanding" />
    </template>

    <ArticleDetailPage
      v-else-if="currentView === 'article'"
      :article-id="currentArticleId"
      @back="backToLanding"
      @open-demo="enterDemo"
      @open-article="openArticle"
    />

    <MonetizationLanding
      v-else
      @enter-demo="enterDemo"
      @open-article="openArticle"
    />
  </div>
</template>

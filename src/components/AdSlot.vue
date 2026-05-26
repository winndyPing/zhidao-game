<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type AdVariant = 'banner' | 'infeed' | 'article' | 'rewarded';

interface Props {
  slot: string;
  title: string;
  description: string;
  variant?: AdVariant;
}

const { slot, title, description, variant = 'banner' } = defineProps<Props>();

const adClient = import.meta.env.VITE_ADSENSE_CLIENT as string | undefined;
const isLive = computed(() => Boolean(adClient));
const root = ref<HTMLElement | null>(null);
const statusText = computed(() => (isLive.value ? '广告位已启用' : '广告位占位中'));

function ensureAdsenseScript() {
  if (!adClient || typeof document === 'undefined') return;
  if (document.querySelector('script[data-adsense-loader="true"]')) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClient}`;
  script.crossOrigin = 'anonymous';
  script.dataset.adsenseLoader = 'true';
  document.head.appendChild(script);
}

onMounted(() => {
  ensureAdsenseScript();

  if (!isLive.value || !root.value) {
    return;
  }

  const ins = root.value.querySelector('ins');
  if (!ins) {
    return;
  }

  window.adsbygoogle = window.adsbygoogle || [];
  window.adsbygoogle.push({});
});
</script>

<template>
  <div
    ref="root"
    class="rounded-[24px] border-2 border-dashed border-[#597942] bg-[#0c1a0c]/80 p-4 text-[#dce8ab]"
  >
    <div class="flex items-center justify-between gap-3">
      <div>
        <div class="text-[11px] uppercase tracking-[0.25em] text-[#9bbc0f]">
          {{ variant }} ad slot
        </div>
        <div class="mt-2 text-lg font-bold text-[#f7ffd4]">
          {{ title }}
        </div>
      </div>
      <div class="rounded-full border border-[#6d904c] px-3 py-1 text-[11px] text-[#d5ff66]">
        {{ statusText }}
      </div>
    </div>

    <p class="mt-3 text-sm leading-6 text-[#bed08e]">
      {{ description }}
    </p>

    <div v-if="isLive" class="mt-4 overflow-hidden rounded-[18px] bg-[#132013] p-3">
      <ins
        class="adsbygoogle block min-h-[96px] w-full"
        style="display:block"
        data-ad-format="auto"
        data-full-width-responsive="true"
        :data-ad-client="adClient"
        :data-ad-slot="slot"
      />
    </div>

    <div
      v-else
      class="mt-4 flex min-h-[96px] items-center justify-center rounded-[18px] border-2 border-[#355626] bg-[linear-gradient(135deg,_rgba(155,188,15,0.12),_rgba(48,98,48,0.08))] px-4 text-center text-sm leading-6 text-[#dce8ab]"
    >
      后续接入广告平台后，这里会直接替换成真实广告代码。
    </div>
  </div>
</template>

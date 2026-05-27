<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue';
import { resolveAdRuntime } from '@/services/adProvider';

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

const root = ref<HTMLElement | null>(null);
const customMountPoint = ref<HTMLElement | null>(null);
const runtime = computed(() => resolveAdRuntime(slot));
const isLive = computed(() => runtime.value.isLive);
const statusText = computed(() => runtime.value.statusText);
const providerLabel = computed(() => runtime.value.providerLabel);

function ensureScript(scriptSrc: string) {
  if (typeof document === 'undefined') return;
  if (document.querySelector('script[data-adsense-loader="true"]')) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = scriptSrc;
  script.crossOrigin = 'anonymous';
  script.dataset.adsenseLoader = 'true';
  document.head.appendChild(script);
}

function mountCustomHtml(html: string) {
  if (!customMountPoint.value) return;

  customMountPoint.value.innerHTML = html;

  const scripts = Array.from(customMountPoint.value.querySelectorAll('script'));
  scripts.forEach((oldScript) => {
    const newScript = document.createElement('script');

    Array.from(oldScript.attributes).forEach((attr) => {
      newScript.setAttribute(attr.name, attr.value);
    });

    if (oldScript.src) {
      newScript.src = oldScript.src;
      newScript.async = oldScript.async;
    } else {
      newScript.textContent = oldScript.textContent;
    }

    oldScript.parentNode?.replaceChild(newScript, oldScript);
  });
}

onMounted(() => {
  if (runtime.value.renderMode === 'adsense' && runtime.value.scriptSrc) {
    ensureScript(runtime.value.scriptSrc);
  }

  if (!isLive.value || !root.value) {
    return;
  }

  if (runtime.value.renderMode === 'adsense') {
    const ins = root.value.querySelector('ins');
    if (!ins) {
      return;
    }

    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push({});
    return;
  }

  if (runtime.value.renderMode === 'custom-html' && runtime.value.customHtml) {
    nextTick(() => {
      mountCustomHtml(runtime.value.customHtml!);
    });
  }
});
</script>

<template>
  <div
    ref="root"
    class="border-4 border-dashed border-[#597942] bg-[#0c1a0c]/90 p-4 text-[#dce8ab] shadow-[6px_6px_0_#0f380f]"
  >
    <div class="flex items-center justify-between gap-3">
      <div>
        <div class="text-[11px] font-bold uppercase tracking-[0.25em] text-[#9bbc0f]">
          {{ variant }} ad slot
        </div>
        <div class="mt-2 text-lg font-bold text-[#f7ffd4]">
          {{ title }}
        </div>
      </div>
      <div class="border-2 border-[#6d904c] bg-[#132013] px-3 py-1 text-[11px] font-bold text-[#d5ff66]">
        {{ statusText }}
      </div>
    </div>

    <p class="mt-3 text-sm leading-6 text-[#bed08e]">
      {{ description }}
    </p>

    <div class="mt-3 text-xs uppercase tracking-[0.18em] text-[#8bac0f]">
      {{ providerLabel }}
    </div>

    <p class="mt-2 text-xs leading-6 text-[#9eb574]">
      {{ runtime.descriptionText }}
    </p>

    <div
      v-if="runtime.renderMode === 'adsense'"
      class="mt-4 overflow-hidden border-2 border-[#355626] bg-[#132013] p-3"
    >
      <ins
        class="adsbygoogle block min-h-[96px] w-full"
        style="display:block"
        data-ad-format="auto"
        data-full-width-responsive="true"
        :data-ad-client="runtime.adsenseClient"
        :data-ad-slot="slot"
      />
    </div>

    <div
      v-else-if="runtime.renderMode === 'custom-html'"
      ref="customMountPoint"
      class="mt-4 overflow-hidden border-2 border-[#355626] bg-[#132013] p-3"
      :style="{ minHeight: `${runtime.minHeight}px` }"
    />

    <div
      v-else
      class="mt-4 flex items-center justify-center border-2 border-[#355626] bg-[linear-gradient(180deg,_rgba(155,188,15,0.18),_rgba(48,98,48,0.12))] px-4 text-center text-sm leading-6 text-[#dce8ab]"
      :style="{ minHeight: `${runtime.minHeight}px` }"
    >
      后续接入广告平台后，这里会直接替换成真实广告代码。
    </div>
  </div>
</template>

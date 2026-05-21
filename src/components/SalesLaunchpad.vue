<script setup lang="ts">
import { computed, ref } from 'vue';
import { careerDirections } from '@data/careerDirections';
import { learningResources } from '@data/learningResources';
import {
  copyTemplates,
  deliveryChecklist,
  first100Plan,
  offerPackages,
  outreachTargets,
} from '@/data/salesKit';

const emit = defineEmits<{
  enterDemo: [];
}>();

const copyState = ref('');

const totalCareerDirections = computed(() => careerDirections.length);
const totalSkills = computed(() =>
  careerDirections.reduce((sum, career) => sum + career.skills.length, 0),
);
const totalResourceGroups = computed(() =>
  Object.values(learningResources).reduce((sum, resources) => sum + resources.length, 0),
);

const credibilityStats = computed(() => [
  {
    label: '职业方向',
    value: `${totalCareerDirections.value}+`,
    note: '可直接包装成客户自己的方向库',
  },
  {
    label: '技能节点',
    value: `${totalSkills.value}+`,
    note: '比单纯海报页更像完整产品',
  },
  {
    label: '学习资源组',
    value: `${totalResourceGroups.value}+`,
    note: '方便放课程链接和报名引导',
  },
]);

async function copyTemplate(id: string, content: string) {
  try {
    await navigator.clipboard.writeText(content);
    copyState.value = id;
    window.setTimeout(() => {
      if (copyState.value === id) {
        copyState.value = '';
      }
    }, 1800);
  } catch (error) {
    console.error(error);
    copyState.value = `error:${id}`;
  }
}
</script>

<template>
  <div class="min-h-screen bg-[#07130b] text-[#e8f0b7]">
    <section class="relative overflow-hidden border-b-4 border-[#29461f] bg-[radial-gradient(circle_at_top,_rgba(155,188,15,0.22),_transparent_48%),linear-gradient(180deg,_#0d1a10_0%,_#07130b_100%)]">
      <div class="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div class="flex items-center justify-between gap-4">
          <div>
            <div class="inline-flex items-center gap-2 border-2 border-[#8bac0f] bg-[#132013] px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-[#d8e87b]">
              First 100 RMB Kit
            </div>
            <h1 class="mt-4 max-w-4xl text-3xl font-bold leading-tight text-[#f7ffd4] sm:text-5xl">
              把这个项目包装成一份
              <span class="text-[#d5ff66]">今天就能卖</span>
              的职业闯关互动页
            </h1>
            <p class="mt-4 max-w-3xl text-sm leading-7 text-[#bed08e] sm:text-base">
              现有代码已经不是空壳。它有职业方向、技能节点、题库、学习资源和闯关逻辑。
              我把它重新包装成能对外演示、能报价、能复制文案去接单的产品壳，目标先帮你更快拿到第一笔 100 元。
            </p>
          </div>
          <div class="hidden shrink-0 rounded-[24px] border-4 border-[#2f4e20] bg-[#0e1e10] p-4 text-right shadow-[12px_12px_0_rgba(0,0,0,0.24)] lg:block">
            <div class="text-xs uppercase tracking-[0.25em] text-[#9bbc0f]">Suggested first sale</div>
            <div class="mt-2 text-4xl font-bold text-[#f7ffd4]">¥99</div>
            <div class="mt-2 max-w-[220px] text-xs leading-6 text-[#bed08e]">
              先卖换皮验证版，当天交付，降低沟通和交付风险。
            </div>
          </div>
        </div>

        <div class="grid gap-4 md:grid-cols-3">
          <div
            v-for="stat in credibilityStats"
            :key="stat.label"
            class="rounded-[22px] border-4 border-[#355626] bg-[#112014]/90 p-5 shadow-[10px_10px_0_rgba(0,0,0,0.18)]"
          >
            <div class="text-xs uppercase tracking-[0.22em] text-[#8bac0f]">{{ stat.label }}</div>
            <div class="mt-3 text-4xl font-bold text-[#f7ffd4]">{{ stat.value }}</div>
            <div class="mt-2 text-sm leading-6 text-[#bed08e]">{{ stat.note }}</div>
          </div>
        </div>

        <div class="flex flex-col gap-3 sm:flex-row">
          <button class="pixel-btn !m-0 !px-6 !py-3 text-sm sm:text-base" @click="emit('enterDemo')">
            进入 Demo 体验
          </button>
          <a
            href="#offers"
            class="inline-flex items-center justify-center rounded-[16px] border-4 border-[#8bac0f] bg-transparent px-6 py-3 text-sm font-bold text-[#e8f0b7] transition hover:bg-[#162917] sm:text-base"
          >
            看报价方案
          </a>
          <a
            href="#copies"
            class="inline-flex items-center justify-center rounded-[16px] border-4 border-[#355626] bg-[#102013] px-6 py-3 text-sm font-bold text-[#e8f0b7] transition hover:border-[#8bac0f] sm:text-base"
          >
            直接复制文案
          </a>
        </div>
      </div>
    </section>

    <section class="mx-auto grid w-full max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-10">
      <div class="rounded-[28px] border-4 border-[#355626] bg-[#102013] p-6 shadow-[12px_12px_0_rgba(0,0,0,0.2)]">
        <div class="text-xs uppercase tracking-[0.28em] text-[#8bac0f]">你卖的不是源码</div>
        <h2 class="mt-3 text-2xl font-bold text-[#f7ffd4]">你卖的是“职业内容互动化”这个结果</h2>
        <div class="mt-4 space-y-4 text-sm leading-7 text-[#bed08e]">
          <p>把培训机构、社群、校园活动原本枯燥的职业介绍页，改成一个可以点、可以看路线、可以闯关的互动页，客户更容易看见差异。</p>
          <p>对刚开始接单最友好的方式，不是承诺做大系统，而是卖一个可以当天交付的演示版本。先成交，再升级。</p>
        </div>
      </div>

      <div class="rounded-[28px] border-4 border-[#4f6f33] bg-[#172617] p-6 shadow-[12px_12px_0_rgba(0,0,0,0.2)]">
        <div class="text-xs uppercase tracking-[0.28em] text-[#d5ff66]">First cash plan</div>
        <ul class="mt-4 space-y-3">
          <li
            v-for="step in first100Plan"
            :key="step"
            class="rounded-[18px] border-2 border-[#355626] bg-[#102013] px-4 py-3 text-sm leading-6 text-[#e8f0b7]"
          >
            {{ step }}
          </li>
        </ul>
      </div>
    </section>

    <section class="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
      <div class="mb-5 text-xs uppercase tracking-[0.28em] text-[#8bac0f]">优先找这些人</div>
      <div class="grid gap-5 lg:grid-cols-3">
        <article
          v-for="target in outreachTargets"
          :key="target.title"
          class="rounded-[26px] border-4 border-[#355626] bg-[#0f1d10] p-6 shadow-[10px_10px_0_rgba(0,0,0,0.18)]"
        >
          <h3 class="text-xl font-bold text-[#f7ffd4]">{{ target.title }}</h3>
          <p class="mt-3 text-sm leading-7 text-[#bed08e]">
            <span class="font-bold text-[#d5ff66]">痛点：</span>{{ target.painPoint }}
          </p>
          <p class="mt-3 text-sm leading-7 text-[#bed08e]">
            <span class="font-bold text-[#d5ff66]">你怎么卖：</span>{{ target.pitch }}
          </p>
        </article>
      </div>
    </section>

    <section id="offers" class="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div class="mb-5 text-xs uppercase tracking-[0.28em] text-[#8bac0f]">报价方案</div>
      <div class="grid gap-6 lg:grid-cols-3">
        <article
          v-for="offer in offerPackages"
          :key="offer.name"
          class="flex h-full flex-col rounded-[28px] border-4 border-[#355626] bg-[#102013] p-6 shadow-[12px_12px_0_rgba(0,0,0,0.2)]"
        >
          <div class="flex items-start justify-between gap-3">
            <div>
              <div class="text-xs uppercase tracking-[0.2em] text-[#8bac0f]">{{ offer.badge }}</div>
              <h3 class="mt-3 text-2xl font-bold text-[#f7ffd4]">{{ offer.name }}</h3>
            </div>
            <div class="text-3xl font-bold text-[#d5ff66]">{{ offer.price }}</div>
          </div>

          <p class="mt-4 text-sm leading-7 text-[#bed08e]">{{ offer.summary }}</p>

          <div class="mt-5 flex-1 space-y-3">
            <div
              v-for="item in offer.deliverables"
              :key="item"
              class="rounded-[16px] border-2 border-[#2f4e20] bg-[#0d1a0f] px-4 py-3 text-sm leading-6 text-[#e8f0b7]"
            >
              {{ item }}
            </div>
          </div>

          <div class="mt-5 space-y-2 text-sm leading-6 text-[#bed08e]">
            <div><span class="font-bold text-[#d5ff66]">适合：</span>{{ offer.bestFor }}</div>
            <div><span class="font-bold text-[#d5ff66]">交付周期：</span>{{ offer.timeline }}</div>
          </div>
        </article>
      </div>
    </section>

    <section class="mx-auto grid w-full max-w-7xl gap-6 px-4 py-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
      <div class="rounded-[28px] border-4 border-[#355626] bg-[#102013] p-6 shadow-[12px_12px_0_rgba(0,0,0,0.2)]">
        <div class="text-xs uppercase tracking-[0.28em] text-[#8bac0f]">交付前只要这些</div>
        <h2 class="mt-3 text-2xl font-bold text-[#f7ffd4]">把需求压到最小，成交率会更高</h2>
        <ul class="mt-5 space-y-3">
          <li
            v-for="item in deliveryChecklist"
            :key="item"
            class="rounded-[16px] border-2 border-[#2f4e20] bg-[#0d1a0f] px-4 py-3 text-sm leading-6 text-[#e8f0b7]"
          >
            {{ item }}
          </li>
        </ul>
      </div>

      <div class="rounded-[28px] border-4 border-[#4f6f33] bg-[#172617] p-6 shadow-[12px_12px_0_rgba(0,0,0,0.2)]">
        <div class="text-xs uppercase tracking-[0.28em] text-[#d5ff66]">成交提醒</div>
        <h2 class="mt-3 text-2xl font-bold text-[#f7ffd4]">第一笔钱的重点不是利润最大，而是速度最快</h2>
        <div class="mt-4 space-y-4 text-sm leading-7 text-[#bed08e]">
          <p>你现在最适合卖的是标准化换皮服务，而不是无限定制。报价简单、范围明确，客户才更容易答应。</p>
          <p>如果对方犹豫，就把风险降到最低：先做 99 元版，看效果再升级。这个逻辑比直接谈几百上千更容易开始。</p>
          <p>等你有第一单案例，再把这页继续升级成正式作品集，后面就可以卖更高价。</p>
        </div>
      </div>
    </section>

    <section id="copies" class="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div class="mb-5 text-xs uppercase tracking-[0.28em] text-[#8bac0f]">可复制文案</div>
      <div class="grid gap-6 lg:grid-cols-3">
        <article
          v-for="template in copyTemplates"
          :key="template.id"
          class="flex flex-col rounded-[28px] border-4 border-[#355626] bg-[#102013] p-6 shadow-[12px_12px_0_rgba(0,0,0,0.2)]"
        >
          <div class="flex items-start justify-between gap-3">
            <div>
              <h3 class="text-xl font-bold text-[#f7ffd4]">{{ template.title }}</h3>
              <p class="mt-2 text-sm leading-6 text-[#bed08e]">{{ template.description }}</p>
            </div>
            <button
              class="rounded-[14px] border-2 border-[#8bac0f] px-3 py-2 text-xs font-bold text-[#d5ff66] transition hover:bg-[#1a3018]"
              @click="copyTemplate(template.id, template.content)"
            >
              {{ copyState === template.id ? '已复制' : copyState === `error:${template.id}` ? '复制失败' : '复制' }}
            </button>
          </div>

          <pre class="mt-5 flex-1 whitespace-pre-wrap rounded-[20px] border-2 border-[#2f4e20] bg-[#0b150d] p-4 text-sm leading-7 text-[#dbe7ac]">{{ template.content }}</pre>
        </article>
      </div>
    </section>
  </div>
</template>

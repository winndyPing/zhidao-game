<script setup lang="ts">
import { computed, ref } from 'vue';
import { useGameStore } from '@/stores/gameStore';
import { generateVerificationCode, validatePhone } from '@/utils/userUtils';

const store = useGameStore();

const phone = ref('');
const code = ref('');
const generatedCode = ref('');
const countdown = ref(0);
const isLoading = ref(false);
const errorMessage = ref('');

const canSendCode = computed(() => validatePhone(phone.value) && countdown.value === 0);
const canLogin = computed(() => validatePhone(phone.value) && code.value.length === 6);
const countdownText = computed(() => (countdown.value > 0 ? `${countdown.value}s` : '获取验证码'));

function sendCode() {
  if (!canSendCode.value) return;

  generatedCode.value = generateVerificationCode();
  console.log('验证码:', generatedCode.value);

  countdown.value = 60;
  const timer = setInterval(() => {
    countdown.value--;
    if (countdown.value <= 0) {
      clearInterval(timer);
    }
  }, 1000);

  alert(`验证码: ${generatedCode.value}`);
}

function onLogin() {
  errorMessage.value = '';

  if (!validatePhone(phone.value)) {
    errorMessage.value = '请输入正确的手机号';
    return;
  }

  if (code.value.length !== 6) {
    errorMessage.value = '请输入 6 位验证码';
    return;
  }

  if (generatedCode.value && code.value !== generatedCode.value) {
    // 演示模式下不强校验验证码，方便快速体验。
  }

  isLoading.value = true;
  setTimeout(() => {
    store.login(phone.value);
    isLoading.value = false;
  }, 500);
}

function onPhoneInput(event: Event) {
  const input = event.target as HTMLInputElement;
  phone.value = input.value.replace(/\D/g, '').slice(0, 11);
}

function onCodeInput(event: Event) {
  const input = event.target as HTMLInputElement;
  code.value = input.value.replace(/\D/g, '').slice(0, 6);
}
</script>

<template>
  <div class="mx-auto flex min-h-[calc(100dvh-16px)] w-[calc(100vw-16px)] max-w-[430px] items-center justify-center overflow-x-hidden sm:min-h-[calc(100dvh-32px)] sm:w-full">
    <div class="grid w-full gap-6">
      <div class="bg-gb-bg border-8 border-gb-dark rounded-gameboy shadow-pixel-lg p-6">
        <div class="text-center mb-6">
          <div class="text-6xl mb-2">🎮</div>
          <h1 class="text-gb-darker font-bold text-2xl">职道 Demo</h1>
          <p class="text-gb-dark text-sm mt-1">职业迷宫与装备工坊</p>
        </div>

        <div class="space-y-4">
          <div>
            <label class="block text-gb-darker text-sm font-bold mb-2">手机号</label>
            <input
              type="tel"
              :value="phone"
              @input="onPhoneInput"
              placeholder="请输入手机号"
              class="w-full bg-gb-light border-4 border-gb-darker px-3 py-2 text-gb-darker placeholder-gb-dark/50 focus:outline-none"
              maxlength="11"
            />
          </div>

          <div>
            <label class="block text-gb-darker text-sm font-bold mb-2">验证码</label>
            <div class="flex flex-col gap-2 sm:flex-row">
              <input
                type="tel"
                :value="code"
                @input="onCodeInput"
                placeholder="请输入验证码"
                class="min-w-0 flex-1 bg-gb-light border-4 border-gb-darker px-3 py-2 text-gb-darker placeholder-gb-dark/50 focus:outline-none"
                maxlength="6"
              />
              <button
                class="pixel-btn w-full whitespace-nowrap text-xs sm:w-auto"
                :disabled="!canSendCode"
                :class="{ 'opacity-50 cursor-not-allowed': !canSendCode }"
                @click="sendCode"
              >
                {{ countdownText }}
              </button>
            </div>
          </div>

          <div v-if="errorMessage" class="text-red-600 text-sm text-center">
            {{ errorMessage }}
          </div>

          <button
            class="pixel-btn w-full mt-4"
            :disabled="!canLogin || isLoading"
            :class="{ 'opacity-50 cursor-not-allowed': !canLogin || isLoading }"
            @click="onLogin"
          >
            <span v-if="isLoading">登录中...</span>
            <span v-else>进入 Demo</span>
          </button>
        </div>

        <div class="mt-6 text-center text-xs text-gb-dark">
          <p>演示模式：任意手机号 + 6 位数字即可登录</p>
          <p class="mt-1">登录后会自动生成昵称和头像</p>
        </div>
      </div>

      <div class="bg-gb-bg/95 border-8 border-gb-dark rounded-gameboy shadow-pixel-lg p-6">
        <div class="flex items-start gap-3 text-gb-darker">
          <span class="text-3xl">🧭</span>
          <div>
            <div class="text-xs uppercase tracking-[0.18em] text-gb-dark">试玩说明</div>
            <h2 class="text-2xl font-bold mt-1">这不是重度游戏，而是职业内容互动化 Demo</h2>
          </div>
        </div>

        <div class="mt-6 grid gap-4">
          <div class="bg-gb-light border-4 border-gb-darker p-4">
            <div class="text-2xl mb-2">1</div>
            <div class="font-bold text-gb-darker">选择方向</div>
            <p class="mt-2 text-sm leading-6 text-gb-dark">
              从职业方向里选一条更适合自己的路线，建立起步认知。
            </p>
          </div>
          <div class="bg-gb-light border-4 border-gb-darker p-4">
            <div class="text-2xl mb-2">2</div>
            <div class="font-bold text-gb-darker">进入迷宫</div>
            <p class="mt-2 text-sm leading-6 text-gb-dark">
              在学习、战斗、奖励事件中推进成长，感受内容与互动结合。
            </p>
          </div>
          <div class="bg-gb-light border-4 border-gb-darker p-4">
            <div class="text-2xl mb-2">3</div>
            <div class="font-bold text-gb-darker">围绕项目、简历、面试组织输出</div>
            <p class="mt-2 text-sm leading-6 text-gb-dark">
              整个反馈链路不是只升级数值，而是强化“成长可感知”。
            </p>
          </div>
        </div>

        <div class="mt-6 bg-gb-light border-4 border-gb-darker p-4">
          <div class="font-bold text-gb-darker">这版 Demo 适合验证什么</div>
          <div class="mt-3 grid gap-3 sm:grid-cols-2">
            <div class="text-sm leading-6 text-gb-dark">职业方向入口不再只是文章列表，而是可选择、可反馈的互动路径。</div>
            <div class="text-sm leading-6 text-gb-dark">学习、战斗、装备三套机制能把成长过程变成更容易停留的体验。</div>
            <div class="text-sm leading-6 text-gb-dark">后续可以继续扩成课程页、活动页、招生页或广告变现型内容站。</div>
            <div class="text-sm leading-6 text-gb-dark">当前重点是让用户快速理解结构，而不是做复杂规则系统。</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

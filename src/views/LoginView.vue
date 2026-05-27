<script setup lang="ts">
import { computed, ref } from 'vue';
import { useGameStore } from '@/stores/gameStore';
import { validateEmail } from '@/utils/userUtils';
import { sendEmailCode } from '@/services/authApi';
import { ApiError } from '@/services/http';

const store = useGameStore();

const email = ref('');
const code = ref('');
const countdown = ref(0);
const isLoading = ref(false);
const errorMessage = ref('');
const deliveryMode = ref<'dev' | 'resend' | ''>('');

const canSendCode = computed(() => validateEmail(email.value) && countdown.value === 0);
const canLogin = computed(() => validateEmail(email.value) && code.value.length === 6);
const countdownText = computed(() => (countdown.value > 0 ? `${countdown.value}s` : '获取验证码'));

async function sendCode() {
  if (!canSendCode.value) return;

  errorMessage.value = '';

  try {
    const response = await sendEmailCode(email.value);
    deliveryMode.value = response.delivery || '';

    countdown.value = 60;
    const timer = setInterval(() => {
      countdown.value--;
      if (countdown.value <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    if (response.devCode) {
      alert(`开发模式验证码: ${response.devCode}`);
    }
  } catch (error) {
    errorMessage.value = error instanceof ApiError ? error.message : '验证码发送失败，请稍后重试';
  }
}

async function onLogin() {
  errorMessage.value = '';

  if (!validateEmail(email.value)) {
    errorMessage.value = '请输入正确的邮箱地址';
    return;
  }

  if (code.value.length !== 6) {
    errorMessage.value = '请输入 6 位验证码';
    return;
  }

  isLoading.value = true;
  try {
    const success = await store.login(email.value, code.value);
    if (!success) {
      errorMessage.value = '登录失败，请检查验证码后重试';
    }
  } finally {
    isLoading.value = false;
  }
}

function onEmailInput(event: Event) {
  const input = event.target as HTMLInputElement;
  email.value = input.value.trim().toLowerCase();
}

function onCodeInput(event: Event) {
  const input = event.target as HTMLInputElement;
  code.value = input.value.replace(/\D/g, '').slice(0, 6);
}
</script>

<template>
  <div class="mx-auto flex h-full min-h-0 w-full max-w-[430px] items-center justify-center overflow-x-hidden">
    <div class="w-full">
      <div class="bg-gb-bg border-8 border-gb-dark rounded-gameboy shadow-pixel-lg p-6">
        <div class="mb-6 text-center">
          <div class="mb-2 text-6xl">🎓</div>
          <h1 class="text-2xl font-bold text-gb-darker">职道</h1>
          <p class="mt-1 text-sm text-gb-dark">把职业成长做成可互动体验</p>
        </div>

        <div class="space-y-4">
          <div>
            <label class="mb-2 block text-sm font-bold text-gb-darker">邮箱</label>
            <input
              type="email"
              :value="email"
              @input="onEmailInput"
              placeholder="请输入邮箱地址"
              class="w-full border-4 border-gb-darker bg-gb-light px-3 py-2 text-gb-darker placeholder-gb-dark/50 focus:outline-none"
              autocomplete="email"
            />
          </div>

          <div>
            <label class="mb-2 block text-sm font-bold text-gb-darker">验证码</label>
            <div class="flex flex-col gap-2 sm:flex-row">
              <input
                type="tel"
                :value="code"
                @input="onCodeInput"
                placeholder="请输入验证码"
                class="min-w-0 flex-1 border-4 border-gb-darker bg-gb-light px-3 py-2 text-gb-darker placeholder-gb-dark/50 focus:outline-none"
                maxlength="6"
              />
              <button
                class="pixel-btn w-full whitespace-nowrap text-xs sm:w-auto"
                :disabled="!canSendCode"
                :class="{ 'cursor-not-allowed opacity-50': !canSendCode }"
                @click="sendCode"
              >
                {{ countdownText }}
              </button>
            </div>
          </div>

          <div v-if="errorMessage" class="text-center text-sm text-red-600">
            {{ errorMessage }}
          </div>

          <button
            class="pixel-btn mt-4 w-full"
            :disabled="!canLogin || isLoading"
            :class="{ 'cursor-not-allowed opacity-50': !canLogin || isLoading }"
            @click="onLogin"
          >
            <span v-if="isLoading">登录中...</span>
            <span v-else>开始体验</span>
          </button>
        </div>

        <div class="mt-6 text-center text-xs text-gb-dark">
          <p v-if="deliveryMode === 'resend'">验证码会发送到你的邮箱，请查看收件箱和垃圾邮件。</p>
          <p v-else>输入邮箱后获取验证码，完成登录后会自动生成体验角色。</p>
          <p v-if="deliveryMode === 'dev'" class="mt-1">当前服务未配置 Resend，仍会使用开发态验证码兜底。</p>
        </div>
      </div>
    </div>
  </div>
</template>

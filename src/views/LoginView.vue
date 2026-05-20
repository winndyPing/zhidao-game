<script setup lang="ts">
import { ref, computed } from 'vue';
import { useGameStore } from '@/stores/gameStore';
import { validatePhone, generateVerificationCode } from '@/utils/userUtils';

const store = useGameStore();

// ==================== 状态 ====================

const phone = ref('');
const code = ref('');
const generatedCode = ref('');
const countdown = ref(0);
const isLoading = ref(false);
const errorMessage = ref('');

// ==================== 计算属性 ====================

const canSendCode = computed(() => {
  return validatePhone(phone.value) && countdown.value === 0;
});

const canLogin = computed(() => {
  return validatePhone(phone.value) && code.value.length === 6;
});

const countdownText = computed(() => {
  return countdown.value > 0 ? `${countdown.value}s` : '获取验证码';
});

// ==================== 方法 ====================

function sendCode() {
  if (!canSendCode.value) return;
  
  // 生成验证码
  generatedCode.value = generateVerificationCode();
  console.log('验证码:', generatedCode.value); // 实际项目中应该发送到手机
  
  // 开始倒计时
  countdown.value = 60;
  const timer = setInterval(() => {
    countdown.value--;
    if (countdown.value <= 0) {
      clearInterval(timer);
    }
  }, 1000);
  
  // 显示验证码（演示用）
  alert(`验证码: ${generatedCode.value}`);
}

function onLogin() {
  errorMessage.value = '';
  
  if (!validatePhone(phone.value)) {
    errorMessage.value = '请输入正确的手机号';
    return;
  }
  
  if (code.value.length !== 6) {
    errorMessage.value = '请输入6位验证码';
    return;
  }
  
  // 验证验证码（实际项目中应该与服务器验证）
  // 演示时跳过验证或检查生成的验证码
  if (generatedCode.value && code.value !== generatedCode.value) {
    // 演示模式：允许任意6位数字登录
    // errorMessage.value = '验证码错误';
    // return;
  }
  
  isLoading.value = true;
  
  // 模拟登录请求
  setTimeout(() => {
    store.login(phone.value);
    isLoading.value = false;
  }, 500);
}

function onPhoneInput(event: Event) {
  const input = event.target as HTMLInputElement;
  // 只允许数字
  phone.value = input.value.replace(/\D/g, '').slice(0, 11);
}

function onCodeInput(event: Event) {
  const input = event.target as HTMLInputElement;
  // 只允许数字
  code.value = input.value.replace(/\D/g, '').slice(0, 6);
}
</script>

<template>
  <div class="min-h-screen bg-gb-darker flex flex-col items-center justify-center p-4">
    <div class="w-full max-w-sm bg-gb-bg border-8 border-gb-dark rounded-gameboy shadow-pixel-lg p-6">
      <!-- Logo -->
      <div class="text-center mb-6">
        <div class="text-6xl mb-2">🎮</div>
        <h1 class="text-gb-darker font-bold text-2xl">职道</h1>
        <p class="text-gb-dark text-sm mt-1">代码迷宫 & 装备工坊</p>
      </div>
      
      <!-- 登录表单 -->
      <div class="space-y-4">
        <!-- 手机号输入 -->
        <div>
          <label class="block text-gb-darker text-sm font-bold mb-2">手机号</label>
          <div class="flex gap-2">
            <input
              type="tel"
              :value="phone"
              @input="onPhoneInput"
              placeholder="请输入手机号"
              class="flex-1 bg-gb-light border-4 border-gb-darker px-3 py-2 text-gb-darker placeholder-gb-dark/50 focus:outline-none font-mono"
              maxlength="11"
            />
          </div>
        </div>
        
        <!-- 验证码输入 -->
        <div>
          <label class="block text-gb-darker text-sm font-bold mb-2">验证码</label>
          <div class="flex gap-2">
            <input
              type="tel"
              :value="code"
              @input="onCodeInput"
              placeholder="请输入验证码"
              class="flex-1 bg-gb-light border-4 border-gb-darker px-3 py-2 text-gb-darker placeholder-gb-dark/50 focus:outline-none font-mono"
              maxlength="6"
            />
            <button
              class="pixel-btn whitespace-nowrap text-xs"
              :disabled="!canSendCode"
              :class="{ 'opacity-50 cursor-not-allowed': !canSendCode }"
              @click="sendCode"
            >
              {{ countdownText }}
            </button>
          </div>
        </div>
        
        <!-- 错误信息 -->
        <div v-if="errorMessage" class="text-red-600 text-sm text-center">
          {{ errorMessage }}
        </div>
        
        <!-- 登录按钮 -->
        <button
          class="pixel-btn w-full mt-4"
          :disabled="!canLogin || isLoading"
          :class="{ 'opacity-50 cursor-not-allowed': !canLogin || isLoading }"
          @click="onLogin"
        >
          <span v-if="isLoading">登录中...</span>
          <span v-else>登录</span>
        </button>
      </div>
      
      <!-- 演示提示 -->
      <div class="mt-6 text-center text-xs text-gb-dark">
        <p>💡 演示模式：任意手机号 + 6位数字即可登录</p>
        <p class="mt-1">登录后将自动生成头像和昵称</p>
      </div>
    </div>
    
    <!-- 底部装饰 -->
    <div class="mt-8 flex gap-4 text-2xl opacity-50">
      <span>⚔️</span>
      <span>🛡️</span>
      <span>💎</span>
      <span>🐛</span>
      <span>👾</span>
    </div>
  </div>
</template>

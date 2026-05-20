<script setup lang="ts">
import { ref } from 'vue';
import { useGameStore } from '@/stores/gameStore';
import { maskPhone } from '@/utils/userUtils';

const store = useGameStore();

const isEditing = ref(false);
const tempNickname = ref('');
const showLogoutConfirm = ref(false);

function onEditNickname() {
  tempNickname.value = store.user.nickname;
  isEditing.value = true;
}

function onSaveNickname() {
  if (tempNickname.value.trim()) {
    store.updateNickname(tempNickname.value.trim());
  }
  isEditing.value = false;
}

function onCancelEdit() {
  isEditing.value = false;
  tempNickname.value = '';
}

function onRegenerateNickname() {
  const newName = store.regenerateNickname();
  tempNickname.value = newName;
}

function onLogout() {
  showLogoutConfirm.value = true;
}

function confirmLogout() {
  store.logout();
  showLogoutConfirm.value = false;
}

function cancelLogout() {
  showLogoutConfirm.value = false;
}
</script>

<template>
  <div class="flex items-center gap-3 bg-gb-light border-4 border-gb-dark p-3 mb-4">
    <!-- 头像 -->
    <div class="relative">
      <img
        :src="store.user.avatar"
        alt="avatar"
        class="w-12 h-12 border-4 border-gb-darker bg-gb-bg"
      />
      <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-gb-darker rounded-full"></div>
    </div>
    
    <!-- 用户信息 -->
    <div class="flex-1 min-w-0">
      <!-- 昵称 -->
      <div v-if="!isEditing" class="flex items-center gap-2">
        <span class="font-bold text-gb-darker truncate">{{ store.user.nickname }}</span>
        <button
          class="text-xs text-gb-dark hover:text-gb-darker"
          @click="onEditNickname"
        >
          ✏️
        </button>
      </div>
      
      <!-- 编辑昵称 -->
      <div v-else class="flex items-center gap-2">
        <input
          v-model="tempNickname"
          type="text"
          class="bg-gb-bg border-2 border-gb-darker px-2 py-1 text-sm w-32"
          maxlength="20"
        />
        <button class="text-xs" @click="onSaveNickname">✓</button>
        <button class="text-xs" @click="onCancelEdit">×</button>
        <button 
          class="text-xs" 
          title="随机生成"
          @click="onRegenerateNickname"
        >
          🎲
        </button>
      </div>
      
      <!-- 手机号 -->
      <div class="text-xs text-gb-dark">
        {{ maskPhone(store.user.phone) }}
      </div>
    </div>
    
    <!-- 退出按钮 -->
    <button
      class="pixel-btn small text-xs"
      @click="onLogout"
    >
      退出
    </button>
  </div>

  <!-- 退出确认弹窗 -->
  <div v-if="showLogoutConfirm" class="fixed inset-0 z-50">
    <div class="absolute inset-0 bg-black/70" />
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 animate-pop-in">
      <div class="bg-gb-bg border-8 border-gb-darker p-5 text-center">
        <span class="text-gb-darker font-bold text-lg block mb-4">🚪 退出登录</span>
        <span class="text-gb-darker text-sm block mb-4">确定要退出登录吗？</span>
        <div class="flex gap-3">
          <button class="pixel-btn flex-1" @click="confirmLogout">确认</button>
          <button class="pixel-btn flex-1" @click="cancelLogout">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

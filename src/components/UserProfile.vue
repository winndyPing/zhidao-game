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
  <div class="mb-4 flex flex-wrap items-center gap-3 border-4 border-gb-dark bg-gb-light p-3">
    <div class="relative">
      <img
        :src="store.user.avatar"
        alt="avatar"
        class="h-12 w-12 border-4 border-gb-darker bg-gb-bg"
      />
      <div class="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-gb-darker bg-green-500"></div>
    </div>

    <div class="min-w-0 flex-1">
      <div v-if="!isEditing" class="flex min-w-0 items-center gap-2">
        <span class="truncate font-bold text-gb-darker">{{ store.user.nickname }}</span>
        <button class="text-xs text-gb-dark hover:text-gb-darker" @click="onEditNickname">
          ✏️
        </button>
      </div>

      <div v-else class="flex flex-wrap items-center gap-2">
        <input
          v-model="tempNickname"
          type="text"
          class="min-w-0 flex-1 border-2 border-gb-darker bg-gb-bg px-2 py-1 text-sm sm:w-32 sm:flex-none"
          maxlength="20"
        />
        <button class="text-xs" @click="onSaveNickname">✓</button>
        <button class="text-xs" @click="onCancelEdit">✕</button>
        <button class="text-xs" title="随机生成" @click="onRegenerateNickname">🎲</button>
      </div>

      <div class="text-xs text-gb-dark">
        {{ maskPhone(store.user.phone) }}
      </div>
    </div>

    <button class="pixel-btn small ml-auto text-xs sm:ml-0" @click="onLogout">
      退出
    </button>
  </div>

  <div v-if="showLogoutConfirm" class="fixed inset-0 z-50">
    <div class="absolute inset-0 bg-black/70" />
    <div class="absolute left-1/2 top-1/2 w-[calc(100vw-24px)] max-w-72 -translate-x-1/2 -translate-y-1/2 animate-pop-in">
      <div class="border-8 border-gb-darker bg-gb-bg p-5 text-center">
        <span class="mb-4 block text-lg font-bold text-gb-darker">🚪 退出登录</span>
        <span class="mb-4 block text-sm text-gb-darker">确定要退出登录吗？</span>
        <div class="flex gap-3">
          <button class="pixel-btn flex-1" @click="confirmLogout">确认</button>
          <button class="pixel-btn flex-1" @click="cancelLogout">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

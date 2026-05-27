<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue';
import type { Room } from '@/types/game';
import { useGameStore } from '@/stores/gameStore';
import { canEnterRoom, applyRestEffect, applyTrapEffect } from '@/utils/roomEvents';
import { careerDirections } from '@data/careerDirections';

import StatusBar from '@/components/StatusBar.vue';
import BottomNav from '@/components/BottomNav.vue';
import MaterialBadge from '@/components/MaterialBadge.vue';
import UserProfile from '@/components/UserProfile.vue';
import DungeonMap from '@/components/dungeon/DungeonMap.vue';
import LearningResourcePopup from '@/components/dungeon/LearningResourcePopup.vue';
import CombatScene from '@/components/dungeon/CombatScene.vue';
import TreasureEvent from '@/components/dungeon/TreasureEvent.vue';
import BossEvent from '@/components/dungeon/BossEvent.vue';

const store = useGameStore();

// ==================== 状态 ====================

const rooms = computed(() => store.dungeon.rooms);
const currentRoom = computed(() => {
  const { x, y } = store.dungeon.currentRoom;
  return store.dungeon.rooms.find(r => r.x === x && r.y === y);
});

// 事件弹窗状态
const showLearning = ref(false);
const showCombatScene = ref(false);
const showTreasure = ref(false);
const showBoss = ref(false);
const currentEventRoom = ref<Room | null>(null);

// ==================== 初始化 ====================

function onResetDungeon() {
  console.log('Resetting dungeon...');
  store.resetDungeon();
  currentEventRoom.value = null;
  showLearning.value = false;
  showCombatScene.value = false;
  showTreasure.value = false;
  showBoss.value = false;
}

onMounted(() => {
  store.generateDungeon();
  window.addEventListener('reset-dungeon', onResetDungeon);
});

onUnmounted(() => {
  window.removeEventListener('reset-dungeon', onResetDungeon);
});

// ==================== 方法 ====================

function onEnterRoom(x: number, y: number) {
  if (!canEnterRoom(x, y, store)) {
    showToast('❌ 需要先探索相邻房间');
    return;
  }

  const room = store.dungeon.rooms.find(r => r.x === x && r.y === y);
  if (!room) return;

  store.setCurrentRoom(x, y);

  // 根据房间解锁状态处理
  if (room.unlockStatus === 'locked') {
    // 未解锁 -> 进入学习状态
    room.explored = true;
    store.exploreRoom(room.position);
    store.setRoomLearning(x, y);
    
    // 显示学习资源弹框
    if (room.type === 'combat' || room.type === 'puzzle' || room.type === 'boss') {
      currentEventRoom.value = room;
      showLearning.value = true;
    } else if (room.type === 'treasure') {
      currentEventRoom.value = room;
      showTreasure.value = true;
    } else if (room.type === 'rest') {
      applyRestEffect(room, store);
      store.clearRoom(x, y);
      showToast(`🛏️ 休息恢复 HP+${room.event.effect?.hp || 0} 体力+${room.event.effect?.stamina || 0}`);
    } else if (room.type === 'trap') {
      applyTrapEffect(room, store);
      store.clearRoom(x, y);
      showToast(`⚠️ 触发陷阱，HP ${room.event.effect?.hp || 0}`);
    }
  } else if (room.unlockStatus === 'learning') {
    // 学习中 -> 进入挑战
    if (room.type === 'combat' || room.type === 'puzzle' || room.type === 'boss') {
      currentEventRoom.value = room;
      if (room.type === 'boss') {
        showBoss.value = true;
      } else {
        showCombatScene.value = true;
      }
    } else {
      showToast(`📖 ${room.event.name} - ${room.event.desc}`);
    }
  } else {
    // 已通关
    showToast(`✅ ${room.event.name} 已通关`);
  }
}

// 开始挑战
function onStartChallenge(skillId: string) {
  showLearning.value = false;
  if (currentEventRoom.value) {
    // 保存关联的技能ID到房间
    store.setRoomLearning(currentEventRoom.value.x, currentEventRoom.value.y, skillId);
    
    // 重新获取更新后的房间对象
    const updatedRoom = store.dungeon.rooms.find(r => r.x === currentEventRoom.value!.x && r.y === currentEventRoom.value!.y);
    if (updatedRoom) {
      currentEventRoom.value = updatedRoom;
    }
    
    if (currentEventRoom.value.type === 'boss') {
      showBoss.value = true;
    } else {
      showCombatScene.value = true;
    }
  }
}

// 关闭学习弹框
function onCloseLearning() {
  showLearning.value = false;
  showToast('📖 学习资源已保存，随时可以回来挑战！');
}

function onBattleWin(message: string) {
  showCombatScene.value = false;
  showToast(message);
}

function onBattleFlee(message: string) {
  showCombatScene.value = false;
  showToast(message);
}

function onEventComplete(message: string) {
  showToast(message);
}

function showToast(message: string) {
  const toast = document.createElement('div');
  toast.className = 'fixed bottom-20 left-1/2 -translate-x-1/2 bg-gb-darker text-gb-bg px-4 py-2 border-4 border-gb-dark z-50';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}

function onNavChange(page: string) {
  store.setCurrentPage(page as any);
}

// 获取技能名称
function getSkillName(skillId: string): string {
  for (const career of careerDirections) {
    const skill = career.skills.find(s => s.id === skillId);
    if (skill) return skill.name;
  }
  return '编程技能';
}
</script>

<template>
  <div class="mx-auto flex h-full min-h-0 w-full max-w-[430px] flex-col overflow-x-hidden rounded-[28px] border-8 border-gb-dark bg-gb-bg p-4 shadow-pixel-lg md:w-full">
    <!-- 可滚动内容区域 -->
    <div class="min-h-0 flex-1 overflow-y-auto">
      <!-- 用户资料 -->
      <UserProfile />
      
      <!-- 头部 -->
      <div class="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div class="text-gb-darker font-bold text-lg">🏰 迷宫</div>
        <div class="flex flex-wrap items-center gap-2">
          <span class="text-sm">第{{ store.dungeon.currentFloor }}层</span>
          <button class="pixel-btn small" @click="store.setCurrentPage('craft')">
            ⚒️ 工坊
          </button>
        </div>
      </div>

      <!-- 状态栏 -->
      <StatusBar />

      <!-- 迷宫地图 -->
      <div class="grid gap-4">
        <DungeonMap :rooms="rooms" @enter="onEnterRoom" />

        <div class="space-y-4">

      <!-- 当前房间信息 -->
      <div class="pixel-dialog">
        <span class="font-bold block mb-2">📍 当前位置</span>
        <div v-if="currentRoom">
          <span class="text-sm leading-6">
            {{ currentRoom.event.name }}
            <span v-if="currentRoom.unlockStatus === 'learning'" class="text-gb-dark">（学习中）</span>
            <span v-else-if="currentRoom.unlockStatus === 'cleared'" class="text-green-600">（已通关）</span>
          </span>
          <!-- 优先显示用户选择的技能 -->
          <div v-if="currentRoom.linkedSkillId" class="mt-1 text-xs leading-5 text-gb-textgold">
            📚 学习技能: {{ getSkillName(currentRoom.linkedSkillId) }}
          </div>
          <!-- 如果没有选择，显示房间推荐的技能 -->
          <div v-else-if="currentRoom.event.skillHint" class="mt-1 text-xs leading-5 text-gb-dark">
            💡 推荐技能: {{ getSkillName(currentRoom.event.skillHint) }}
          </div>
        </div>
        <span v-else class="text-sm">未知区域</span>
      </div>

      <!-- 材料快捷显示 -->
          <div class="pixel-dialog">
            <span class="mb-2 block font-bold">材料速览</span>
            <div class="flex flex-wrap gap-2">
              <MaterialBadge
                v-for="material in store.inventory.materials"
                :key="material.id"
                :icon="material.icon"
                :count="material.count"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 底部导航 -->
    <BottomNav current-page="dungeon" @change="onNavChange" />
  </div>

  <!-- 事件弹窗 -->
  <LearningResourcePopup 
    :show="showLearning" 
    :room="currentEventRoom" 
    @start-challenge="onStartChallenge"
    @close="onCloseLearning"
  />
  <CombatScene
    :show="showCombatScene"
    :room="currentEventRoom"
    @win="onBattleWin"
    @flee="onBattleFlee"
  />
  <TreasureEvent :show="showTreasure" :room="currentEventRoom" @close="showTreasure = false" @complete="onEventComplete" />
  <BossEvent :show="showBoss" :room="currentEventRoom" @close="showBoss = false" @complete="onEventComplete" />
</template>

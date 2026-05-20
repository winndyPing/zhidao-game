<script setup lang="ts">
import { computed, watch } from 'vue';
import type { Room } from '@/types/game';
import { useGameStore } from '@/stores/gameStore';

interface Props {
  rooms: Room[];
}

const props = defineProps<Props>();

const emit = defineEmits<{
  enter: [x: number, y: number];
}>();

const store = useGameStore();

const current = computed(() => store.dungeon.currentRoom);

watch(() => props.rooms, (newRooms) => {
  console.log('Rooms updated:', newRooms.length, 'rooms');
}, { deep: true });

const roomIcons: Record<string, string> = {
  combat: '⚔️',
  treasure: '💰',
  puzzle: '🧩',
  rest: '🛏️',
  trap: '⚠️',
  boss: '👾',
};

function getRoomIcon(room: Room | undefined): string {
  if (!room) return '⬜';
  
  // 根据解锁状态显示
  if (room.unlockStatus === 'cleared') return '✅';
  if (room.unlockStatus === 'learning') return roomIcons[room.type] || '📖';
  if (room.explored) return roomIcons[room.type] || '❓';
  
  return '🔒';
}

function getRoomClass(room: Room | undefined): string {
  if (!room) return '';
  const classes: string[] = [];

  // 当前位置
  if (current.value.x === room.x && current.value.y === room.y) {
    classes.push('current');
  }

  // 根据解锁状态设置样式
  if (room.unlockStatus === 'cleared') {
    classes.push('cleared');
  } else if (room.unlockStatus === 'learning') {
    classes.push('learning');
  } else if (store.dungeon.exploredRooms.includes(room.position)) {
    classes.push('explored');
  } else {
    classes.push('locked');
  }

  return classes.join(' ');
}

function onRoomClick(room: Room | undefined) {
  if (!room) return;
  emit('enter', room.x, room.y);
}

function getRoom(x: number, y: number): Room | undefined {
  return props.rooms.find(r => r.x === x && r.y === y);
}
</script>

<template>
  <div class="bg-gb-dark p-3 border-4 border-gb-darker">
    <div class="grid grid-cols-4 gap-2">
      <template v-for="y in 4" :key="`row-${y}`">
        <div
          v-for="x in 4"
          :key="`cell-${x}-${y}`"
          class="aspect-square bg-gb-light border-4 border-gb-darker flex items-center justify-center text-2xl cursor-pointer relative active:scale-95 transition-all duration-100"
          :class="getRoomClass(getRoom(x - 1, y - 1))"
          @click="onRoomClick(getRoom(x - 1, y - 1))"
        >
          {{ getRoomIcon(getRoom(x - 1, y - 1)) }}
        </div>
      </template>
    </div>
    
    <!-- 图例 -->
    <div class="flex justify-center gap-4 mt-3 text-xs text-gb-bg">
      <span>🔒 未解锁</span>
      <span>⚔️ 学习中</span>
      <span>✅ 已通关</span>
    </div>
  </div>
</template>

<style scoped>
.current {
  border-color: #d4af37;
  box-shadow: 0 0 0 3px #d4af37;
}

.locked {
  background-color: #9bbc0f;
  color: #306230;
}

.explored {
  background-color: #0f380f;
  color: #9bbc0f;
}

.learning {
  background-color: #0f380f;
  color: #d4af37;
  animation: pulse 1.5s infinite;
}

.cleared {
  background-color: #0f380f;
  color: #306230;
  opacity: 0.8;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
</style>

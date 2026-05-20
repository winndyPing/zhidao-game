<script setup lang="ts">
interface Props {
  icon: string;
  count: number;
  name?: string;
}

defineProps<Props>();
</script>

<template>
  <div class="flex items-center gap-1 bg-gb-light px-2 py-1 rounded border-2 border-gb-darker text-xs">
    <span class="text-base">{{ icon }}</span>
    <span v-if="name" class="text-gb-darker">{{ name }}</span>
    <span class="text-gb-darker font-bold">×{{ count }}</span>
  </div>
</template>

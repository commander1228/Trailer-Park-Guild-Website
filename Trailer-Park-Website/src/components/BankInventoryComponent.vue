<script setup lang="ts">
import WowItem from '@/components/WowItem.vue'
import type { WowItem as WowItemData } from '@/types/Item'

interface Props {
  items: WowItemData[]
}

defineProps<Props>()
</script>

<template>
  <div class="grid grid-cols-[repeat(auto-fit,10rem)] justify-center gap-4">
    <WowItem v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

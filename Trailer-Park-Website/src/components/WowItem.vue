<script setup lang="ts">
import { computed } from 'vue'
import { QUALITY_TYPE, type WowItem as WowItemData } from '@/types/Item'

interface Props {
  item: WowItemData
}

const props = defineProps<Props>()

const qualityBorderStyle = computed(() => ({
  borderColor: QUALITY_TYPE[props.item.qualityType],
}))
</script>

<template>
  <article class="card border-2 bg-base-100 shadow-sm" :style="qualityBorderStyle">
    <div class="card-body">
      <h2 class="card-title">{{ item.name }}</h2>
      <div class="card-actions justify-end">
        <span class="badge badge-outline">Amount: {{ item.quantity }}</span>
      </div>
    </div>
  </article>
</template>

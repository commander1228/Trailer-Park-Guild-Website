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
      <h2 class="card-title">
        <a
          :href="`https://www.wowhead.com/classic/item=${item.id}`"
          target="_blank"
          rel="noopener noreferrer"
          class="link link-hover"
        >
          {{ item.name }}
        </a>
      </h2>
      <div class="card-actions justify-end">
        <span class="badge badge-outline">Amount: {{ item.quantity }}</span>
      </div>
    </div>
  </article>
</template>

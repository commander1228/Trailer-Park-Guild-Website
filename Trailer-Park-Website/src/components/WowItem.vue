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
  <article
    class="card relative aspect-square overflow-hidden border-2 bg-base-100 shadow-sm"
    :style="qualityBorderStyle"
  >
    <img
      :src="item.iconUrl"
      :alt="item.name"
      class="size-full object-contain p-3"
    />
    <div class="absolute inset-x-0 bottom-0 bg-base-100/90 p-2">
      <h2 class="truncate font-semibold">
        <a
          :href="`https://www.wowhead.com/classic/item=${item.id}`"
          target="_blank"
          rel="noopener noreferrer"
          class="link link-hover"
          :title="item.name"
        >
          {{ item.name }}
        </a>
      </h2>
    </div>
    <span class="badge badge-outline absolute right-2 top-2 bg-base-100/90">
      {{ item.quantity }}
    </span>
  </article>
</template>

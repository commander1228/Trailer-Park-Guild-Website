<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ActionButton from '@/components/ActionButton.vue'
import WowItem from '@/components/WowItem.vue'
import { addTestItem, getWowItems } from '@/services/guildBankService'
import type { WowItem as WowItemData } from '@/types/Item'
import type { TestItem } from '@/types/testFakeItem'

const items = ref<WowItemData[]>([])
const isRefreshing = ref(false)
const refreshError = ref<string | null>(null)

function populateBank(wowItems: WowItemData[]) {
  items.value = wowItems
}

async function refreshBank() {
  isRefreshing.value = true
  refreshError.value = null

  try {
    populateBank(await getWowItems())
  } catch (error) {
    refreshError.value = error instanceof Error ? error.message : 'Unable to load guild bank items.'
  } finally {
    isRefreshing.value = false
  }
}

async function handleTestAdd() {
  const fakeItem: TestItem = {
    blizzardId: 17780,
    quantity: 1,
  }

  await addTestItem(fakeItem)
  await refreshBank()
}

onMounted(refreshBank)


</script>

<template>
  <section class="space-y-6">
    <div class="flex flex-wrap items-center justify-between gap-4">
      <h1 class="text-3xl font-bold text-primary">THE VAULT</h1>
      <div class="flex gap-2">
        <ActionButton
          :text="isRefreshing ? 'Refreshing...' : 'Refresh bank'"
          :disabled="isRefreshing"
          @click="refreshBank"
        />
        <ActionButton text="test add" :disabled="isRefreshing" @click="handleTestAdd" />
      </div>
    </div>

    <div v-if="refreshError" role="alert" class="alert alert-error">
      <span>{{ refreshError }}</span>
    </div>

    <div
      v-else-if="!isRefreshing && items.length === 0"
      class="rounded-box border border-base-300 p-6 text-center text-base-content/70"
    >
      The guild bank is empty.
    </div>

    <div v-else class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <WowItem v-for="item in items" :key="item.id" :item="item" />
    </div>
  </section>
</template>
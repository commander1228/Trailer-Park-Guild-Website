<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ActionButton from '@/components/ActionButton.vue'
import BankInventoryComponent from '@/components/BankInventoryComponent.vue'
import { addTestItems, getWowItems } from '@/services/guildBankService'
import type { WowItem as WowItemData } from '@/types/Item'
import type { TestItem } from '@/types/testFakeItem'

const items = ref<WowItemData[]>([])
const isRefreshing = ref(false)
const refreshError = ref<string | null>(null)
const testItems: TestItem[] = [
  { blizzardId: 17780, quantity: 20 },
  { blizzardId: 19019, quantity: 30 },
  { blizzardId: 19397, quantity: 20 },
  { blizzardId: 5976, quantity: 10 },
  { blizzardId: 17182, quantity: 1 },
  { blizzardId: 19019, quantity: 5 },
]

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
  await addTestItems(testItems)
  await refreshBank()
}

onMounted(refreshBank)


</script>

<template>
  <section class="relative isolate min-h-screen overflow-hidden p-6">
    <img
      src="/bank-vault.png"
      alt=""
      aria-hidden="true"
      class="absolute inset-0 z-0 size-full object-cover object-top"
    />
    <div class="absolute inset-0 z-0 bg-neutral/70"></div>

    <div class="relative z-10 space-y-6">
      <h1 class="text-center text-4xl font-bold text-neutral-content">THE VAULT</h1>

      <div class="flex justify-center gap-2">
        <ActionButton
          :text="isRefreshing ? 'Refreshing...' : 'Refresh bank'"
          :disabled="isRefreshing"
          @click="refreshBank"
        />
        <ActionButton text="Add test items" :disabled="isRefreshing" @click="handleTestAdd" />
      </div>

      <div v-if="refreshError" role="alert" class="alert alert-error">
        <span>{{ refreshError }}</span>
      </div>

      <div
        v-else-if="!isRefreshing && items.length === 0"
        class="rounded-box border border-base-300 bg-base-100 p-6 text-center text-base-content/70"
      >
        The guild bank is empty.
      </div>

      <BankInventoryComponent v-else :items="items" />
    </div>
  </section>
</template>
<script setup lang="ts">
import ActionButton from '@/components/ActionButton.vue';
import { addTestItem } from '@/services/guildBankService';
import type { TestItem } from '@/types/testFakeItem';

async function handleTestAdd() {
    const fakeItem: TestItem = {
        blizzardId: 17780,
        quantity:1
    } 

    await addTestItem(fakeItem)
}


</script>

<template>
    <h1 class="text-center text-3xl font-bold text-primary">THE VAULT</h1>
    <ActionButton text="test add" @click="handleTestAdd" />
</template>
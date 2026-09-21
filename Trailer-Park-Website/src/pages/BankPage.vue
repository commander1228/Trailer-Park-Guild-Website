<script setup lang="ts">
import ActionButton from '@/components/ActionButton.vue';
import { addTestItem } from '@/services/guildBankService';
import type { TestItem } from '@/types/testFakeItem';

function handleTestAdd() {
    const fakeItem: TestItem = {
        blizzId: 17780,
        quantity:1
    } 
    addTestItem
}


</script>

<template>
    <h1 class="text-center text-3xl font-bold text-primary">THE VAULT</h1>
    <ActionButton text = "test add"/>
</template>
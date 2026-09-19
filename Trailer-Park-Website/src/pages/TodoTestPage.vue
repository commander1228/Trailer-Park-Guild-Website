<script setup lang="ts">
import AddTodoForm from '@/components/AddTodoForm.vue';
</script>


<template>
  <section class="mx-auto mt-16 max-w-2xl px-6">
    <h1 class="text-3xl font-bold">To-Do Test</h1>
    <div class="mt-6 flex gap-3">
      <AddTodoForm />
    </div>
  </section>
</template>
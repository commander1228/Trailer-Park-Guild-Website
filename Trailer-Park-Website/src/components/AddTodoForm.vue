<script setup lang="ts">
import { reactive } from 'vue';
import type { CreateTodo } from '@/types/Todo';
import { createTodo } from '@/services/TodoService';

const emptyTodo = reactive<CreateTodo>({
    title: '',
    description: '',
})

async function handleSubmit() {
    const TodoToCreate: CreateTodo = {
        title: emptyTodo.title.trim(),
        description: emptyTodo.description.trim(),
    }
    const createdTodo = await createTodo(TodoToCreate)
    console.log(createdTodo)

}

</script>

<template>
   <div class="card bg-base-100 w-96 shadow-sm">
        <form class="card-body" @submit.prevent="handleSubmit">
            <input v-model="emptyTodo.title" type="text" placeholder="Title" class="input input-bordered w-full" required />
            <input v-model="emptyTodo.description" type="text" placeholder="Description" class="input input-bordered w-full" required />
            <button class="btn btn-primary" type="submit">
                Add Todo
            </button>
        </form>
   </div>


</template>
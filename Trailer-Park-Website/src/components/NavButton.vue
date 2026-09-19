<script setup lang="ts">
interface Props {
  to: string
  text: string
}

defineProps<Props>()
</script>

<template>
  <RouterLink :to="to" active-class="btn-active" class="btn btn-ghost">
    {{ text }}
  </RouterLink>
</template>
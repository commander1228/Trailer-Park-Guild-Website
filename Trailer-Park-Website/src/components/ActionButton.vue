<script setup lang="ts">
interface Props {
  text: string
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  disabled: false,
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

function handleClick(event: MouseEvent) {
  emit('click', event)
}
</script>

<template>
  <button class="btn btn-primary" type="button" :disabled="disabled" @click="handleClick">
    {{ text }}
  </button>
</template>

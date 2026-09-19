<script setup lang="ts">
import NavButton from './NavButton.vue';
</script>

<template>
<div class="NavBar bg-base-100 shadow-sm">
  <NavButton text="Home" to="/" />
  <NavButton text="Todo test" to="/todo-test"/>
</div>
</template>
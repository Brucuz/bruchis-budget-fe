<script setup>
import { RouterView } from "vue-router";

</script>

<template>
  <div class="budget-container">
    <nav class="navbar navbar-dark bg-dark">
      <span class="navbar-brand mb-0 h1">Bruchi's Budget</span>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped>
.budget-container{
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}
.navbar{
  padding-left: 15px;
}
</style>

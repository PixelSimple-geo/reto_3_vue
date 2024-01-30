<script setup>
import NavBar from "@/components/navBar.vue";

</script>

<template>
  <header>
    <nav-bar />
  </header>

  <main>
    <router-view />
  </main>

  <footer>
    <h1>footer</h1>
  </footer>
</template>

<style>
#app {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>

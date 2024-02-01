<script setup>
import NavBar from "@/components/navBar.vue";
import { isAuthenticated, setAuthenticationStatus } from "@/utility.js";

</script>

<template>
  <header>
    <nav-bar :usuarioEstaAutenticado="isAuthenticated"/>
  </header>

  <main>
    <router-view />
  </main>

  <footer>
    hi
  </footer>
</template>

<style>
#app {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>

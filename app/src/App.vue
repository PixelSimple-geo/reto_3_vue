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

  <footer class="bg-dark text-light text-center p-3">
    <p class="mb-0">
      Esta página ha sido creada para un proyecto de Egibide. Si deseas ponerte en contacto con los creadores, puedes enviar un correo electrónico a
      <a href="mailto:jorge.egea@ikasle.egibide.org" class="text-light">Jorge</a>
      o
      <a href="mailto:markel.onaindia@ikasle.egibide.org" class="text-light">Markel</a>.
    </p>
  </footer>

</template>

<style>
#app {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>

<script setup>
import Contenedor from "@/components/producto/contenedor.vue";

</script>

<template>
  <header>
    <h1>Cerveza Killer Manager</h1>
    <nav>
      <ul>
        <li>
          <router-link to="/productos">Ver productos</router-link>
        </li>
      </ul>
    </nav>
  </header>

  <contenedor></contenedor>
<!--
  <main>
    <router-view />
  </main>
-->
</template>

<style scoped>

</style>

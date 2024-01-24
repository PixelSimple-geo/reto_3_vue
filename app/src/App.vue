<script setup>
import productos from "@/components/producto/productos.vue";

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

  <main>
    <router-view />
  </main>

</template>

<style scoped>

</style>

<script setup>
import Carta from "@/components/producto/carta.vue";
import {onMounted, ref} from "vue";

const productos = ref([]);

async function extraerProductos() {
  try {
    const response = await fetch("http://localhost/api/productos");
    if (!response.ok) throw new Error("Http error: " + response.status);
    const data = await response.json();
    console.log(data);
    productos.value = data;
  } catch (error) {
    console.error("Fetch error: " + error.message);
  }
}

onMounted(extraerProductos);
</script>

<template>
  <div>
    <carta v-for="producto in productos" :producto="producto"></carta>
  </div>
</template>

<style scoped>
div {
  --grid-column-width: 25rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(var(--grid-column-width), 100%), 1fr));
  gap: 1rem;
}
</style>
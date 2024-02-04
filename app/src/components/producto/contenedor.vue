<script setup>
import Carta from "@/components/producto/carta.vue";
import {onMounted, ref} from "vue";
import {requestData} from "@/network.js";

const productos = ref([]);
const extraerProductos = async () => productos.value = await requestData("productos", "GET");

onMounted(extraerProductos);
</script>

<template>
  <div><carta v-for="producto in productos" :producto="producto"></carta></div>
</template>

<style scoped>
div {
  width: min(90rem, 100%);
  padding: 1em;
  margin-inline: auto;
  --grid-column-width: 15rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(var(--grid-column-width), 100%), 1fr));
  gap: 1rem;
  overflow-y: auto;
  max-height: 40rem;
}
</style>
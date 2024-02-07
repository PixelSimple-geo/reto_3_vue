<script setup>
import Carta from "@/components/producto/carta.vue";
import {onMounted, ref} from "vue";
import {requestData} from "@/network.js";


const extraerProductos = async () => {
  productos.value = await requestData("productos", "GET");
}


const productos = ref([]);
onMounted(extraerProductos);
</script>

<template>
    <div class="product-container">
      <carta v-for="producto in productos" :producto="producto" :key="producto.id"/>
    </div>
</template>

<style scoped>
.product-container {
  padding: 1em;
  margin-inline: auto;
  --grid-column-width: 20rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(var(--grid-column-width), 100%), 1fr));
  gap: 1rem;
}
</style>
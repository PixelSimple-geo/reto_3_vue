<script setup>
import Carta from "@/components/producto/carta.vue";
import {onMounted, ref} from "vue";
import {requestData} from "@/network.js";


const extraerProductos = async (uri = "productos") => {
  productos.value = await requestData(uri, "GET");
}

const extraerCategorias = async () => {
  categorias.value = await requestData("categorias", "GET");
}

const categorias = ref([]);
const productos = ref([]);
onMounted(() => {
  extraerProductos();
  extraerCategorias();
});

function filterProductos(event) {
  console.log(event.target.value);
  extraerProductos("productos/" + event.target.value);
}
</script>

<template>
  <div v-if="categorias.length > 0">
    <label>Filtrar por categorías&nbsp;</label>
    <select @change="filterProductos">
      <template v-for="categoria in categorias">
        <option :value="categoria.id">{{categoria.nombreCategoria}}</option>
      </template>
    </select>
  </div>
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
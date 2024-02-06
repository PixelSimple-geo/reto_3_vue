<script setup>
import Carta from "@/components/producto/carta.vue";
import {onMounted, ref} from "vue";
import {requestData} from "@/network.js";


const extraerProductos = async (uri = defaultURI) => {
  const respuesta = await requestData(uri, "GET");
  productos.value = respuesta.data;
  console.log(respuesta.data)
  paginacion.value = respuesta.links;
}

function onLinkClick(event) {
  const url = new URL(event.target.href);
  const params = new URLSearchParams(url.search);
  const pageIndex = params.get("page");
  extraerProductos(defaultURI + "?page=" + pageIndex);
  window.scrollTo({top: 0,behavior: 'smooth'});
}

const defaultURI = "productos";
const productos = ref([]);
const paginacion = ref([]);
onMounted(extraerProductos);
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <carta v-for="producto in productos" :producto="producto" :key="producto.id"/>
    </div>
  </div>
  <nav class="mx-auto" aria-label="Page navigation example" v-if="paginacion.length > 3">
    <ul class="pagination">
      <template v-for="pagina in paginacion">
        <li class="page-item" :class="{'active' : pagina.active === true}" v-if="pagina.url !== null">
          <a class="page-link" :href="pagina.url" @click.prevent="onLinkClick" v-html="pagina.label"></a>
        </li>
      </template>
    </ul>
  </nav>
</template>

<style scoped>
.container {
  width: min(120rem, 100%);
  padding: 1em;
  margin-inline: auto;
  --grid-column-width: 20rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(var(--grid-column-width), 100%), 1fr));
  gap: 1rem;
}
</style>
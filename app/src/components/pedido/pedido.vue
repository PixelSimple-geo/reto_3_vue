<script setup>
import {onMounted, ref} from "vue";
import {requestData} from "@/network.js";
import {url} from "@/network.js";
import {useRouter} from "vue-router";

const extraerPedidos = async (uri = defaultURI + "?page=1") => {
  const respuesta = await requestData(uri, "GET");
  pedidos.value = respuesta.data;
  paginacion.value = respuesta.links;
}

function onLinkClick(event) {
  const url = new URL(event.target.href);
  const params = new URLSearchParams(url.search);
  const pageIndex = params.get("page");
  extraerPedidos(defaultURI + "?page=" + pageIndex);
  window.scrollTo({top: 0,behavior: 'smooth'});
}

async function eliminar(event) {
  const id = event.target.id;
  await requestData(`pedidos/${id}`, "DELETE");
  await extraerPedidos();
}

const defaultURI = "pedidos";
const pedidos = ref([]);
const paginacion = ref([]);
onMounted(extraerPedidos);

function redirect(){
  console.log("tes");
  router.push("/productos/add");
}
const router = useRouter();

</script>

<template>
  <template v-if="pedidos.length === 0">
    <div class="feedback">
      <p class="text-center">No tienes ningún pedido</p>
      <p class="text-center">Crea uno <a href="#" @click.prevent="redirect">Crear pedido</a></p>
    </div>
  </template>
  <template v-for="pedido in pedidos">
    <article :id="pedido.id">
      <div class="detalle">
        <div>
          <span>Fecha de pedido:</span>
          <time datetime="{{pedido.fechaPedido}}">{{pedido.fechaPedido}}</time>
        </div>
        <div>
          <span>Dirección:</span>
          <address>{{pedido.direccionEnvio}}</address>
        </div>
        <div>
          <span>Estado del pedido:</span>
          <p>{{pedido.estadoPedido}}</p>
        </div>
        <div class="botonera">
        <button v-if="pedido.estadoPedido === 'En preparación' || pedido.estadoPedido === 'Solicitado'"
          class="btn btn-danger" :id="pedido.id" @click="eliminar">Cancelar pedido</button>
        </div>
      </div>

      <div class="table-responsive">
        <table class="table">
          <thead class="table-dark">
            <tr>
              <td>Categoría</td>
              <td>Producto</td>
              <td>Descripción</td>
              <td>Formato de envase</td>
              <td>Unidades</td>
              <td>Precio unitario</td>
              <td>Precio total</td>
              <td>Imagen</td>
            </tr>
          </thead>
          <tbody>
          <template v-for="ticket in pedido.ticket_productos">
            <tr :id="ticket.formato_producto.idProducto">
              <td>{{ticket.formato_producto.producto.categoria.nombreCategoria}}</td>
              <td>{{ticket.formato_producto.producto.nombreProducto}}</td>
              <td>{{ticket.formato_producto.producto.descripcionProducto}}</td>
              <td>{{ticket.formato_producto.formatoEnvase}}</td>
              <td>{{ticket.unidades}}</td>
              <td>{{parseFloat(ticket.formato_producto.precioUnitario).toFixed(2)}}€</td>
              <td>{{parseFloat(ticket.formato_producto.precioUnitario * ticket.unidades).toFixed(2)}}€</td>
              <td><img :src="url + '/storage/' + ticket.formato_producto.producto.fotoURL"></td>
            </tr>
          </template>
          </tbody>
        </table>
      </div>
    </article>
  </template>
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
.feedback {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 100%;
}

.pagination {
  justify-content: center;
}

.botonera {
  padding: 1em;
  display: flex;
  gap: 1rem
}

address {
  margin: unset;
}

article {
  padding: 1em;
  max-width: 100%;
}

.detalle {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 1em;
  justify-content: space-between;
  max-width: 60rem;
  margin-inline: auto;
}

.detalle > div {
  display: grid;
}

span {
  text-decoration: underline;
}

table {
  text-align: center;
  border-radius: 10px;
  overflow: hidden;
  max-width: 100%;
}

table td {
  border: 1px solid black;
  padding: 0.25em;
  vertical-align: middle; 
}

table thead {
  font-weight: bold;
}

table thead td{
  font-weight: bold;
  background-color: black;
}

img {
  max-width: 4rem;
  aspect-ratio: 1/1.1;
}
</style>
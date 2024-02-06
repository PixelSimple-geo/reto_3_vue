<script setup>
import {onMounted, ref} from "vue";
import {requestData} from "@/network.js";
import {url} from "@/network.js";

const extraerPedidos = async () => pedidos.value = await requestData("pedidos", "GET");

async function eliminar(event) {
  const id = event.target.id;
  await requestData(`pedidos/${id}`, "DELETE");
  pedidos.value = await extraerPedidos();
}

const pedidos = ref([]);
onMounted(extraerPedidos);

</script>

<template>
  <template v-for="pedido in pedidos" v-bind="pedidos">
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
</template>

<style scoped>
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
.table-wrapper{
  max-width: 100%;
  overflow-x: auto;
}
</style>
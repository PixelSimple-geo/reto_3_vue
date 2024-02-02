<script setup>
import {ref, onMounted} from "vue";
import axios from "axios";

async function extraerPedidos() {
  const idCliente = JSON.parse(localStorage.getItem("user")).cliente.id;
  const response = await axios.get('/api/pedidos/' + idCliente);
  if (response.status < 200 || response.status > 299) {throw new Error(`Http error: ${response.status}`);}
  const data = response.data;
  pedidos.value = data;
}

async function eliminar(event) {
  console.log(event.target.id);
  const id = event.target.id;
  const response = await fetch(`http://localhost/api/pedidos/${id}`, {method: "DELETE"})
  if (!response.ok) throw new Error(`No se ha podido eliminar ${id}`);
  else extraerPedidos();
}

const pedidos = ref([]);
onMounted(extraerPedidos);
</script>

<template>
  <template v-for="pedido in pedidos" v-bind="pedidos">
    <article :id="pedido.id">
      <div class="detalle">
        <div>
          <span>Fecha de pedido</span>
          <time datetime="{{pedido.fechaPedido}}">{{pedido.fechaPedido}}</time>
        </div>
        <div>
          <span>Dirección</span>
          <address>{{pedido.direccionEnvio}}</address>
        </div>
        <div>
          <span>Estado del pedido</span>
          <span>{{pedido.estadoPedido}}</span>
        </div>
      </div>
      <div class="botonera">
        <button class="btn btn-danger" :id="pedido.id" @click="eliminar">Eliminar</button>
        <button v-if="pedido.estadoPedido == 'En preparación'" class="btn btn-warning">Modificar</button>
      </div>
      <table>
        <thead>
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
            <td>{{ticket.formato_producto.precioUnitario}}€</td>
            <td>{{ticket.formato_producto.precioUnitario * ticket.unidades}}€</td>
            <td><img :src="ticket.formato_producto.producto.fotoURL"></td>
          </tr>
        </template>
        </tbody>
      </table>
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
}

.detalle {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 1em;
}

.detalle > div {
  display: grid;
}

.detalle > div :first-child {
  text-decoration: underline;
}

table {
  text-align: center;
}

table td {
  border: 1px solid black;
  padding: 0.25em;
}

table thead {
  font-weight: bold;
}

img {
  width: min(5rem, 100%);
}
</style>
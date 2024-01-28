<script setup>
import {ref, onMounted} from "vue";

async function extraerPedidos() {
  try {
    const response = await fetch("http://localhost/api/pedidos");
    if (!response.ok) throw new Error(`Http error: ${response.status}`);
    const data = (await response.json()).pedidos;
    console.log(data);
    pedidos.value = data;
  } catch (error) {
    console.error("Fetch error: " + error.message);
  }
}

async function eliminar(event) {
  console.log(event.target.id);
  const id = event.target.id;
  const response = await fetch(`http://localhost/api/pedidos/${id}`, {method: "DELETE"})

  if (!response.ok) throw new Error(`No se ha podido eliminar ${id}`);

  pedidos.value = pedidos.value.filter((pedido) => pedido.id !== id);
}

const pedidos = ref([]);
onMounted(extraerPedidos);
</script>

<template>
  <template v-for="pedido in pedidos" v-bind="pedidos">
    <article :id="pedido.id">
      <dl>
        <dt>Pedido</dt>
        <dd>{{pedido.id}}</dd>
        <dt>Fecha de pedido</dt>
        <dd><time datetime="{{pedido.fechaPedido}}">{{pedido.fechaPedido}}</time></dd>
        <dt>Dirección</dt>
        <dd><address>{{pedido.direccionEnvio}}</address></dd>
        <dt>Estado del pedido</dt>
        <dd><span>{{pedido.estadoPedido}}</span></dd>
      </dl>
      <table border="1">
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
          <td>Eliminar</td>
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
            <td><button :id="pedido.id" @click="eliminar">Eliminar</button></td>
          </tr>
        </template>
        </tbody>
      </table>
    </article>
  </template>
</template>

<style scoped>
table {
  text-align: center;
}
img {
  max-width: min(7rem, 100%);
  object-fit: cover;
}
</style>
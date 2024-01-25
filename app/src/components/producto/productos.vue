<script setup>
function extraerPedidos() {
  return [
    {
      idPedido: 1,
      idUsuario: 1,
      fechaPedido: "2024-1-24",
      direccionEnvio: "arriaga",
      estadoPedido: "completado",
      ticketsProducto: [
        {
          unidades: 2,
          formatoProducto: {
            idFormatoProducto: 1,
            formatoEnvase: "33cl",
            precioUnitario: 2,
            producto: {
              idProducto: 1,
              nombreProducto: "Cerveza Killer",
              descripcionProducto: "Producto estrella de nuestra compañía",
              fotoUrl: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              categoria: {
                idCategoria: 1,
                nombreCategoria: "Bebidas"
              },
            }
          },
        }
      ]
    },
    {
      idPedido: 2,
      idUsuario: 3,
      fechaPedido: "2024-02-10",
      direccionEnvio: "Centro",
      estadoPedido: "pendiente",
      ticketsProducto: [
        {
          unidades: 3,
          formatoProducto: {
            idFormatoProducto: 2,
            formatoEnvase: "50cl",
            precioUnitario: 2,
            producto: {
              idProducto: 2,
              nombreProducto: "Refresco Fizz",
              descripcionProducto: "Burbujeante y refrescante",
              fotoUrl: "https://c7.alamy.com/compes/hrt60y/latas-de-bebidas-de-diferentes-colores-sobre-fondo-blanco-3d-rendering-hrt60y.jpg",
              categoria: {
                idCategoria: 2,
                nombreCategoria: "Refrescos"
              },
            }
          },
        },
        {
          unidades: 1,
          formatoProducto: {
            idFormatoProducto: 3,
            formatoEnvase: "750ml",
            precioUnitario: 5,
            producto: {
              idProducto: 3,
              nombreProducto: "Vino Tinto Reserva",
              descripcionProducto: "Añada especial, sabor intenso",
              fotoUrl: "https://enriquetomas.com/cdn/shop/files/Vino-Tinto-Pruno-Crianza---D.O.-Ribera-del-Duero-NULL-1695368753938.jpg?v=1695368755&width=1500",
              categoria: {
                idCategoria: 3,
                nombreCategoria: "Vinos"
              },
            }
          },
        }
      ]
    }
  ];
}

const pedidos = extraerPedidos();
</script>

<template>
  <template v-for="(pedido, indexPedido) in pedidos">
    <article :id="pedido.idPedido">
      <dl>
        <dt>Pedido</dt>
        <dd>{{pedido.idPedido}}</dd>
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
        </tr>
        </thead>
        <tbody>
        <template v-for="(ticket, indexTicket) in pedido.ticketsProducto">
          <tr :id="ticket.formatoProducto.producto.idProducto">
            <td>{{ticket.formatoProducto.producto.categoria.nombreCategoria}}</td>
            <td>{{ticket.formatoProducto.producto.nombreProducto}}</td>
            <td>{{ticket.formatoProducto.producto.descripcionProducto}}</td>
            <td>{{ticket.formatoProducto.formatoEnvase}}</td>
            <td>{{ticket.unidades}}</td>
            <td>{{ticket.formatoProducto.precioUnitario}}€</td>
            <td>{{ticket.formatoProducto.precioUnitario * ticket.unidades}}€</td>
            <td><img :src="ticket.formatoProducto.producto.fotoUrl"></td>
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
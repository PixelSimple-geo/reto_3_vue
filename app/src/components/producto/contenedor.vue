<script setup>
import Carta from "@/components/producto/carta.vue";
import {ref} from "vue";
const productos = ref([
  {
    idProducto: 1,
    nombreProducto: "Vino Tinto Reserva",
    descripcionProducto: "Esta ‘rareza’ que llega desde la D.O. Valencia ha logrado nada menos que Medalla de Oro en Berliner Wein Trophy 2022 y altas puntuaciones en las guías más influyentes. Es Ceramic Monastrell Criado en Tinaja 2020, un tinto de monastrell que se suma a la tendencia de madurar en tinajas de barro. Toda la esencia de viñas viejas de una de las mejores variedades de nuestro país, la monastrell, en este singular y premiado tinto.",
    fotoUrl: "https://enriquetomas.com/cdn/shop/files/Vino-Tinto-Pruno-Crianza---D.O.-Ribera-del-Duero-NULL-1695368753938.jpg?v=1695368755&width=1500",
    categoria: {
      idCategoria: 1,
      nombreCategoria: "nombreCategoria"
    },
    formatosProducto: [
      {
        idFormatoProducto: 1,
        formatoEnvase: "33cl",
        unidades: 5,
        precioUnitario: 2
      },
      {
        idFormatoProducto: 2,
        formatoEnvase: "25cl",
        unidades: 2,
        precioUnitario: 1
      }
    ]
  },
  {
    idProducto: 2,
    nombreProducto: "Craft IPA",
    descripcionProducto: "Una cerveza artesanal con un amargor equilibrado y un aroma a lúpulo fresco.",
    fotoUrl: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoria: {
      idCategoria: 1,
      nombreCategoria: "Cervezas"
    },
    formatosProducto: [
      {
        idFormatoProducto: 3,
        formatoEnvase: "50cl",
        unidades: 4,
        precioUnitario: 3.5
      },
      {
        idFormatoProducto: 4,
        formatoEnvase: "75cl",
        unidades: 1,
        precioUnitario: 7
      }
    ]
  },
  {
    idProducto: 3,
    nombreProducto: "Queso Gourmet",
    descripcionProducto: "Un queso gourmet de alta calidad, elaborado con leche de oveja y con un proceso de maduración único. Disfruta de su sabor intenso y textura cremosa.",
    fotoUrl: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoria: {
      idCategoria: 3,
      nombreCategoria: "Quesos"
    },
    formatosProducto: [
      {
        idFormatoProducto: 5,
        formatoEnvase: "200g",
        unidades: 2,
        precioUnitario: 8
      },
      {
        idFormatoProducto: 6,
        formatoEnvase: "500g",
        unidades: 1,
        precioUnitario: 15
      }
    ]
  }
]);
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
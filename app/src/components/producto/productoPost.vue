<script setup>
import Contenedor from "@/components/producto/contenedor.vue";
</script>

<template>
  <form action="http://localhost/api/pedidos/store" method="post">
    <!-- Datos de pedido -->
    <div>
      <label for="direccionEnvio">Dirección de envío</label>
      <input id="direccionEnvio" name="direccionEnvio">
    </div>

    <!-- Datos de producto -->
    <Contenedor />
    <button type="submit">Realizar pedido</button>
  </form>
</template>

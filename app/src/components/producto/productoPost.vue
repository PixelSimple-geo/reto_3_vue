<script setup>
import Contenedor from "@/components/producto/contenedor.vue";
import axios from "axios";
import {useRouter} from "vue-router";

const router = useRouter();

const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const idCliente = JSON.parse(localStorage.getItem("user")).cliente.id;
  if (idCliente == null) return;
  const data = {
    idCliente: idCliente,
    direccionEnvio: formData.get("direccionEnvio"),
    idFormatoProducto: formData.getAll("idFormatoProducto[]"),
    unidades: formData.getAll("unidades[]")
  };
  const response = await axios.post('/api/pedidos/store', data);
  if (response.status >= 200 && response.status <= 299) {
    await router.push("/pedidos");
  }
};
</script>

<template>
  <form @submit="handleSubmit">
    <!-- Datos de pedido -->
    <div>
      <label for="direccionEnvio">Dirección de envío: </label>
      <input id="direccionEnvio" name="direccionEnvio">
    </div>

    <!-- Datos de producto -->
    <Contenedor />
    <button type="submit" class="btn btn-primary">Realizar pedido</button>
  </form>
</template>

<style scoped>
form {
  width: min(100rem, 100%);
  padding: 1em;
  margin-inline: auto;
  display: grid;
  gap: 1rem;
}

form input {
  width: min(20rem, 100%);
}

form > div {
  display: grid;
}

form button[type='submit'] {
  width: min(20rem, 100%);
  margin-inline: auto;
}
</style>

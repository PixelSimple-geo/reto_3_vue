<script setup>
import Contenedor from "@/components/producto/contenedor.vue";
import {useRouter} from "vue-router";
import {requestData} from "@/network.js";

const router = useRouter();

const enviarDatosFormulario = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = {
    direccionEnvio: formData.get("direccionEnvio"),
    idFormatoProducto: formData.getAll("idFormatoProducto[]"),
    unidades: formData.getAll("unidades[]")
  };
  try {
    await requestData('pedidos/store', "POST", data);
  } catch (error) {

  } finally {
    await router.push({name: "pedidos"});
  }
};
</script>

<template>
  <form @submit="enviarDatosFormulario">

    <!-- Datos de pedido -->
    <div>
      <label for="direccionEnvio">Dirección de envío: </label>
      <input id="direccionEnvio" name="direccionEnvio" required>
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

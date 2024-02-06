<script setup>
import {requestData} from "@/network.js";
import {computed, ref} from "vue";

async function enviarDatosFormulario(event) {
  event.preventDefault();
  try {
    const formData = new FormData(event.target);
    const data = {
      email: formData.get("email"),
      address: formData.get("address"),
      telefono: formData.get("telefono"),
      commentary: formData.get("commentary")
    };
    await requestData("mail", "POST", data);
    message.value = "Se ha enviado su formulario correctamente";
    statusCode.value = 200;
  } catch (error) {
    let responseObject = JSON.parse(error.message);
    message.value = responseObject.message;
    statusCode.value = responseObject.statusCode;
  }
}

const message = ref("");
const statusCode = ref(0);
const isError = computed(() => {
  return !(statusCode.value >= 200 && statusCode.value <= 299);
});
</script>

<template>
  <div class="card">
    <h1 class="card-title text-center">Trabaja con nosotros</h1>
    <div class="card-body">
      <p>
        Si estás interesado en establecer una colaboración con nuestra empresa,
        necesitamos realizar un análisis de tus requisitos y ubicación.
      </p>
      <p v-if="statusCode !== 0" class="alert text-center" :class="{'alert-danger': isError, 'alert-success': !isError}"
        role="alert">
        {{ message }}
      </p>
      <form @submit="enviarDatosFormulario">
        <div class="mb-3 form-floating">
          <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp">
          <label for="email">Correo electrónico</label>
        </div>
        <div class="mb-3 form-floating">
          <input class="form-control" id="address" name="address">
          <label for="address">Dirección de local</label>
        </div>
        <div class="mb-3 form-floating">
          <input type="tel" class="form-control" id="telefono" name="telefono">
          <label for="telefono">Número de teléfono</label>
        </div>
        <div class="mb-3 form-floating">
          <textarea class="form-control" id="commentary" name="commentary" rows="3"></textarea>
          <label for="commentary" class="form-label">Comentario</label>
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
h1 {
  margin-top: 1rem;
}

form {
  width: min(35rem, 100%);
  padding: 1em;
  margin-inline: auto;
}
p {
  padding: 1em;
  max-width: 80ch;
  text-align: justify;
  margin-inline: auto;
}
.card {
  max-width: 35rem;
  margin: auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  background-color: rgb(223, 219, 219);
}

.card-title {
  margin-top: 0;
}

.card-body {
  padding: 1rem;
}
</style>
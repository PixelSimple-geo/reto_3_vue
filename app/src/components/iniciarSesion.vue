<script setup>
import {ref} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";
import {checkAuthentication, setAuthenticationStatus} from "@/utility.js";

const codigoCliente = ref("");
const router = useRouter();
async function iniciarSesion() {
  let inputData = {codigo: codigoCliente.value};
  try {
    const response = await axios.post('http://localhost/api/sesion', inputData);
    let user = response.data;
    user.fecha = Date.now();
    localStorage.setItem("user", JSON.stringify(response.data));
    const intendedRoute = sessionStorage.getItem('intendedRoute');
    if (intendedRoute) {
      router.push(intendedRoute);
      sessionStorage.removeItem('intendedRoute');
    } else router.push({ name: 'home' });
    setAuthenticationStatus()
  } catch (error) {
    mensajeError.value = "Código no válido";
  }
}

const mensajeError = ref("");

if (checkAuthentication()) {
  router.push({ name: 'home' });
}
</script>

<template>
  <div class="box">
    <h1 class="text-center">Código de cliente</h1>
    <div class="text-center text-danger">
      <span>{{mensajeError}}</span>
    </div>
    <div>
      <input name="codigo" placeholder="código de cliente" v-model="codigoCliente">
      <button type="button" class="btn btn-primary" @click="iniciarSesion">Iniciar sesión</button>
    </div>
  </div>
</template>

<style>
#app {
  align-items: center;
}
</style>

<style scoped>
.box > * + * {
  margin-top: 1rem;
}

.box {
  background-color: rgba(33, 33, 33);
  color: white;
  border-radius: 10px;
  padding: 1em;
  width: min(30rem, 100%);
  margin-inline: auto;
}

.box div {
  width: min(15rem, 100%);
  gap: 0.5rem;
  margin-inline: auto;
  display: grid;
}
</style>
<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import {checkAuthentication, setAuthenticationStatus} from "@/utility.js";

import {requestData} from "@/network.js";

const codigoCliente = ref("");
const router = useRouter();

async function iniciarSesion() {
  try {
    let inputData = {codigo: codigoCliente.value};
    let token = await requestData("sesion", "POST", inputData);
    token["receivedAt"] = Date.now();
    localStorage.setItem("token", JSON.stringify(token));

    const intendedRoute = sessionStorage.getItem('intendedRoute');
    if (intendedRoute) {
      await router.push(intendedRoute);
      sessionStorage.removeItem('intendedRoute');
    } else await router.push({name: 'home'});
    setAuthenticationStatus();
  } catch (error) {
    mensajeError.value = JSON.parse(error.message).message;
  }
}

const mensajeError = ref("");

if (checkAuthentication()) {router.push({ name: 'home' });}
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
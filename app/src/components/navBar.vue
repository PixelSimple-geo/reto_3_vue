<script setup>defineProps(["usuarioEstaAutenticado"]);</script>

<template>
  <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand text-white">
        <img src="./icons/logo.png" width="90">
        Cerveza Killer
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </li>
          <li class="nav-item" v-if="!usuarioEstaAutenticado">
            <router-link class="nav-link" to="/trabajaConNosotros" >Trabaja con nosotros</router-link>
          </li>
          <li class="nav-item" v-if="usuarioEstaAutenticado">
            <router-link class="nav-link" to="/pedidos">Ver pedidos</router-link>
          </li>
          <li class="nav-item" v-if="usuarioEstaAutenticado">
            <router-link class="nav-link" to="/productos/add">Crear pedido</router-link>
          </li>
          <li class="nav-item" v-if="!usuarioEstaAutenticado">
            <router-link class="nav-link" to="/iniciarSesion">Iniciar sesión</router-link>
          </li>
          <li class="nav-item" v-if="usuarioEstaAutenticado">
            <router-link class="nav-link" to="/cerrarSesion">Cerrar sesión</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-link{
  color: white;
}
</style>

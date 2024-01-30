<script setup>

</script>

<template>
  <div class="box">
    <h1 class="text-center">Código de cliente</h1>
    <div>
      <input name="codigo" placeholder="código de cliente">
      <button type="button" class="btn btn-primary">Iniciar sesión</button>
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
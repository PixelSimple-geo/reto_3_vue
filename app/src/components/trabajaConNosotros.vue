<script setup>

</script>

<template>
  <div class="wrapper">
    <p>
      Para poder trabajar con nosotros, antes tenemos que realizar un estudio de tus requisitos y localización. Ubicados
      en la parte norte de la península, ciertos lugares como el Andalucía, no podemos proporcionar la misma rapidez de
      transporte. Debido a esto no realizamos encargos en andalucía. Para ver una lista completa de lugares a los que
      prestamos servicios, sigue este enlace <a href="#">ubicaciones</a>
    </p>
    <form>
      <p class="form-text">Nunca compartiremos tus datos con nadie más.</p>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Correo electrónico</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">Dirección de establecimiento</label>
        <input class="form-control" id="address">
      </div>
      <div class="mb-3">
        <label for="telefono" class="form-label">Número de teléfono</label>
        <input type="tel" class="form-control" id="telefono">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Comentario</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
  </div>
</template>

<style scoped>
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
  margin-block: 3rem 0;
}
</style>
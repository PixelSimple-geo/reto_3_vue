<script setup>

</script>

<template>
  <div class="hero-wrapper">
    <div class="hero-container">
      <img class="floating-img" src="../assets/beer3.png">
      <section>
        <h1>Cerveza Killer Death</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan massa in porta vulputate.
          Nunc neque odio, lacinia a mauris vel, interdum dictum velit. Vivamus porta in enim sed malesuada.
          Nullam eu gravida ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Quisque et facilisis lacus, eget viverra ligula. Etiam neque erat, tincidunt et lacinia vitae, sodales vel enim.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Duis aliquam justo turpis, quis dignissim purus vulputate a. Nulla facilisi.
          Nulla ac nibh sit amet quam dignissim laoreet. Cras in eros neque. Donec non egestas urna, eget faucibus nibh.
        </p>
      </section>
    </div>
  </div>
  <div class="presentacion-wrapper">
    <div class="presentacion">
    <h1 class="text-center">Lo que ofrecemos</h1>
    <p class="text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia, lacus ut semper euismod, erat enim pharetra
      nulla, sed condimentum ante neque id nulla. Morbi ac vulputate tortor. Vestibulum hendrerit consectetur sem,
      vitae pellentesque sem commodo vel. Quisque hendrerit vehicula tortor laoreet cursus. Nulla ut porttitor ligula.
      Fusce varius dolor mi, vel dapibus sem gravida nec. In turpis eros, aliquet a sagittis a, blandit nec mi.
      Sed laoreet eleifend consequat. Curabitur euismod hendrerit ipsum. Pellentesque habitant morbi tristique
      senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et
      netus et malesuada fames ac turpis egestas. Vivamus suscipit interdum magna, sed suscipit urna dignissim quis.
      Aliquam erat volutpat. Phasellus commodo ex nisl, at venenatis ante sodales porta. Fusce et molestie sem.
      Pellentesque faucibus augue eget venenatis congue.
    </p>
    <div>
      <div class="card">
        <img src="../assets/enviado.png" class="card-img-top" alt="Icono">
        <div class="card-body">
          <h5 class="card-title">Transporte</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div class="card">
        <img src="../assets/cupon.png" class="card-img-top" alt="Icono">
        <div class="card-body">
          <h5 class="card-title">Precio</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div class="card">
        <img src="../assets/eficiencia.png" class="card-img-top" alt="Icono">
        <div class="card-body">
          <h5 class="card-title">Eficacia</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div class="card">
        <img src="../assets/apreton-de-manos.png" class="card-img-top" alt="Icono">
        <div class="card-body">
          <h5 class="card-title">Contacto cercano</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div class="card">
        <img src="../assets/aplicacion.png" class="card-img-top" alt="Icono">
        <div class="card-body">
          <h5 class="card-title">Aplicación intuitiva</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  </div>
  </div>
  <div class="comentarios-wrapper">
    <h1 class="text-center">Comentarios</h1>
    <div class="comentarios">
      <div class="card">
        <img src="../assets/avatar.png" class="card-img-top" alt="Foto de perfil">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div class="card">
        <img src="../assets/avatar.png" class="card-img-top" alt="Foto de perfil">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div class="card">
        <img src="../assets/avatar.png" class="card-img-top" alt="Foto de perfil">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

p {
  max-width: 120ch;
}

.hero-wrapper {
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
}

.hero-container {
  --grid-column-width: 17.5rem;
  width: min(70rem, 100%);
  padding: 2em 1em;
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(var(--grid-column-width), 100%), 1fr));
  justify-items: center;
  align-items: center;
  gap: 1rem;
}

.hero-container img {
  max-width: 15rem;
}

.comentarios-wrapper {
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 2em 0;
}

.comentarios {
  width: min(70rem, 100%);
  padding: 1em;
  margin-inline: auto;
  --grid-column-width: 20rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(var(--grid-column-width), 100%), 1fr));
  justify-items: center;
  align-items: center;
  gap: 2rem;
}

.comentarios .card {
  background-color: rgba(33, 33, 33);
  color: white;
}

.card {
  padding: 1em;
}

.card-body {
  padding: unset;
}

.card-img-top {
  width: min(5rem, 100%);
}

.presentacion-wrapper {
  padding: 2rem 0;
  background-color: #c5a773;
}

.presentacion {
  padding: 1em;
}

.presentacion div {
  --grid-column-width: 20rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(var(--grid-column-width), 100%), 1fr));
  justify-items: center;
  align-items: center;
  gap: 2rem;
}

.presentacion p {
  margin-inline: auto;
}

.presentacion .card {
  background-color: inherit;
  border: unset;
}

</style>
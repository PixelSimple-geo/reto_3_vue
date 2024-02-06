<script setup>

</script>

<template>
  <div class="hero-wrapper">
    <div class="hero-container container p-5 text-light">
      <div class="row align-items-center justify-content-center">
        <section class="col-md-12 col-lg-6">
          <h1>Cerveza Killer Death</h1>
          <p>
            "Cerveza Killer Death" es una experiencia única en cada sorbo, diseñada para satisfacer los paladares más
            exigentes. Con una cuidadosa combinación de ingredientes de alta calidad y un proceso de elaboración
            artesanal, esta cerveza destaca por su sabor audaz y distintivo.
          </p>
        </section>
        <img class="floating-img col-md-12 col-lg-6" src="../assets/beer3.png" alt="Cerveza Killer Death">
      </div>
    </div>
  </div>
  <div class="presentacion-wrapper">
    <div class="presentacion text-black">
    <h1 class="text-center">Descubre Nuestros Servicios</h1>
    <p class="text-center">
      Somos una pequeña empresa dedicada a la distribución de cerveza en España.
    </p>
    <div class="container">
      <div class="row">
        <div class="card col-md-6 col-xl-4">
          <img src="../assets/enviado.png" class="card-img-top" alt="Icono">
          <div class="card-body">
            <h5 class="card-title">Servicio de Transporte</h5>
            <p class="card-text">Brindamos soluciones de transporte eficientes y seguras para garantizar la llegada puntual de tu cerveza.</p>
          </div>
        </div>
        <div class="card col-md-6 col-xl-4">
          <img src="../assets/cupon.png" class="card-img-top" alt="Icono">
          <div class="card-body">
            <h5 class="card-title">Precios Competitivos</h5>
            <p class="card-text">Ofrecemos los mejores precios del mercado, asegurando una excelente relación calidad-precio en cada compra.</p>
          </div>
        </div>
        <div class="card col-md-6 col-xl-4">
          <img src="../assets/eficiencia.png" class="card-img-top" alt="Icono">
          <div class="card-body">
            <h5 class="card-title">Eficacia Garantizada</h5>
            <p class="card-text">Nos comprometemos a brindar un servicio eficiente y de calidad, cumpliendo con los más altos estándares de satisfacción.</p>
          </div>
        </div>
        <div class="card col-md-6 col-xl-4">
          <img src="../assets/apreton-de-manos.png" class="card-img-top" alt="Icono">
          <div class="card-body">
            <h5 class="card-title">Contacto Personalizado</h5>
            <p class="card-text">Establecemos relaciones cercanas con nuestros clientes, asegurando una atención personalizada y eficaz.</p>
          </div>
        </div>
        <div class="card col-md-6 col-xl-4">
          <img src="../assets/aplicacion.png" class="card-img-top" alt="Icono">
          <div class="card-body">
            <h5 class="card-title">Aplicación intuitiva</h5>
            <p class="card-text">Nuestra plataforma cuenta con una interfaz fácil de usar, proporcionando una experiencia intuitiva y sin complicaciones.</p>
          </div>
        </div>
        <div class="card col-md-6 col-xl-4">
          <img src="../assets/medalla.png" class="card-img-top" alt="Icono de Ofertas Especiales">
          <div class="card-body">
            <h5 class="card-title">Ofertas Especiales</h5>
            <p class="card-text">Descubre nuestras promociones exclusivas y disfruta de ofertas irresistibles en la compra
              de cervezas de alta calidad que cautivarán a tus clientes.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  <div class="comentarios-wrapper">
    <h1 class="text-center">Opiniones</h1>
    <div class="comentarios">
      <div class="card col-md-6 col-lg-4">
        <img src="../assets/avatar.png" class="card-img-top" alt="Foto de perfil">
        <div class="card-body">
          <h5 class="card-title">Alejandro</h5>
          <p class="card-text">¡Increíble selección de cervezas! La entrega fue rápida y el servicio al cliente excelente. Definitivamente, volveré a comprar.</p>
        </div>
      </div>
      <div class="card col-md-6 col-lg-4">
        <img src="../assets/avatar.png" class="card-img-top" alt="Foto de perfil">
        <div class="card-body">
          <h5 class="card-title">Hannibal</h5>
          <p class="card-text">La variedad de cervezas es asombrosa. Siempre encuentro algo nuevo para probar. El proceso de compra es fácil y conveniente.</p>
        </div>
      </div>
      <div class="card col-md-6 col-lg-4">
        <img src="../assets/avatar.png" class="card-img-top" alt="Foto de perfil">
        <div class="card-body">
          <h5 class="card-title">Africanus</h5>
          <p class="card-text">La calidad de las cervezas superó mis expectativas. ¡Una experiencia de compra excelente y sabores inigualables!.</p>
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
}

.hero-container img {
  max-width: 15rem;
}

.card {
  padding: 1em;
}

.card-body {
  padding: unset;
}

.card-img-top {
  width: min(3.5rem, 100%);
}

.presentacion-wrapper {
  padding: 2rem 0;
  background-color: #c5a773;
}

.presentacion {
  padding: 1em;
}

.presentacion p {
  margin-inline: auto;
}

.presentacion .card {
  background-color: inherit;
  border: unset;
}

.presentacion .card-img-top {
  margin-inline: auto;
}

.presentacion .card-title {
  text-align: center;
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
  gap: 2rem;
}

.comentarios .card {
  background-color: rgba(33, 33, 33);
  width: 100%;
  color: white;
}

</style>
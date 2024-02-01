<script setup>
import {computed, defineProps, ref, watch} from "vue";
const props = defineProps({producto: Object});
const producto = props.producto;

const detalleAbierto = ref(false);
const checkboxInput = ref(false);
const formatoEnvaseInput = ref(producto.formatos_producto[0].id);
const unidadesInput = ref(1);

const precioUnitario = computed(() => {
  return producto.formatos_producto.find((formato) => formato.id === formatoEnvaseInput.value ).precioUnitario;
});

const precioTotal = computed(() => precioUnitario.value * unidadesInput.value);

const toggleDetalle = () => detalleAbierto.value = !detalleAbierto.value;
watch(checkboxInput, newValue => detalleAbierto.value = newValue);
</script>

<template>
  <article>
    <div class="menu-detalle" v-if="checkboxInput">
      <button type="button" @click="toggleDetalle" class="btn btn-primary">Detalle</button>
      <div class="detalle" :class="{ 'expandido': detalleAbierto, 'colapsado': !detalleAbierto }">
        <div>
          <label for="formato_envase">Formato del envase: </label>
          <select id="formato_envase" v-model="formatoEnvaseInput" name="idFormatoProducto[]">
            <option v-for="formatoProducto in producto.formatos_producto" :value="formatoProducto.id">
              {{formatoProducto.formatoEnvase}}
            </option>
          </select>
        </div>
        <p>Precio unitario: {{ precioUnitario }}€</p>
        <div>
          <label for="unidades">Unidades: </label>
          <input id="unidades" v-model="unidadesInput" name="unidades[]" type="number" min="1" max="5" size="5">
        </div>
        <p>Precio total: {{ precioTotal }}€</p>
      </div>
    </div>

    <section>
      <img :src="producto.fotoURL" alt="Imagen del producto">
      <div>
        <h1>{{producto.nombreProducto}}</h1>
        <p>{{producto.descripcionProducto}}</p>
        <label><input type="checkbox" v-model="checkboxInput"> Añadir a la cesta</label>
      </div>
    </section>

  </article>
</template>

<style scoped>
article {
  border: 1px solid black;
  position: relative;
}

article img {
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1/0.8;
}

article > p {
  text-align: justify;
}

article .menu-detalle {
  position: absolute;
  padding: 0.35em;
}

article .detalle {
  margin-top: 0.5rem;
  border: 1px solid black;
  transition: opacity 250ms;
  padding: 1em;
  background-color: white;
}

article .detalle.colapsado {
  opacity: 0;
}

article .detalle.expandido {
  opacity: 100%;
}

article section {
  display: flex;
  flex-direction: column;
  height: 100%;
}

article section div {
  flex-grow: 1;
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  padding: 0.5em;
}


</style>
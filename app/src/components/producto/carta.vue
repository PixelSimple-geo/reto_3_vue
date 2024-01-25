<script setup>
import {computed, defineProps, ref, watch} from "vue";
const props = defineProps({producto: Object});
const producto = props.producto;

const detalleAbierto = ref(false);
const checkboxInput = ref(false);
const formatoEnvaseInput = ref(producto.formatosProducto[0].idFormatoProducto);
const unidadesInput = ref(0);

const precioUnitario = computed(() => {
  return producto.formatosProducto.find((formato) => formato.idFormatoProducto === formatoEnvaseInput.value ).precioUnitario;
});

const precioTotal = computed(() => precioUnitario.value * unidadesInput.value);

const toggleDetalle = () => detalleAbierto.value = !detalleAbierto.value;
watch(checkboxInput, newValue => detalleAbierto.value = newValue);
</script>

<template>
  <article>
    <button @click="toggleDetalle">Detalle</button>
    <img :src="producto.fotoUrl">
    <h1>{{producto.nombreProducto}}</h1>
    <p>{{producto.descripcionProducto}}</p>
    <label>
      <input type="checkbox" v-model="checkboxInput">
      Añadir a la cesta
    </label>

    <div class="detalle" :class="{ 'expandido': detalleAbierto, 'colapsado': !detalleAbierto }">
      <div>
        <label for="formato_envase">Formato del envase: </label>
        <select id="formato_envase" v-model="formatoEnvaseInput">
            <option v-for="formatoProducto in producto.formatosProducto" :value="formatoProducto.idFormatoProducto">
              {{formatoProducto.formatoEnvase}}
            </option>
        </select>
      </div>
      <p>Precio unitario: {{ precioUnitario }}€</p>
      <div>
        <label for="unidades">Unidades</label>
        <input id="unidades" v-model="unidadesInput" type="number" min="0" max="5">
      </div>
      <p>Precio total: {{ precioTotal }}€</p>
    </div>

  </article>
</template>

<style scoped>
img {
  width: min(15rem, 100%);
}
article {
  border: 1px solid grey;
  padding: 0.5em;
  position: relative;
  background-color: white;
}

article button {
  position: absolute;
  top: 1.5%;
  right: 1.5%;
}

article > p {
  text-align: justify;
}

article .detalle {
  border: 1px solid black;
  position: absolute;
  top: 7.5%;
  z-index: 2;
  right: 1%;
  transition: opacity 250ms;
  padding: 1em;
  background-color: inherit;
}

article .detalle.colapsado {
  opacity: 0;
}

article .detalle.expandido {
  opacity: 100%;
}
</style>
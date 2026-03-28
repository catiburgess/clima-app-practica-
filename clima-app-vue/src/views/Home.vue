<template>
  <div class="container">
    <h1>Clima por Localidad</h1>

    <p v-if="autenticado" class="welcome-msg">
      Bienvenida/o {{ usuario.nombre }} 👋
    </p>

    <input
      v-model="busqueda"
      placeholder="Buscar ciudad"
    />

    <div class="cards">
      <div
        class="card"
        v-for="lugar in lugaresFiltrados"
        :key="lugar.id"
      >
        <h3>{{ lugar.nombre }}</h3>
        <p class="temp">{{ lugar.tempActual }} °C</p>
        <p>{{ lugar.estado }}</p>

        <router-link :to="`/lugar/${lugar.id}`">
          Ver detalle →
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { lugares } from "../data/lugares";

export default {
  data() {
    return {
      busqueda: "",
      lugares
    };
  },
  computed: {
    lugaresFiltrados() {
      return this.lugares.filter((l) =>
        l.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
      );
    },
    usuario() {
      return this.$store.getters.usuarioActual;
    },
    autenticado() {
      return this.$store.getters.autenticado;
    }
  }
};
</script>
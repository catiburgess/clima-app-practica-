<template>
  <div class="container">
    <h1>Mis favoritos</h1>

    <p v-if="!favoritos.length">No tienes lugares favoritos guardados.</p>

    <div class="cards" v-else>
      <div class="card" v-for="lugar in favoritos" :key="lugar.id">
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
  computed: {
    usuario() {
      return this.$store.getters.usuarioActual;
    },
    favoritos() {
      if (!this.usuario) return [];
      return lugares.filter((lugar) => this.usuario.favoritos.includes(lugar.id));
    }
  }
};
</script>
<template>
  <div class="container" v-if="lugar">
    <h2>{{ lugar.nombre }}</h2>

    <div class="detalle-actual">
      <p><strong>Temperatura actual:</strong> {{ lugar.tempActual }} °C</p>
      <p><strong>Estado:</strong> {{ lugar.estado }}</p>
    </div>

    <h3>Pronóstico</h3>

    <ul class="pronostico">
      <li v-for="dia in lugar.pronostico" :key="dia.dia">
        <span>{{ dia.dia }}</span>
        <span>{{ dia.min }}° / {{ dia.max }}°</span>
      </li>
    </ul>

    <router-link to="/">← Volver</router-link>
  </div>
</template>

<script>
import { lugares } from "../data/lugares";

export default {
  props: ["id"],
  computed: {
    lugar() {
      return lugares.find(l => l.id === Number(this.id));
    }
  }
};
</script>
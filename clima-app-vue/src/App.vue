<template>
  <div>
    <header class="topbar">
      <div class="topbar__content">
        <router-link to="/" class="brand">🌤️ Clima App</router-link>

        <nav class="nav-links">
          <router-link to="/">Home</router-link>
          <router-link v-if="autenticado" to="/favoritos">Favoritos</router-link>
          <router-link v-if="!autenticado" to="/login">Login</router-link>

          <span v-if="autenticado" class="user-info">
            Hola, {{ usuario.nombre }}
          </span>

          <button v-if="autenticado" @click="cerrarSesion">Cerrar sesión</button>
        </nav>
      </div>
    </header>

    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    usuario() {
      return this.$store.getters.usuarioActual;
    },
    autenticado() {
      return this.$store.getters.autenticado;
    }
  },
  methods: {
    cerrarSesion() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    }
  }
};
</script>
<template>
  <div class="container auth-box">
    <h1>Iniciar sesión</h1>

    <form @submit.prevent="iniciarSesion">
      <input
        v-model="email"
        type="email"
        placeholder="Correo electrónico"
      />

      <input
        v-model="password"
        type="password"
        placeholder="Contraseña"
      />

      <button type="submit">Ingresar</button>
    </form>

    <p v-if="error" class="error-msg">{{ error }}</p>

    <div class="demo-box">
      <p><strong>Usuario de prueba:</strong></p>
      <p>camila@clima.com / 1234</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    async iniciarSesion() {
      const ok = await this.$store.dispatch("login", {
        email: this.email,
        password: this.password
      });

      if (ok) {
        this.error = "";
        this.$router.push("/");
      } else {
        this.error = "Usuario o contraseña incorrectos";
      }
    }
  }
};
</script>
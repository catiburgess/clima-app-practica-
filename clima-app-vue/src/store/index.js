import { createStore } from "vuex";
import { usuarios } from "../data/usuarios";

export default createStore({
  state: {
    usuario: null,
    isAuthenticated: false
  },
  mutations: {
    setUsuario(state, usuario) {
      state.usuario = usuario;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.usuario = null;
      state.isAuthenticated = false;
    }
  },
  actions: {
    login({ commit }, { email, password }) {
      const usuarioEncontrado = usuarios.find(
        (u) => u.email === email && u.password === password
      );

      if (usuarioEncontrado) {
        commit("setUsuario", usuarioEncontrado);
        return true;
      }

      return false;
    },
    logout({ commit }) {
      commit("logout");
    }
  },
  getters: {
    usuarioActual: (state) => state.usuario,
    autenticado: (state) => state.isAuthenticated
  }
});
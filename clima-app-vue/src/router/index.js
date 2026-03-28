import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Detalle from "../views/Detalle.vue";
import Login from "../views/Login.vue";
import Favoritos from "../views/Favoritos.vue";
import store from "../store";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/lugar/:id", component: Detalle, props: true },
  {
    path: "/favoritos",
    component: Favoritos,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.autenticado) {
    next("/login");
  } else {
    next();
  }
});

export default router;
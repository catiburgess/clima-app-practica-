import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Detalle from "../views/Detalle.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/lugar/:id", component: Detalle, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
import { createRouter, createWebHistory } from 'vue-router';
import Index from "@/components/index.vue";
import Pedido from "@/components/pedido/pedido.vue";
import ProductoPost from "@/components/producto/productoPost.vue";
import TrabajaConNosotros from "@/components/trabajaConNosotros.vue";
import IniciarSesion from "@/components/iniciarSesion.vue";
import {checkAuthentication} from "@/utility.js";
import CerrarSesion from "@/components/cerrarSesion.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/index',
      name: 'home',
      component: Index
    },
    {
      path: "/trabajaConNosotros",
      component: TrabajaConNosotros
    },
    {
      path: "/iniciarSesion",
      name: 'iniciarSesion',
      component: IniciarSesion
    },
    {
      path: "/cerrarSesion",
      name: 'cerrarSesion',
      component: CerrarSesion
    },
    {
      path: '/pedidos',
      name: 'pedidos',
      component: Pedido,
      meta: { requiresAuth: true }
    },
    {
      path: "/productos/add",
      component: ProductoPost,
      meta: { requiresAuth: true }
    }
  ]
});

router.beforeEach((to, from, next) => {
  let isAuthenticated = checkAuthentication();
  if (to.matched.some((route) => route.meta.requiresAuth) && !isAuthenticated) {
    sessionStorage.setItem('intendedRoute', to.fullPath);
    console.log(to.fullPath);
    next({ name: 'iniciarSesion' });
  } else {
    next();
  }
});

export default router;


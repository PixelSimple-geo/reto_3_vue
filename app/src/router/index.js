import { createRouter, createWebHistory } from 'vue-router'
import Productos from "@/components/producto/productos.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Productos
    },
    {
      path: '/productos',
      name: 'productos',
      component: Productos
    },
  ]
})

export default router

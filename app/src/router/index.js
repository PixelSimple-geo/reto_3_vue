import { createRouter, createWebHistory } from 'vue-router'
import Productos from "@/components/producto/productos.vue";
import ProductoPost from "@/components/producto/productoPost.vue";

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
    {
      path: "/productos/add",
      component: ProductoPost
    }
  ]
})

export default router

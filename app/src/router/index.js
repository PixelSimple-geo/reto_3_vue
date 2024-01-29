import { createRouter, createWebHistory } from 'vue-router'
import Index from "@/components/index.vue";
import Productos from "@/components/producto/productos.vue";
import ProductoPost from "@/components/producto/productoPost.vue";

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

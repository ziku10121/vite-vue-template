import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    alias:'/Home', //讓一個元件回應多個路徑，可使用別名（alias）功能
    name: 'Home',
    component: () => import('../views/home/index.vue')
  },
  {
    path:'/originHome',
    name: 'originHome',
    component: () =>　import('../views/Home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Cardapio from '../views/cardapio.vue'
import Delivery from '../views/delivery.vue'
import Reservas from '../views/Reservas.vue'
import Clientes from '../views/Clientes.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/cardapio',
    component: Cardapio
  },
  {
    path: '/delivery',
    component: Delivery
  },
  {
    path: '/reservas',
    component: Reservas
  },
  {
    path: '/clientes',
    component: Clientes
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 
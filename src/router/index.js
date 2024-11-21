/* eslint-disable vue/multi-word-component-names */

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CrearComponente from '../components/CrearComponente.vue'
import EditarComponente from '../components/EditarComponente.vue'
import ListarComponente from '../components/ListarComponente.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/CrearComponente',
    name: 'CrearComponente',
    component: CrearComponente
  },
  {
    path: '/EditarComponente/:id', // Asegúrate de que el :id esté presente
    name: 'EditarComponente',
    component: EditarComponente
  },
  
  {
    path: '/ListarComponente',
    name: 'ListarComponente',
    component: ListarComponente
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

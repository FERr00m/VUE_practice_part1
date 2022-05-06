import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView'
import ForgetView from '@/views/ForgetView'
import DashboardView from '@/views/DashboardView'
import MailView from '@/views/MailView'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    alias: '/'
  },
  {
    path: '/forget',
    name: 'forget',
    component: ForgetView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/mail/:mailId?',
    name: 'mail',
    component: MailView
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
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
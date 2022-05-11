import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView'
import ForgetView from '@/views/ForgetView'
import DashboardView from '@/views/DashboardView'
// import MailView from '@/views/MailView'
import AppEmailBody from '@/components/AppEmailBody'
import ErrorView from '@/views/ErrorView'

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
    component: ForgetView,
    meta: {
      cantEnter: true
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    beforeEnter () {
      console.log('beforeEnter')
    },
    component: DashboardView
  },
  {
    path: '/mail',
    name: 'mail',
    children: [
      {
        path: ':mailId?',
        component: AppEmailBody,
        props: true
      }
    ],
    component: () => import(/* webpackChunkName: "mail" */ '@/views/MailView.vue')
  },
  {
    path: '/:notFound(.*)',
    name: '404',
    component: ErrorView
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  console.log('beforeEach')
  if (to.meta.cantEnter) {
    next({ name: 'dashboard' })
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  //
})

export default router

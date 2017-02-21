import Vue from 'vue'
import VueRouter from 'vue-router'

import Welcome from '../views/welcome'
import Form from '../views/form'

Vue.use(VueRouter)

const routes = [
  {
    path: '/welcome',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/form',
    name: 'form',
    component: Form
  },
  {
    path: '*',
    redirect: '/welcome'
  }
]

export default new VueRouter({
  // mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})

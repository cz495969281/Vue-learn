import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import(/* webpackChunkName: 'login' */ '../views/Login.vue')
const Reg = () => import(/* webpackChunkName: 'Reg' */ '../views/Reg.vue')
const Forget = () => import(/* webpackChunkName: 'Forget' */ '../views/Forget.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/reg',
    name: 'reg',
    component: Reg
  },
  {
    path: '/forget',
    name: 'forget',
    component: Forget
  }
]

const router = new VueRouter({
  routes
})

export default router

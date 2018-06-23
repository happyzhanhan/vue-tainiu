import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/My'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Profit from '@/components/Profit'
import Withdrawal from '@/components/Withdrawal'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
          name: 'Login',
        component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/profit',
      name: 'Profit',
      component: Profit
    },
    {
      path: '/withdrawal',
      name: 'Withdrawal',
      component: Withdrawal
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

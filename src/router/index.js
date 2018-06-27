import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/My'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Profit from '@/components/Profit'
import Withdrawal from '@/components/Withdrawal'
import Send from '@/components/Send'
import Sendproduct from '@/components/Sendproduct'
import Sendnone from '@/components/Sendnone'
import Order from '@/components/Order'
import Reserve from '@/components/Reserve'
import Pay from '@/components/Pay'
import Adresslist from '@/components/Adresslist'
import Addadress from '@/components/Addadress'
import Myteam from '@/components/Myteam'

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
    },
    {
      path: '/send',
      name: 'Send',
      component: Send
    },
    {
      path: '/sendproduct',
      name: 'Sendproduct',
      component: Sendproduct
    },
    {
      path: '/sendnone',
      name: 'Sendnone',
      component: Sendnone
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },{
      path:'/reserve',
      name:'Reserve',
      component:Reserve
    },{
      path:'/pay',
      name:'Pay',
      component:Pay
    },{
      path:'/adresslist',
      name:'Adresslist',
      component:Adresslist
    },{
      path:'/addadress',
      name:'Addadress',
      component:Addadress
    },{
      path:'/myteam',
      name:'Myteam',
      component:Myteam
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

import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/Login'
import Main from '@/views/main/Main'
import Order from '@/views/order/Order'
import Publish from '@/views/publish/Publish'
import Mine from '@/views/mine/Mine'
import Resign from '@/views/resign/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }, {
      path: '/main',
      name: 'Main',
      component: Main,
      children: [{
        path: '/',
        name: 'default',
        component: Order
      }, {
        path: 'publish',
        name: 'Publish',
        component: Publish
      }, {
        path: 'mine',
        name: 'Mine',
        component: Mine
      }]
    }, {
      path: '/resign',
      name: 'Resign',
      component: Resign
    }
  ]
})

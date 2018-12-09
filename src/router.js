import Vue from 'vue'
import Router from 'vue-router'
import user from './views/user.vue'
import admin from './views/admin.vue'
import home from './views/Home.vue'
import error from './views/error.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path : '/',
      name : "home",
      component : home
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path : '*',
      name : "error",
      component : error
    }
  ]
})

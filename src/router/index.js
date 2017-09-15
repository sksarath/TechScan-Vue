import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import repository from '@/pages/repository'
import profile from '@/pages/profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/repositories/:langId',
      name: 'repository',
      component: repository
    },
    {
      path: '/profile/:profileId',
      name: 'profile',
      component: profile
    }
  ],
  mode: 'history'
})

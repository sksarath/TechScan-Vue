import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/pages/Hello'
import repository from '@/pages/repository'
import profile from '@/pages/profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
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

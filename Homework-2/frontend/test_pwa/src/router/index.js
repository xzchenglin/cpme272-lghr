import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/Home',
      name: 'Home',
      component: Profile
    },
    {
      path: '/Tweet',
      name: 'Tweet',
      component: Profile
    },
    {
      path: '/Search',
      name: 'Search',
      component: Profile
    },
  ]
})

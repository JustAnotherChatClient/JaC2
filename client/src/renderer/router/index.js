import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/main',
      name: 'main-page',
      component: require('@/components/MainPage').default
    },
    {
      path: '*',
      redirect: '/main'
    },
    {
      path: '/settings',
      name: 'settings-page',
      component: require('@/components/Settings').default
    },
    {
      path: '/friends',
      name: 'friends-page',
      component: require('@/components/Friends').default
    },
    {
      path: '/AddFriend',
      name: 'friends-page',
      component: require('@/components/AddFriend').default
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Starter from '@/components/Starter'
import Vuejs from '@/components/technology/Vuejs'
import SpringBoot from '@/components/technology/SpringBoot'
import Bootstrap from '@/components/technology/Bootstrap'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {
      path: '/',
      name: 'starter',
      component: Starter
    },
    {
      path: '/vuejs',
      name: 'vuejs',
      component: Vuejs
    },
    {
      path: '/spring-boot',
      name: 'spring-boot',
      component: SpringBoot
    },
    {
      path: '/bootstrap',
      name: 'bootstrap',
      component: Bootstrap
    }
  ]
})

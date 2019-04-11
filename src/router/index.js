import Vue from 'vue'
import Router from 'vue-router'
import moishe from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'moishe',
      component: moishe
    }
  ]
})

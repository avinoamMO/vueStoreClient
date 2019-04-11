import Vue from 'vue'
import Router from 'vue-router'
import productPage from '@/components/productPage'
import productList from '@/components/productList'
import cartPage from '@/components/cartPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'productList',
      component: productList
    }
  ]
})

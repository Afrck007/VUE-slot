import Vue from 'vue'
import Router from 'vue-router'
import index from './components/index.vue'
import cassify from './components/cassify.vue'
import my from './components/my.vue'
import shop from './components/shop.vue'
import surprise from './components/surprise.vue'





Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'',
      component:index
    },
    {
      path:'/index',
      component:index
    },
    {
      path:'/cassify',
      component:cassify
    },{
      path:'/my',
      component:my
    },{
      path:'/shop',
      component:shop
    },{
      path:'/surprise',
      component:surprise
    },

  ]
})
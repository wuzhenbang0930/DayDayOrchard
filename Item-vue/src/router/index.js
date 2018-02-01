import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import classify from '@/components/classify'
import detail from '@/components/detail'
import iroot from '@/components/root'
import details from '@/components/details'
import detaila from '@/components/detaila'
import sousuo from '@/components/sousuo'
import cart from '@/components/cart'
import login from '@/components/login'
import myhome from '@/components/myhome'
import map from '@/components/map'



Vue.use(Router)

export default new Router({
 
  routes: [
      {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path : "/classify",
    	name:"classify",
    	component:classify
    },
    {
      path : "/classify/:fid",
      name : "listmain",
      component : classify
    },
   {
      path: '/detail:fid',
      name: 'detail',
      component: detail

    },
    {
      path : '/iroot:fid',
      name : 'iroot',
      component : iroot


    },
    {
      path: '/details:fid',
      name: 'details',
      component: details

    },
     {
      path: '/detaila:fid',
      name: 'detaila',
      component: detaila
    },
      {
      path: '/sousuo',
      name: 'sousuo',
      component: sousuo
    },

     {
      path: '/cart',
      name: 'cart',
      component: cart,
      meta:{auth:true} 
    },

    {
      path : "/login",
      name : 'login',
      component : login
    },
    {
      path : '/myhome',
      name : 'myhome',
      component : myhome,
      meta:{auth:true} 
    },
    {
      path: '/map',
      name: 'map',
      component: map
    }

    

  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import classify from '@/components/classify'

import detail from '@/components/detail'
<<<<<<< HEAD
import iroot from '@/components/root'


=======
import details from '@/components/details'
import detaila from '@/components/detaila'
>>>>>>> bb4cb502da05b9a60457bb1bba3e47ca96cc05ed
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
<<<<<<< HEAD
    },
    {
      path : '/iroot:fid',
      name : 'iroot',
      component : iroot
=======

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

>>>>>>> bb4cb502da05b9a60457bb1bba3e47ca96cc05ed
    }

    
  ]
})

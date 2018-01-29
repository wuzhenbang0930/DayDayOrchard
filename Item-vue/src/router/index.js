import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import classify from '@/components/classify'



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
      component : listmain
    }
  ]
})

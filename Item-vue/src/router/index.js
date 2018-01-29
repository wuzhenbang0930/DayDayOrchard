import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
<<<<<<< HEAD
import classify from '@/components/classify'


=======
import detail from '@/components/detail'
>>>>>>> 358e8153ba91a37c2de5ad5481e3d15fa0c71af5

Vue.use(Router)

export default new Router({
 
  routes: [
      {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
<<<<<<< HEAD
    	path : "/classify",
    	name:"classify",
    	component:classify
    },
    {
      path : "/classify/:fid",
      name : "listmain",
      component : listmain
=======
      path: '/detail:fid',
      name: 'detail',
      component: detail
>>>>>>> 358e8153ba91a37c2de5ad5481e3d15fa0c71af5
    }
  ]
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from "jquery"
import store from './vuex'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI);




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to,from,next) => {   

	if(to.matched.some( m => m.meta.auth)){     

	// 对路由进行验证     
	if(store.state.isLogin=="100") { // 已经登陆       
		next()   // 正常跳转到你设置好的页面     
	}		
	else{       

	// 未登录则跳转到登陆界面，query:{ Rurl: to.fullPath}表示把当前路由信息传递过去方便登录后跳转回来；

　　 　　　　next({path:'/login'})
 　　　　　} 
　　　　}else{ 
　　　　　　next() 
　　} 
})

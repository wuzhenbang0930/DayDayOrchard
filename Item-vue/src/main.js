// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
=======

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI);
>>>>>>> 358e8153ba91a37c2de5ad5481e3d15fa0c71af5



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

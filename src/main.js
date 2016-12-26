
// router坑1:必须命名为routes

import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routers'
import App from './App.vue'
// import store from './vuex/store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

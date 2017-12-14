// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './vuex/store'
import axios from 'axios'
Vue.prototype.$ajax = axios
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)

const routers = new VueRouter({
  mode: 'history',
  routes: router
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  routers,
  store,
  template: '<App/>',
  components: { App }
})

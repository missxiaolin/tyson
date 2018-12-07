// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'

import 'babel-polyfill'
// import 'es6-promise/auto'
import promise from 'es6-promise'

// 过滤器
import * as filters from './filters'

// vuex
import store from './store'

// 权限
import './permission'
promise.polyfill() // global filters

// register global utility filters.  过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})

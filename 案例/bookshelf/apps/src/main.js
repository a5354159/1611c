// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "swiper/dist/css/swiper.css"
import swiper from "vue-awesome-swiper"
Vue.use(swiper)
import "../static/iconfont/iconfont.css"
Vue.config.productionTip = false

import axios from "axios"
Vue.prototype.http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

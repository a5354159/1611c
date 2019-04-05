// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios";
import 'swiper/dist/css/swiper.min.css'
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.prototype.ajax =axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

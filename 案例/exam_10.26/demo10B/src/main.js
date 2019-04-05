import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
let vm = new Vue()
Vue.prototype.bus = vm;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
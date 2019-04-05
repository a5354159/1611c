import Vue from 'vue'
import App from './App.vue'
import "./js/flexible";
import axios from "axios";
Vue.prototype.$ajax = axios;
Vue.prototype.$bus = new Vue();

new Vue({
    el: '#app',
    render: h => h(App)
})
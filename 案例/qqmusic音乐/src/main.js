// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import ElementUI from "element-ui";
import VueRouter from 'vue-router'
import App from './App';
import "./css/style.css";
import "./css/music.css";
import router from "./router/index"

Vue.use(VueRouter)
Vue.use(ElementUI)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
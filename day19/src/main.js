import Vue from 'vue';
import App from './App';
import router from './router';
import './iconfont/iconfont.css';
import 'swiper/dist/css/swiper.min.css';
import axios from 'axios';
Vue.config.productionTip = false
Vue.component('Footer', () =>
    import ('@/components/Footer'));
Vue.component('Banner', () =>
    import ('@/components/Banner'));
Vue.component('Scrllo', () =>
    import ('@/components/Scrllo'));
Vue.prototype.$bus = new Vue();
Vue.prototype.$http = axios;
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
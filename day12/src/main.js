import Vue from 'vue'
import App from './App'
import router from './router';
Vue.config.productionTip = false
    // Vue.directive('focus', {
    //     inserted(el, obj) {
    //         console.log(el);
    //     }
    // });

/* eslint-disable no-new */
// Vue.directive('focus', {
//     inserted(el) {
//         console.log(el);
//     }
// });

Vue.directive('bg', {
    inserted(el, obj) {
        console.log(el, obj);
        el.style.background = obj.value;
    }
});

Vue.directive('img', {
    inserted(el, obj) {
        let color = Math.floor(Math.random() * 1000000);
        el.style.background = '#' + color;
        console.log(el, obj);

        let img = new Image();
        img.src = obj.value;
        img.onload = () => {
            el.style.backgroundImage = 'url(' + obj.value + ')';
            el.style.backgroundSize = '100% 100%';
        }
    }
});
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
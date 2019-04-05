export default {
    install(Vue) { //自定义插件
        Vue.component('myHeader', () =>
            import ('@/components/my-header')
        );
        Vue.component('Seach', () =>
            import ('@/components/seach')
        );
        Vue.component('myList', () =>
            import ('@/components/myList')
        );
        Vue.prototype.$bus = new Vue();
    }


}
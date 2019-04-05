export default {
    install(Vue) {
        ('footer', () =>
            import ('@/components/Footer')
        );
        this.prototype.$bus = new Vue()
    }
}
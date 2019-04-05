<template>
    <div class="box">
        <Tab/>
        <section>
            <router-view></router-view>
        </section>
        <Foot/>
    </div>
</template>

<script>
    import Tab from '../libs/tab.vue'
    import Foot from '../libs/foot.vue'
    export default {
        components: {
            Tab,
            Foot
        }
    };
</script>
<style>
    * {
        margin: 0;
        padding: 0
    }
</style>
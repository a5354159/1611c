<template>
    <header>
        <span @click="goBack" v-if="back"> <</span>
        <slot :aa="list" name="default"></slot>
        <div>
            <slot name="button"></slot>
        </div>
        <span>...</span>
    </header>
</template>
<script>
export default {
    props:['back'],
    data(){
        return{
            list:[
                {
                    title:'商品'
                },
                {
                    title:'详情'
                },
                {
                    title:'评价'
                }
            ]
        }
    },
    created() {
        console.log(this);
    },
    methods: {
        goBack(){
            // window.history.go(-1);
            window.history.back();
        }
    },
}
</script>
<style rel="stylesheet/scss" lang="scss">
@import '../scss/common.scss';
@import '../scss/_mixin.scss';
    header{
        height: pxTorem(44px);
        width: 100%;
        @include box_flex;
        @include justify(space-between);
        @include align;
        padding: 0 pxTorem(10px);
        @include sizing;
        background: lavenderblush;
        font-size: pxTorem(16px);
    }
</style>


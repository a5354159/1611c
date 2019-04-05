<template>
    <header>
        <span @click="go" v-show="back"><</span>
        <slot :list="list" name="default" :names="1111"></slot>
        <div>
           <slot name="search"></slot>
        </div>
        <span>...</span>
        
    </header>
</template>
<script>
export default {
    props:{
        back:{
            type:Boolean,
            default:true
        }
    },
    data(){
        return {
            list:[
                {
                    title:"商品"
                },
                {
                    title:"详情"
                },{
                    title:"评论"
                }
            ]
        }
    },
    created() {
        console.log(this);
    },
    methods: {
        go(){
            window.history.back();
        }
    },
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import '../scss/common.scss'; 
@import '../scss/_mixin.scss';
    header{
        height: pxTorem(44px);
        width: 100%;
        background: lavenderblush;
        margin-bottom: pxTorem(10px);
        @include box_flex;
        @include align;
        @include justify(space-between);
        span{
            width: pxTorem(100px);
        }
        ul{
            @include box_flex;
        }
    }
</style>

<template>
    <header>
        <span><</span>
        <slot :lists="list">666</slot>
        <!-- <slot :list="list" name="aa" :names="1111"></slot> -->
        <div>
            <slot name="button"></slot>
        </div>

        <span>...</span>
    </header>
</template>
<script>
export default {
    data(){
        return{
            list:[
                {
                    title:"商品"
                },{
                    title:"详情"
                },
                {
                    title:"评论"
                }
            ]
        }
    },
    created() {
        console.log(this);
    },
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import "../scss/common.scss";
@import "../scss/_mixin.scss";
    header{
        height: pxTorem(44px);
        width: 100%;
        background: lavenderblush;
        font-size: pxTorem(16px);
        @include box_flex;
        @include justify(space-between);
        @include align;
        padding:  0 pxTorem(10px);
        @include sizing;
        margin-bottom: pxTorem(10px);
    }
</style>


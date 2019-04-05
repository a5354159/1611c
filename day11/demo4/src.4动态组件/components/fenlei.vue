<template>
    <div class="fenlei">
        <ul class="left">
            <li v-for="(item,i) in list" :key="i" @click="index = i" :class="{'active':index==i}">{{item}}</li>
           
        </ul>
        <div class="right">
            右侧
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            list:['女装','男装','男鞋','女鞋'],
            index:0
        }
    },
    methods: {
        
    },
    destroyed() {
        console.log('fenlei');
    },
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../scss/common.scss";
@import "../scss/_mixin.scss";
div.fenlei{
    @include box_flex;
}
li.active{
    color: red;
}
</style>

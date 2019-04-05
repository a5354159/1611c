<template>
    <div class="header">
        <span class="active">菜单</span>
        <span>评价</span>
        <span>商家</span>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    @import '../scss/_minix.scss';
    @import '../scss/common.scss';
    .header{
        width: 100%;
        height: pxTorem(56px);
        @include box_flex;
        border-bottom:1px solid #ccc; 
        @include align(center);
        @include justify(space-around);
        span{
            text-align:center;
            height: pxTorem(56px);
            &.active{
            border-bottom:2px solid #F9D213; 
            font-weight: 800;
        }
        }
        
    }
</style>

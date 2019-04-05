<template>
    <header>
        <span>左侧</span>
        <p>1611C</p>
        <span></span>
    </header>
</template>
<script>
export default {
    data(){
        return {}
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import '../scss/common.scss'; 
@import '../scss/_mixin.scss';
    header{
        height: pxTorem(44px);
        width: 100%;
        background: pink;
        @include box_flex;
        font-size: pxTorem(16px);
        @include align;
        span{
           
            width: pxTorem(100px);
            display: block;
        }
        p{
            @include flex;
            font-size: pxTorem(18px);
        }
    }
</style>

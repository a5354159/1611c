<template>
    <div class="footer">
        <div>
            <img src="" alt="">
            <span>另需配送费￥5</span>
        </div>
        <span>￥0起送</span>
    </div>

</template>
<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    @import '../scss/_minix.scss';
    @import '../scss/common.scss';
    .footer{
        width: 100%;
        height: pxTorem(200px);
        background: #3B3B3B; 
        @include box_flex;
        @include  justify(space-between);
        @include align(center);
        padding: 0 20px;
        @include sizing;
        font-size:pxTorem(50px); 
    }
</style>

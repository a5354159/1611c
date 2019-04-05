<template>
    <div class="prize">
        <div class="p-b">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="p-t" :style="{width:shopPower/50*100+'%'}">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>
<script>
export default {
    props:['shopPower']
}
</script>
<style lang="scss">
    .prize{
        width:110px;
        height:20px;
        position: relative;
        &>div{
            display: flex;
            position: absolute;
            top:0;
            left:0;
            overflow: hidden;
        }
        span{
            width:20px;
            height:20px;
            display: block;
            margin-right:2px;
            flex-shrink: 0;
        }
    }
    .p-b{
        span{
            background: #999;
        }
    }
    .p-t{
        span{
            background: red;
        }
    }
</style>


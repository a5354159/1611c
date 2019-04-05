<template>
    <div class="footer">
        <input type="text" v-model="val">
        <button @click="$emit('addConent',val)">发送</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            val:''
        }
    }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import '../scss/common.scss'; 
@import '../scss/_mixin.scss';
    .footer{
        height: pxTorem(50px);
        width: 100%;
        background: paleturquoise;
        @include box_flex;
        button{
            width: pxTorem(100px);
            height: 100%;
            background: red;
        }
        input{
            @include flex;
            padding: 0 pxTorem(15px);
            @include sizing;
            width: pxTorem(100px);
            font-size: pxTorem(16px);
        }
    }
</style>

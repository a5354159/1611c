<template>
    <footer>
        <input type="text" v-model="val">
        <button @click="$emit('addclick',val)">发送</button>
    </footer>

</template>
<script>
export default {
    data(){
        return{
            val:""
        }
    }

}
</script>


<style rel="stylesheet/scss" lang="scss" scoped>
    @import '../scss/_minix.scss';    
    @import '../scss/common.scss';    
    footer{
        width: 100%;
        height: pxTorem(40px);
        background: aqua;
        font-size: pxTorem(16px);
        display: flex;
        input{
            flex: 1;
        }
        button{
            width:100px;
            height: 100%;
        }
    }
</style>

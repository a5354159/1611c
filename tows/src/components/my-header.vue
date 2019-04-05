<template>
    <header>
        头部
    </header>

</template>
<script>
export default {
    data(){
        return{

        }
    }

}
</script>


<style rel="stylesheet/scss" lang="scss" scoped>
    @import '../scss/_minix.scss';    
    @import '../scss/common.scss';    
    header{
        width: 100%;
        height: pxTorem(40px);
        background: aqua;
        font-size: pxTorem(16px);
        text-align: center;
        line-height: pxTorem(40px);
    }

</style>

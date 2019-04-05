<template>
    <dl >
        <dt>
            <img src="" alt="">
        </dt>
        <dd>
            <p>{{names}}</p>
        </dd>
    </dl>
    

</template>
<script>
export default {
    props:["names"],
    data(){
        return{

        }
    }

}
</script>


<style rel="stylesheet/scss" lang="scss" scoped>
    @import '../scss/_minix.scss';    
    @import '../scss/common.scss';    
    dl{
        font-size: pxTorem(16px);
        width: 100%;
        height: 60px;
        border-bottom: 1px solid #ccc;
        display: flex;
        align-items: center;
        dt{
            width: 50px;
            height: 50px;
            background: red;
        }
        dd{
            margin-left: 10px;
        }
    }

</style>

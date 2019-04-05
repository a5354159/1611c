<template>
    <dl>
        <dt>
            <img :src=img alt="">
        </dt>
        <dd>
            <h2>{{title}}</h2>
            <p>￥<b>{{price}}</b></p>
            <Count :title="title" :price="price" :id="id" :img="img"></Count>
        </dd>
    </dl>
</template>
<script>
import Count from "./count";
export default {
    props:['title','price','img',"id"],
    components:{
        Count
    }
}
</script>
<style lang="scss">
@import "../scss/common.scss";
@import "../scss/_minix.scss";
dl{
    width: 100%;
    height: pxTorem(100px);
    display: flex;
    margin: pxTorem(10px) 0;
    background: white;
    box-shadow: #ccc 5px 5px 5px;
    img{
        width: pxTorem(80px);
        height: pxTorem(80px);
        border-radius: 50%;
        margin: pxTorem(10px);
    }
    dd{
        position: relative;
        h2{
            font-size: pxTorem(18px);
            margin-top: pxTorem(15px);
        }
        p{
            margin-top: pxTorem(10px);
            font-size: pxTorem(16px);
            b{
                color: red;
            }
        }
    }
}

</style>

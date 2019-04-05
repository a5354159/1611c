<template>
    <dl class="pro-item">
        <dt>
            <img :src="url" alt="">
        </dt>
        <dd>
            <h4>{{title}}</h4>
            <span>{{price}}</span>
            <el-content :num="num" :id="id"></el-content>
        </dd>
    </dl>
</template>
<script>
import elContent from './elContent'
export default {
    props:['url','title','price','num','id'],
    components:{
        elContent
    }
}
</script>
<style lang="scss">
    .pro-item{
        width:100%;
        display: flex;
        border-bottom:1px solid gray;
        dt{
            width:80px;
            height:80px;
            img{
                width:100%;
                height: 100%;
            }
        }
    }
</style>


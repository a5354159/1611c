<template>
    <dl class="pro-item">
        <dt>
            <img :src="url" alt="">
        </dt>
        <dd>
            <h4>{{title}}</h4>
            <span>金汤酸菜鱼 娃娃菜 鲜豆皮 黑鱼</span>
            <span>月售16   赞0</span>
            <h6>￥{{price}}<el-content :num="num" :id="id"></el-content></h6>
            
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
        padding: 0 5px;
        dt{
            width:150px;
            height:80px;
            img{
                width:100%;
                height: 100%;
                margin-top:2px;
            }
        }
        dd{
            padding: 0 10px;
            span{
                font-size: 13px;
                color:#ccc;
            }
            h6{
                font-size: 18px;
                color:crimson;
                display: flex;
                justify-content: space-between;
                padding: 0 10px;
            }
        }
    }
</style>


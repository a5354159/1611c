<template>
    <ul>
        <li>
            <span>商品名称：{{title}}</span>
            <span>商品价格：{{price}}</span>
            <my-count :num="num" :id="id"></my-count>
        </li>
    </ul>
</template>
<script>
import myCount from './my-count';
export default {
    props:['title','num','price','id'],
    data(){
        return{}
    },
    components:{
        myCount
    }
}
</script>

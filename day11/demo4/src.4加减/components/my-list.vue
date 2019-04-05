<template>
    <ul>
        <li>
            <span>商品名称{{title}}</span>
            <span>商品价格：{{price}}</span>
            <count :num="num" :id="id"></count>
        </li>
    </ul>
</template>
<script>
import count from './count';
export default {
    props:['title','num','price','id'],
    data(){
        return {

        }
    },
    components:{
        count
    }
}
</script>

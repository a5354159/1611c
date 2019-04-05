<template>
    <ul>
        <li>
            <span>商品名称：{{title}}</span>
            <span>商品价格：{{price}}</span>
            <my-list :num="num" :id="id"></my-list>
        </li>
    </ul>
</template>
<script>
import myList from './my-list';
import Eventbus from '../js/eventbus';
export default {
    props:['num','title','price','id'],
    data(){
        return {
           
        }
    },
    components:{
        myList
    }
}
</script>

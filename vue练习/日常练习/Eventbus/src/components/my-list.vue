<template>
    <div>
        <ul>
            <li>
                <span>商品名称：{{name}}</span><span>商品价格：{{pic}}</span>
                <my-count :sum=sum :id=id></my-count>
            </li>
        </ul>
    </div>
</template>
<script>
import myCount from './my-count'
export default {
    props:['name','pic','id','sum'],

    components:{
        myCount
    }
}
</script>

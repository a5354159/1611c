<template>
    <dl>
        <dt></dt>
        <dd>
            <h3>{{title}}</h3>
            <span>{{price}}</span>
            <count :num="num" :id="id" :type="type"></count>
        </dd>
    </dl>
</template>
<script>
import count from './count';
export default {
    props:['title','price','num','id','type'],
    data(){
        return {

        }
    },
    components:{
        count
    }
}
</script>

<style>
    dl{
        display: flex;
    }
    dt{
        height: 100px;
        width: 100px;
        background: cadetblue;
    }
    dd{
        flex: 1;
    }
</style>

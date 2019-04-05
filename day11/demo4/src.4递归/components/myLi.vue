<template>
    <ul>
        <li v-for="(item,index) in list" :key="index">
            <h3>{{item.title}}</h3>
            <aa v-if="item.children" :list="item.children"></aa>
        </li>
    </ul>
</template>
<script>
export default {
    name:'aa',
    props:{
        list:Array
    },
    data(){
        return {

        }
    }
}
</script>

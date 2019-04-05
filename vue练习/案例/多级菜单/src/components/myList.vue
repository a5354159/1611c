<template>
    <ul>
        <li v-for='(item,index) in list' :key="index">
            <h3>{{item.tit}}</h3>
             <myList v-if="item.children" :list='item.children'></myList> 
         </li> 
    </ul>
</template>
<script>
export default {
    name:'myList',
    props:['list'],
    data(){
        return {

        }
    },
    created(){
        console.log(this.list)
    }
}
</script>

<template>
    <div class="classify">
        <ul class="left">
           <li v-for="(item,index) in list " :key="index" :class="{'active': index == ind}" @click="ind = index">{{item}}</li>
        </ul>
        <div class="right">
            右侧
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:['男装','女装','女鞋','男鞋'],
            ind:0
        }
    },
    destroyed() {
        console.log('classify');
    }
}
</script>
<style >
*{
    list-style: none;
}
.classify{
    display: flex;
    width: 100%;
}
.left{
    width: 100px;
}
.right{
    width: 200px;
}
li.active{
    color: red;
}
</style>


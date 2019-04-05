<template>
    <dl @click="$router.push({name:'dateil',params:{id:id}})">
        <dt><img :src="img" alt=""></dt>
        <dd>{{title}}</dd>
    </dl>
</template>

<script>

export default {
    props:['img','title','id'],
    data(){
        return {

        }
    }
}
</script>
<style scoped  lang="scss">
dl{
    width:25%;
    height:120px;
    border:1px solid #ccc;
    dt{
        img{
            width:100%;
            height:120px;
        }
    }
}
</style>
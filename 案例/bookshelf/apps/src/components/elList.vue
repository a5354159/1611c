<template>
    <dl>
        <dt><img :src="img" alt=""></dt>
        <dd>
            <b>{{name}}</b><br>
            <span>{{text}}</span>
        </dd>
    </dl>
</template>

<script>

export default {
    props:['img','name','text'],
    data(){
        return {

        }
    }
}
</script>
<style scoped  lang="scss">
dl{
    width:100%;
    height:120px;
    display: flex;
    border-bottom:1px solid #ccc;
    dt{
        img{
            width:100px;
            height:120px;
        }
    }
    dd{
        margin:10px;
    }
}
</style>
<template>
    <div class="iconlist">
        <span :class="icon"></span>
        <b>{{cont}}</b>
    </div>
</template>
<script>
export default {
    props:['icon','cont'],
    data(){
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
.iconlist,span{
    width: 50px;
    height: 50px;
    display: inline-block;
    line-height: 50px;
    border-radius: 100%;
}
.iconlist{
    position: relative;
}
.iconlist b{
    position: absolute;
    right: 60px;
    top: 50%;
    font-size: 16px;
    transform: translateY(-50%);
    width: 0;
    min-width: 0;
    text-align: right;
    background: rgba(0, 0, 0, 0.5);
    height: 30px;
    line-height: 30px;
    transition: all 1s;
    overflow: hidden;

}
.iconlist:hover b{
    min-width: 100px;
}
span.code{
    background: hotpink;
}
span.top{
    background:lavender;
}
span.phone{
    background:lemonchiffon;
}
span.address{
    background:lightblue;
}

</style>

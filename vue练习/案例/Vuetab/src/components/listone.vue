<template>
    <div class="content">
        <div class="left">
            <ul>
                <li v-for="(item,index) in list" :key="index" :class="{active:ind===index}"
                @click="ind=index"
                >{{item}}</li>
            </ul>
        </div>
        <div class="right"></div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            list:['男装',"女装","男鞋","女鞋"],
            ind:0
        }
    }
}
</script>
<style lang="scss">
    .active{
        color: #f00;
    }
</style>

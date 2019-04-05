<template>
    <div>
        <dl>
            <dt><img :src="img" alt=""></dt>
            <dd>
                <p>{{name}}</p>
                <span>{{title}}</span>
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    props:["img","title","name"],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
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
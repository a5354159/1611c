<template>
    <div>
        <header>
            <h5>
                <router-link to="/list" tag="div" class="i"><i class="icon iconfont icon-zuojiantou-01"></i></router-link>
                <span>聚餐投票</span>
            </h5>
                <i class="icon iconfont icon-dingwei"></i>
        </header>
    </div>
</template>
<script>
export default {
    props:{

    },
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
    header{
        width:100%;
        height:45px;
        display: flex;
        background: #fff;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        box-sizing: border-box;
        h5{
            display: flex;
            i{
                display: flex;
            }
        }
    }
</style>
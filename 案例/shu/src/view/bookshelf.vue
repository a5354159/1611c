<template>
    <div>
        <header>
            <b-Header></b-Header>
        </header>
        <main>
            <b-List v-for="(item,index) in list" :key="index"
                :img="item.cover"
                :name="item.name"
                :title="item.intro"
            ></b-List>
        </main>
    </div>
</template>
<script>
import bHeader from '../components/bHeader'
import bList from '../components/bList'
export default {
    components:{
        bHeader,
        bList
    },
    data(){
        return {
            list:[]
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        this.http.get("/getlist").then((data)=>{
            this.list = data.data.items
            console.log(data.data.items)
        })
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">

</style>
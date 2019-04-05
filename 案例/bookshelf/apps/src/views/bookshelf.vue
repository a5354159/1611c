<template>
    <div>
        <header>
            <el-header></el-header>
        </header>
        <main>
            <el-list v-for="(val,i) in list" :key="i"
            :img="val.cover"
            :name="val.title"
            :text="val.intro"></el-list>
        </main>
    </div>
</template>

<script>
import elHeader from "../components/elHeader"
import elList from "../components/elList"
export default {
    data(){
        return {
            list:[]
        }
    },
    components:{
        elHeader,
        elList
    },
    created(){
        this.http.get("/getlist").then((data)=>{
            this.list = data.data.items
            console.log(data.data.items)
        })
    }

}
</script>
<style scoped  lang="scss">
main{
    flex:1;
    overflow: auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
</style>
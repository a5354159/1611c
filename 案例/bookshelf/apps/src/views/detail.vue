<template>

   <div>
        <dl v-for="(val,i) in list" :key="i">
            <dt><img :src="val.cover" alt=""></dt>
            <dd>
                <b>{{val.title}}</b><br>
                <span>{{val.authors}}</span><br>
                <span>{{val.rights}}</span>
            </dd>
        </dl>
   </div>
</template>

<script>
export default {
    data(){
        return {
            list:[]
        }
    },
    created(){
        let id = this.$route.params.id
        
        this.http.get("/detail?id="+id).then((data)=>{
            console.log(data.data.items[1].data.data)
            this.list = data.data.items[1].data.data.filter(item=>item.fiction_id === id)
        })
    }
}
</script>
<style scoped  lang="scss">
dl{
    width:100%;
    height:120px;
    display: flex;
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
<template>
    <div>
        <header>
            <h1 @click="$router.back()"> 返回</h1>
        </header>
       <section>
            <dl v-for="(v,i) in data" :key="i">
            <dt>
                <img :src="v.Icon" alt="">
            </dt>
            <dd>
                {{v.Label}}
            </dd>
        </dl>
       </section>
<foote></foote>    
    </div>
</template>

<script>
import foote from '@/components/footer'

export default {
    props:['data'],
    data(){
        return {

        }
    },
     components:{
    foote
  },
}
</script>
<style scoped  lang="">

</style>
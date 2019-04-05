<template>
    <div>
        <header><span style="color:red;" @click="$router.back()">返回 </span> <h1>{{$route.params.title}}</h1></header>
        <section>
            <ul class='uls'>
                <li v-for="(v,i) in lists" :key="i" @click="add(i)" :class="{active:index===i}">{{v}}</li>
            </ul>
            <dl v-for="(v,i) in list"
            :key="i">
                <dt>
                    <img :src="v.Image" alt="">
                </dt>
                 <dd>
                        <h3>{{v.Name}}</h3>
                        <h4>{{v.Introduction}}</h4>
                        <p>{{v.NowPromo}}</p>
                        <p><span style="color:red;  font-weight: bold; font-size: 30px;">￥{{v.Price}}</span><s>￥{{v.LinePrice}}</s></p>
                        <p>已销售{{v.Sales}}</p>
                    </dd>
            </dl>
        </section>
    </div>
</template>

<script>
import list from '@/data/list.json'
export default {
    data(){
        return {
            list:list.Datas.FlowerList,
            lists:['综合','销量','价格'],
            index:0,
        }
    },
    created() {
        // this.list.forEach((v)=>{
        //     console.log(parseFloat(v.Sales))
            
        // })
    },
    methods: {
        add(i){
            this.index=i
            if(i===1){
            let log=this.list.sort((a,b)=>{
            return a.Price-b.Price
            })
            }else if(i===2){
            let log=this.list.sort((a,b)=>{
            return parseFloat(a.Sales)-parseFloat(b.Sales)
            })
            }
        }
    },
}
</script>
<style scoped  lang="">
header{
    width: 100%;
    height: 50px;
    background: lime;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.uls{
    width: 100%;
    height: 30px;
    border: 2px solid #ccc;
     display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    top: 50px;
    left: 0px;
    background: #fff;
}
.active{
    color: red;
}
dl{
    width: 100%;
    display: flex;
}
dl dt{
    width: 50%;
}
dl dt img{
    width: 100%;
}
dl dd{
    flex: 1;
    line-height: 2;
}
section{
   
    margin-top:30px;
}
</style>
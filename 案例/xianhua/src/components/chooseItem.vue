<template>
    <div class="subject-item">
        <h2>{{obj.Subject}}</h2>
        <div class="subject-list">
            <dl v-for="(v,ind) in obj.Content" 
                :key="ind" 
                :class="{active:activeInd === ind}"
                @click="choose(ind,obj.Subject,v.Label)"
            >
                <dt>
                    <img :src="v.Icon" alt="">
                </dt>
                <dd>
                    {{v.Label}}
                </dd>
            </dl>
        </div>
    </div>
</template>
<script>
export default {
    props:['obj'],
    data(){
        return {
            activeInd:0
        }
    },
    methods:{
        choose(ind,subject,label){
            this.activeInd = ind;
            this.$emit('choose',subject,label);
        }
    }
}
</script>
<style lang="scss">
    .subject-item{
        width:100%;
    }
    .subject-list{
        width:100%;
        display: flex;
        flex-wrap: wrap;
        dl{
            width:33.3%;
            margin-bottom:10px;
            dt{
                width:60px;
                height: 60px;
                overflow: hidden;
                margin:0 auto;
                img{
                    width:100%;
                    height: 100%;
                }
            }
            dd{
                text-align: center;
                font-size:12px;
            }
            &.active{
                border:1px solid red;
            }
        }
    }
</style>

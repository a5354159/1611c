<template>
    <dl >
        <dt>
            <img src="" alt="">
        </dt>
        <dd>
            <h2>{{grade}}</h2>
            <span>{{name}}</span>
        </dd>
    </dl>
</template>
<script>
export default {
   props:['grade','name'],
    data(){
        return {

        }
    },
    created() {
        console.log(this.grade,this.name);
    },
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import '../scss/common.scss';
    @import '../scss/_mixin.scss';
    dl{
        @include box_flex;
        padding: pxTorem(10px);
        @include sizing;
        dt{
            height: pxTorem(100px);
            width: pxTorem(100px);
            background: paleturquoise;
            margin-right: pxTorem(10px);
            img{
                height: 100%;
                width: 100%;
            }
        }
        dd{
            @include flex;
            font-size: pxTorem(16px);
            h2{
                height: pxTorem(30px);
                width: 100%;
                text-align: left;
            }
            span{
                text-align: left;
                width: 100%;
            }
        }
    }
</style>

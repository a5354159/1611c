<template>
    <div class="bis">
        <span @click="bs">{{itsm}}</span>
    </div>

</template>
<script>
export default {
    props:['itsm'],
    data(){
        return {
            b:{
                s:123
            }
        }
    },
    methods:{
        bs(){
            this.$bus.$emit('nums',this.b)
        }
    }
}
</script>

<template>
    <tr>
        <td>{{title}}</td>
        <td>{{phone}}</td>
        <td>
            <input type="text" :value="content" @input="change">
        </td>
        <td><button>删除</button></td>
    </tr>
</template>
<script>
export default {
    props:['title','content','phone','index'],
    data(){
        return{
            
        }
    },
    methods: {
        change(e){
            this.$emit('addChange',e.target.value,this.index);
        }
    },
}
</script>


<template>
  <li>
       <span>{{title}}</span>
       <div>
           <span  @click="$emit('addClick',index,count,0)">-</span>
        <span>{{count}}</span>
        <span @click="$emit('addClick',index,count,1)">+</span>
       </div>
  </li>
</template>

<script>
export default {
     props:['title','count','index'],
    data(){
       
        return {
            
        }
    },
    mounted() {
        console.log(this.index);
    }
}
</script>
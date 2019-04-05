<template>
    <ul>
        <list :grad=grad :sex=sex :imgs=imgs :styles=style :cont=cont @addrt='add'></list>
    </ul>
</template>

<script>
import List from './li'
export default {
    components:{
        List
    },
    data(){
        return {
            grad:'王浩',
            sex:'女',
            imgs:["http://img5.imgtn.bdimg.com/it/u=3978861124,3887299721&fm=26&gp=0.jpg"],
            style:{
                width:'100px',
                height:'100px',
                display:'inline-block',
                margin:'0 15px',
            },
            cont:1,
          
        }
    },
    methods:{
        add(){
            this.cont++;
        }
    }
}
</script>

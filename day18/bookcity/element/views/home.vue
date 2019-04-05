<template>
<div>
    <my-header>
          <ul>
            <router-link to='/home' tag="li">书城</router-link>
            <router-link to='/bookcity' tag="li">书架</router-link>
        </ul>
        <span>我的</span>
    </my-header>
    <section>
       <Seach>
           <span @click="$router.push({path:'/seach'})">请输入/书名/作者/关键字</span>
       </Seach>
    </section>
</div>
    
</template>
<script>


export default {
    data(){
        return {}
    },

}
</script>

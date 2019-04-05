<template>
  <div id="app">
      <my-header></my-header>
      <section>
        <my-list v-for="(item,index) in list" :key="index" :grade="item.grade" :name="item.name"></my-list>
      </section>
      <my-footer @send="send"></my-footer>
  </div>
</template>



<style rel="stylesheet/scss" lang="scss">
@import './scss/common.scss';
@import './scss/_mixin.scss';

</style>

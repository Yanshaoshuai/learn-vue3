<template>
  <div>
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <InnerComponent></InnerComponent>
    {{appTitle}}
  </div>
</template>
<!--scoped只在本组件生效-->
<style scoped>
  div{
    background: yellow;
  }
</style>
<script>
import  InnerComponent from './components/InnerComponent.vue'
export  default {
  //注册局部组件
  components:{
    //"InnerComponent":InnerComponent
    InnerComponent
  },
  data(){
    return {
      appTitle:'app-title'
    }
  }
}
</script>
<template>
  <div>
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <InnerComponent></InnerComponent>
    {{appTitle}}
    <CORS></CORS>
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
import CORS from "./components/CORS.vue";
export  default {
  //注册局部组件
  components:{
    //"InnerComponent":InnerComponent
    InnerComponent,
    CORS
  },
  data(){
    return {
      appTitle:'app-title'
    }
  }
}
</script>
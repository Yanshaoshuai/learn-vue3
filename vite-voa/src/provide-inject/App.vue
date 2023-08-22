<script>


import Navbar from "./Navbar.vue";
import Tabbar from "./Tabbar.vue";

export default {
  name: "App.vue",
  methods:{

  },
  components:{
    Tabbar,
    Navbar
  },
  data(){
    return {
      navTitle:"首页"
    }
  },
  //向子组件提供属性
  provide(){
    return {
      navTitle:this.navTitle,
      //把app暴漏出来
      app:this
    }
  }
}
</script>

<template>
  <div>
  <Navbar :title="navTitle"/>
  <Tabbar/>
  </div>
</template>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  ul{
    list-style: none;
  }
</style>
<script>


import Navbar from "./Navbar.vue";
import Tabbar from "./Tabbar.vue";
import Home from "./views/Home.vue";
import Center from "./views/Center.vue";
import List from "./views/List.vue";
import store from "./store.js";

export default {
  name: "App.vue",
  methods: {},
  components: {
    Home,
    Center,
    List,
    Tabbar,
    Navbar
  },
  data() {
    return {
      //which: "首页"
      which: "Home"
    }
  },
  mounted() {
    //store.subscribe(value=>{
    //  this.which=value
    //})
    var mapObj={
      "首页":"Home",
      "列表":"List",
      "我的":"Center"
    }
    store.subscribe(value=>{
      this.which=mapObj[value]
    })
  }
}
</script>

<template>
  <div>
    <Navbar/>
    <!--<Home v-if="which==='首页'"/>-->
    <!--<List v-else-if="which==='列表'"/>-->
    <!--<Center v-else/>-->
    <!--component动态组件 根据is选择替换成的组件-->
    <!--keep-alive保持组件活跃(添加缓存) include根据组件name匹配
    在include中的组件才会缓存 exclude不缓存哪些组件-->
    <!--  <keep-alive include="Home,List">-->
    <keep-alive :include="['Home','List']">
        <component :is="which"/>
      </keep-alive>
    <Tabbar/>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}
</style>
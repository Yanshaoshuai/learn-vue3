<script>


import Navbar from "./Navbar.vue";
import Tabbar from "./Tabbar.vue";
//import Home from "./views/Home.vue";
//import Center from "./views/Center.vue";
//import List from "./views/List.vue";
import store from "./store.js";
//导入异步加载组件函数
import {defineAsyncComponent} from "vue";
import LoadingComponent from "./views/LoadingComponent.vue";
import ErrorComponent from "./views/ErrorComponent.vue";

export default {
  name: "App.vue",
  methods: {},
  components: {
    //按需加载 用到时才从网络加载
    Home:defineAsyncComponent(()=>(import('./views/Home.vue'))),
    List:defineAsyncComponent(()=>(import('./views/List.vue'))),
    //Center:defineAsyncComponent(()=>(import('./views/Center.vue'))),
    //添加动态加载属性
    Center:defineAsyncComponent({
    //加载函数
      loader:()=>import('./views/Center.vue'),
    //加载时使用的组件
      loadingComponent:LoadingComponent,
    //展示加载组件前的延迟
      delay:1,
    //加载失败组件
      errorComponent:ErrorComponent,
    //超时时间 超时也会展示失败组件
      timeout:3000
    }),
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
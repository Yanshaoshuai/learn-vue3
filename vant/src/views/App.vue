<script setup>
import Tabbar from "../components/Tabbar.vue";
import useTabbarStore from "../store/setup/tabbarStore.js";
import {storeToRefs} from "pinia";
//生成的对象是reactive包装的对象
const store=useTabbarStore()
//这样用会使isTabbarShow变成普通对象
//const {isTabbarShow}=useTabbarStore()
//这样结构还是reactive
//const {isTabbarShow}=storeToRefs(store)
</script>

<template>
  <div>
    <!--预留插槽 路由容器 可以有多个-->
    <router-view></router-view>
    <Tabbar v-show="store.isTabbarShow"></Tabbar>
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
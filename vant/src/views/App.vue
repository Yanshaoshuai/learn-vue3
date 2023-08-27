<script setup>
import Tabbar from "../components/Tabbar.vue";
import useTabbarStore from "../store/setup/tabbarStore.js";
const store=useTabbarStore()

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
<script setup>
import Tabbar from "../components/Tabbar.vue";
import {mapState, useStore} from "vuex";
import {computed} from "vue";
let store = useStore();

//解决辅助函数不能在vca中使用的问题
//let state = mapState("TabbarModule",['isTabbarShow']);
//state.isTabbarShow=state.isTabbarShow.bind({$store:store})
//const isTabbarShow=computed(state.isTabbarShow)
</script>

<template>
  <div>
    <!--预留插槽 路由容器 可以有多个-->
    <router-view></router-view>
    <Tabbar v-show="store.state.TabbarModule.isTabbarShow"></Tabbar>
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
<script>
import Tabbar from "../components/Tabbar.vue";
export default {
  components:{
    Tabbar
  }
}

</script>

<template>
  <div>
    <!--预留插槽 路由容器 可以有多个-->
    <router-view></router-view>
    <Tabbar></Tabbar>
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
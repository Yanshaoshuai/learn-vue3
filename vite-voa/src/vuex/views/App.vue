<script>
import Tabbar from "../components/Tabbar.vue";
import {mapState} from "vuex";
export default {
  components:{
    Tabbar
  },
  computed:{
    //isTabbarShow(){
    //  return this.$store.state.isTabbarShow;
    //},
    //相当于上面的写法
    //...mapState(['isTabbarShow'])
    ...mapState('TabbarModule',['isTabbarShow'])
  }
}

</script>

<template>
  <div>
    <!--预留插槽 路由容器 可以有多个-->
    <router-view></router-view>
    <!--<Tabbar v-show="$store.state.isTabbarShow"></Tabbar>-->
    <!--<Tabbar v-show="$store.TabbarModule.state.isTabbarShow"></Tabbar>-->
    <Tabbar v-show="isTabbarShow"></Tabbar>
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
<template>
  <div class="root">
    <!--class 样式会透传到子组件 非自定义属性/事件 都会透传到子组件的根节点-->
    <!--非动态绑定""内的参数是字符串 被boolean接收成true-->
    <!--<Navbar class="navbar" :title="navbarTitle" left="返回" right="首页" left-show="true" right-show="false">-->
    <!--@event @event2可以有多个(要和子组件传递事件的名字一致) @event.once只触发一次-->
    <Navbar class="navbar" :title="navbarTitle" left="返回"
            right="首页" :left-show="true" :right-show="false" validateProp="success" @event="handleHiddenSidebar">

    </Navbar>
    <!--<Navbar class="navbar" v-bind="navbarProps"></Navbar>-->
    <Layout class="layout" :hidden-sidebar="hiddenSidebar"></Layout>
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import Layout from "./components/Layout.vue";

export default {
  components: {
    Navbar,
    Layout
  },
  data(){
    return {
      navbarTitle:"导航栏",
      navbarProps:{
        title:"详情",
        left:"返回上一级",
        right:"返回首页"
      },
      hiddenSidebar: true
    }
  },
  methods:{
    handleHiddenSidebar(){
      this.hiddenSidebar=!this.hiddenSidebar
    }
  }
}
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .root {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .navbar {
    height: 50px;
  }

  .layout {
    flex: 1;
    display: flex;
  }
</style>
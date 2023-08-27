<script setup>
  //组件内部拦截
  import {onBeforeRouteLeave} from "vue-router";
  //局部引入
  import {Button as vanButton} from 'vant'
  //离开路由
  onBeforeRouteLeave(()=>{
    const answer=window.confirm("确定离开？")

    if(!answer){
      //不跳转
      return false
    }
  })
</script>
<script>
export default {
  beforeRouteEnter(to,from,next){
    let isAuthenticated=localStorage.getItem("token");
    if(isAuthenticated){
      next()
    }else {
      next({'name':"login"})
    }
  }
}
</script>
<template>
  <div>
    <van-button type="primary">主要按钮</van-button>
  </div>

</template>

<style scoped>

</style>
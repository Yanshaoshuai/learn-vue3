<script>
export default {
  //组件内部拦截
  beforeRouteEnter(to,from,next){
    let isAuthenticated=localStorage.getItem("token");
    if(isAuthenticated){
      next()
    }else {
      next({'name':"login"})
    }
  },
  //离开路由
  beforeRouteLeave(){
    const answer=window.confirm("确定离开？")

    if(!answer){
      //不跳转
      return false
    }
  }
}
</script>

<template>
  <div>
    Center.vue
  </div>

</template>

<style scoped>

</style>
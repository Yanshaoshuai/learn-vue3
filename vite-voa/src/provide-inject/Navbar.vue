<script>
export default {
  name: "Navbar",
  //注入provide提供的属性
  inject:["app"],
}
</script>

<template>
  <div>
    <button>返回</button>
    <span>{{app.navTitle}}</span>
    <button>首页</button>
  </div>
</template>

<style scoped>
div{
  display: flex;
  width: 100%;
  justify-content: space-between;
  line-height: 50px;
  background: gray;
}
</style>
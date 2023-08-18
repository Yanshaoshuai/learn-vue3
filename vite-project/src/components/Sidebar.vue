<script>
export default {
  name: "Sidebar",
  data(){
    return {
      datalist:["首页","权限管理","用户管理","个人中心"]
    }
  }
}
</script>

<template>
  <div>
    <ul>
      <li v-for="item in datalist">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<style scoped>
div{
  width: 100px;
}
li{
  padding: 10px;
  text-align: center;
}
</style>
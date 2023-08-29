<script lang="ts" setup>
import {onBeforeRouteLeave} from "vue-router";
//离开路由
onBeforeRouteLeave(() => {
  const answer = window.confirm("确定离开？")

  if (!answer) {
    //不跳转
    return false
  }
})
</script>

<!--beforeRouteEnter在script setup中用不了 用此方法解决-->
<script lang="ts">
export default {
  //组件内部拦截
  beforeRouteEnter(to, from, next) {
    let isAuthenticated = localStorage.getItem("token");
    if (isAuthenticated) {
      next()
    } else {
      next({'name': "login"})
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
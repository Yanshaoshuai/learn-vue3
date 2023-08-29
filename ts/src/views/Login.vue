<script lang="ts" setup>
import {useRouter} from "vue-router";
let router = useRouter();
const handleLogin=()=>{
  localStorage.setItem("token","abcadafaf")
  router.push("/")
}
</script>

<template>
  <div>
    <button @click="handleLogin">登录</button>
  </div>
</template>

<style scoped>

</style>
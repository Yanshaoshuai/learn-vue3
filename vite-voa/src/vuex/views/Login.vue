<script >
export default {
  methods:{
     handleLogin(){
      localStorage.setItem("token","abcadafaf")
       this.$router.push("/")
    }
  }
}
</script>

<template>
  <div>
    <button @click="handleLogin">登录</button>
  </div>
</template>

<style scoped>

</style>
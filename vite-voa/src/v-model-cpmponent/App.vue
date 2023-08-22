<script>
import Child from "./Child.vue";

export default {
  name: "App",
  components: {Child},
  data() {
    return {
      username: "default"
    }
  },
  methods:{
    handleRegister(){
      console.log(this.username)
    },
    handleReset(){
      this.username=""
    }
  }
}
</script>

<template>
  <!--子组件使用v-model双向绑定数据 v-model:mymodel可将modelValue名称改为mymodel-->
  <!--<Child label="用户名" type="text" v-model:mymodel="username"></Child>-->
  <Child label="用户名" type="text" v-model="username"></Child>
  <button @click="handleRegister">注册</button>
  <button @click="handleReset">清空</button>
</template>

<style scoped>

</style>
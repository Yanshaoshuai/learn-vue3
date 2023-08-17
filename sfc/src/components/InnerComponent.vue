<template>
  <div>InnerComponent</div>
  <inner-component-button></inner-component-button>
</template>
<style scoped>
div{
  background: red;
}
</style>
<script>
import  InnerComponentButton from './InnerComponentButton.vue'
export  default {
  //注册局部组件
  components:{
    InnerComponentButton
  }
}
</script>
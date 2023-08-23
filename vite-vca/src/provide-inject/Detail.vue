<script>
import {inject, onMounted} from "vue";

export default {
  setup(){
    //注入响应式对象
    const show=inject("show")
    onMounted(()=>{
      show.value=false
    })
  }
}
</script>

<template>
  <div>detail</div>
</template>

<style scoped>

</style>
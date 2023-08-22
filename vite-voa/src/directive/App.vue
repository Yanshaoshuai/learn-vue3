<script>
export default {
  name: "App",
  //局部自定义指令
  directives:{
    //"custom":{
    //  mounted(el,binding){
    //    el.style.background=binding.value
    //  },
    //  updated(el,binding){
    //    el.style.background=binding.value
    //  }
    //}
    custom(el,binding){//上面的简写方式 mounted和updated都会调用同样代码
      el.style.background=binding.value
    }
  },
  data(){
    return {
      color:"blue"
    }
  }
}
</script>

<template>
  <div v-custom="color">
      你好
  </div>
</template>

<style scoped>

</style>
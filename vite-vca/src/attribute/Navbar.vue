<script>
  import {computed,getCurrentInstance} from "vue";

  export default {
    props:{
      "title":String,
      leftShow: Boolean
    },
    setup(props,{emit}){//获取属性
      //获取this
      //const _this=getCurrentInstance();
      //console.log(_this)
      const computedTitle=computed(() => props.title+"-111")
      const handleClick = () => {
        emit("leftEvent","child left button click")
      }
      return {
        computedTitle,
        handleClick
      }
    }
  }
</script>

<template>
  <div>
    <button v-show="leftShow" @click="handleClick">返回</button>
    {{computedTitle}}
    <button>首页</button>
  </div>
</template>

<style scoped>

</style>
<script>
export default {
  name: "Child",
  beforeMount() {
    console.log('child#beforeMount')
  },
  mounted() {
    window.onresize=()=>{
      console.log("child resize")
    }
    console.log('child#mounted')
  },

  //以下两个方法用于卸载组件时解绑window事件
  beforeUnmount() {
    //组件卸载前调用
    console.log('child#beforeUnmount')
  },
  unmounted() {
    //组件卸载后调用
    console.log('child#unmounted')
    window.onresize=null
  }
}
</script>

<template>
<div>child</div>
</template>

<style scoped>

</style>
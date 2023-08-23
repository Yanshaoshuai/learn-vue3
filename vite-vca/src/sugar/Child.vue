<script setup>
//接收属性
const props = defineProps({
  title: {
    type: String,
    default: "000"
  }
})
//监听父组件事件
const emit=defineEmits(['right'])
const handleHome= () => {
  emit("right",'child right button click')
}
</script>

<template>
  <div>
    <button>返回</button>
    {{ title }}
    <button @click="handleHome">首页</button>
  </div>

</template>

<style scoped>

</style>
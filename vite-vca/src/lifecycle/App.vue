<script>
import {nextTick, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref} from "vue";

export default {
  setup(){
    // ref reactive
    onBeforeMount(()=>{
      console.log("onBeforeMount")
    })
    onMounted(()=>{
      console.log("onMounted")
    })
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate")
    })
    onUpdated(() => {
      console.log("onUpdated")
    })
    onBeforeUnmount(() => {

    })
    onUnmounted(() => {

    })
    const handleClick= () => {
      a.value='changed'
      //一次性事件
      nextTick(() => {
        a.value="nextTick"
        console.log("nextTick",a.value)
      })
    }
    const a=ref('a')
    return {
      a,
      handleClick
    }
  }
}
</script>

<template>
  <div>
    <button @click="handleClick">click</button>
    {{a}}
  </div>

</template>

<style scoped>

</style>
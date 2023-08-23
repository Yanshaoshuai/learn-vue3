//script setup属性可以省略setup函数导出
<script setup>

import {computed, reactive, ref, toRefs} from "vue";
//导入后即可使用 不用注册
import Child from "./Child.vue";

let msg = ref("hello");
let state = reactive({
  name: "yan",
  age: 27
})
let {name, age} = toRefs(state)
const handleClick = () => {
  msg.value = "changed"
  name.value = "shaoshui"
}
let computedName = computed(() => {
  return name.value.substring(0, 1).toUpperCase() + name.value.substring(1)
})
const handleRight= (value) => {
  console.log('handleRight',value)
}
</script>

<template>
  <div>
    <button @click="handleClick">click</button>
    {{ msg }}
    <br/>
    {{ name }}--{{ age }}
    <br/>
    {{ computedName }}
    <br/>
    <Child title="电影" @right="handleRight"></Child>
  </div>

</template>

<style scoped>

</style>
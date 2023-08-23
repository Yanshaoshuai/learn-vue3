<script setup>
import Navbar from './Navbar.vue'
import Detail from './Detail.vue'
import List from './List.vue'
import {provide, ref} from "vue";

const which = ref(true)
const show = ref(true)
//暴露which
provide("which", which)
provide("show", show)

//自定义局部指令 vXxx
const vBlue= (el) => {
    el.style.background='blue'
}
</script>

<template>
  <div>
    <Navbar v-show="show" v-blue></Navbar>
    <!--动态组件语法糖写法-->
    <component :is="which?List:Detail"></component>
  </div>
</template>

<style scoped>

</style>
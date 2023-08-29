<script setup lang="ts">
import Child from "./components/Child.vue";
import {computed, onMounted, Ref, ref} from "vue";

const state=ref({
  name:"yan",
  age:100
})//隐式推导
interface IStudent{
  name:string,
  age:number
}
const stu:IStudent={name:"shaoshuai",age:101}

const myname=ref("");//隐式推导
const str:Ref<string>=ref("")//显式指定
const refStr=ref<string>("")

const mydiv=ref<HTMLDivElement>()
onMounted(() => {
  console.log(mydiv.value?.innerHTML)
})
const computedName=computed<string>(() => {
  return stu.name.substring(0,1).toUpperCase()+stu.name.substring(1)
})
const  handleAdd= (value1:number,value2:number) => {
  return value1+value2
}
const hanleChildClick= (value:string) => {
  console.log(value)
}
</script>

<template>
  <div>
    {{state.name}}
    {{stu.name}}
    {{myname}}
    {{str}}
    {{refStr}}
    {{computedName}}
    <div ref="mydiv">mydiv</div>
    <button @click="handleAdd(1,2)">add</button>
    <Child title="首页" :obj="{name:'yan',age:100}" @event="hanleChildClick"></Child>
  </div>
</template>

<style scoped>
</style>

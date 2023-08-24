<script setup>
import {onBeforeMount, onBeforeUnmount, onMounted} from "vue";
import {onBeforeRouteUpdate, useRoute, useRouter} from "vue-router";
import useTabbarStore from "../../store/setup/tabbarStore.js";

let router = useRouter();
let route = useRoute();
let store = useTabbarStore()
onBeforeMount(() => {
  store.isTabbarShow = false
})
onBeforeUnmount(() => {
  store.isTabbarShow = true
  //补丁 会和原对象合并 同名变量会被替换
  //store.$patch=({isTabbarShow:true})
  //改回为初始值
  //store.$reset()
  //通过actions修改
  //store.change(true)
})
//路由更新钩子
onBeforeRouteUpdate((to, from) => {
  console.log(from.params.filmId)
  console.log(to.params.filmId)
})
onMounted(() => {
  let filmId = route.params.filmId;
  //获取query参数
  console.log(filmId)
})
const handleBack = () => {
  //返回上一级
  router.back()
}
const handleClick = () => {
  router.push('/detail/6789')
}

</script>

<template>
  <div>
    <button @click="handleBack">返回</button>
    <button @click="handleClick">猜你喜欢</button>
  </div>

</template>

<style scoped>

</style>
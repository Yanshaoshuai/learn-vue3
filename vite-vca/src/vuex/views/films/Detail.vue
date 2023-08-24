<script setup>
import {useStore} from "vuex";
import {onBeforeMount, onBeforeUnmount, onMounted} from "vue";
import {onBeforeRouteUpdate, useRoute, useRouter} from "vue-router";

let router = useRouter();
let route = useRoute();
let store = useStore();
onBeforeMount(() => {
  store.commit("TabbarModule/changeTabbar", false)
})
onBeforeUnmount(() => {
  store.commit("TabbarModule/changeTabbar", true)
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
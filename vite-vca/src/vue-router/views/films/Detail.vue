<script setup>
  //路由更新钩子
  import {onBeforeRouteUpdate, useRoute, useRouter} from "vue-router";
  import {onMounted} from "vue";
  let router=useRouter();
  let route=useRoute();
  onBeforeRouteUpdate((to,from)=>{
    console.log(from.params.filmId)
    console.log(to.params.filmId)
  })

  onMounted(()=>{
    //获取id /detail/:filmId
    let filmId = route.params.filmId;
    //获取query参数
    //let filmId = route.query.filmId;
    console.log(filmId)
  })
  const handleBack=()=>{
    //返回上一级
    router.back()
    //前进
    //router.forward()
    //回退N个
    //router.go(-1)
  }
  const handleClick=()=>{
    router.push('/detail/6789')
  }
  //,
  //watch:{
  //  //详情跳详情 监听参数变化
  //  "$route.params":function (){
  //    console.log("猜你喜欢filmId",this.$route.params.filmId)
  //  }
  //}
</script>

<template>
  <div>
    <button @click="handleBack">返回</button>
    <button @click="handleClick">猜你喜欢</button>
  </div>

</template>

<style scoped>

</style>
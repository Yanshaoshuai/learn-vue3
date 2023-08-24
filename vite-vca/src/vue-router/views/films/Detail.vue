<script>
export default {
  mounted() {
    //获取id /detail/:filmId
    let filmId = this.$route.params.filmId;
    //获取query参数
    //let filmId = this.$route.query.filmId;
    console.log(filmId)
  },
  methods: {
    handleBack() {
      //返回上一级
      this.$router.back()
      //前进
      //this.$router.forward()
      //回退N个
      //this.$router.go(-1)
    },
    handleClick(){
      this.$router.push('/detail/6789')
    }
  },
  watch:{
    //详情跳详情 监听参数变化
    "$route.params":function (){
      console.log("猜你喜欢filmId",this.$route.params.filmId)
    }
  }
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
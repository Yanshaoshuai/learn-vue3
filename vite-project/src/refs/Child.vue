<script>
export default {
  name: "Child",
  data(){
    return {
      childtitle:111
    }
  },
  methods:{
    handleClick(){
      //子组件可以通过$root获取根组件的数据
      console.log(this.$root.parentValue)
      //子组件可以通过$parent获取父组件的数据
      console.log(this.$parent.parentValue)
    }
  }
}
</script>

<template>
  <div>
     {{childtitle}}
    <button @click="handleClick()">childButton</button>
  </div>
</template>

<style scoped>

</style>
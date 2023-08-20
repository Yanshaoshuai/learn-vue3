<script>
export default {
  name: "TabbarItem",
  props:{
    item:String
  },
  //注入爷爷组件provide的属性 实现跨级通信
  inject:["navTitle","app"],
  methods:{
    handleClick(){
      //console.log(this.navTitle)
      //修改后 provide处的值不会改变 不是响应的
      //this.navTitle=this.item
      //直接修改app的内容
      this.app.navTitle=this.item
    }
  }
}
</script>

<template>
    <li @click="handleClick">{{item}}</li>
</template>

<style scoped>

</style>
<script>
import Child from "./Child.vue";

export default {
  name: "App.vue",
  methods:{
    handleClick(){
      //this.$refs 取得原生dom节点
      console.log(this.$refs)
      console.log(this.$refs.myinput)
      //可以直接修改子组件数据
      console.log(this.$refs.mychild.childtitle)
     this.$refs.mychild.childtitle=222
    }
  },
  components:{
    Child
  },
  data(){
    return {
      parentValue:"parent"
    }
  }
}
</script>

<template>
  <div>
    app-<button @click="handleClick()">click</button>
    <input ref="myinput"/>
    {{parentValue}}
    <Child ref="mychild"></Child>
  </div>
</template>

<style scoped>

</style>
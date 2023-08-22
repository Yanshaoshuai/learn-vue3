<script>
import store from "./store.js";
export default {
  name: "Navbar",
  //生命周期方法 挂载时调用
  mounted() {
    //订阅
    store.subscribe((value)=>{
      this.title=value;
    })
  },
  data(){
    return {
      title:"首页"
    }
  }
}
</script>

<template>
  <div>
    <button>返回</button>
    <span>{{title}}</span>
    <button>首页</button>
  </div>
</template>

<style scoped>
div{
  display: flex;
  width: 100%;
  justify-content: space-between;
  line-height: 50px;
  background: gray;
}
</style>
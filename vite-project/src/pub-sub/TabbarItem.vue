<script>
import store from "./store.js";
export default {
  name: "TabbarItem",
  props:{
    item:String
  },
  methods:{
    handleClick(){
      //发布
      store.publish(this.item);
    }
  }
}
</script>

<template>
    <li @click="handleClick">{{item}}</li>
</template>

<style scoped>

</style>
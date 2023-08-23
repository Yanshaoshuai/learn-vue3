<script>
import Navbar from './Navbar.vue'
import Detail from './Detail.vue'
import List from './List.vue'
import {provide, ref} from "vue";
export default {
  components:{
    Navbar,
    Detail,
    List
  },
  setup(){
    const which=ref("List")
    const show=ref(true)
    //暴露which
    provide("which",which)
    provide("show",show)
    return {
      which,
      show
    }
  }
}
</script>

<template>
    <div>
      <Navbar v-show="show"></Navbar>
      <component :is="which">
        <List></List>
        <Detail></Detail>
      </component>
    </div>
</template>

<style scoped>

</style>
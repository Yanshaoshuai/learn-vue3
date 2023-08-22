<script>
import Sidebar from "./Sidebar.vue";
import Content from "./Content.vue";

export default {
  name: "Layout",
  components:{
    Sidebar,
    Content
  },
  data(){
    return {
      show:true
    }
  },
  props:{
    hiddenSidebar:{
      type:Boolean,
      default:true
    }
  }
}
</script>

<template>
  <div>
    <Sidebar v-if="hiddenSidebar"></Sidebar>
    <Content></Content>
  </div>
</template>

<style scoped>

</style>
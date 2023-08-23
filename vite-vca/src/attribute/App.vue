<script>
import  Navbar from './Navbar.vue'
  export default {
    components:{
      Navbar
    },
    setup(){
     const handleLeftClick=(value)=>{
       console.log('handleLeftClick',value)
     }
     return {
       handleLeftClick
     }
    }
  }
</script>

<template>
  <div>app</div>
  <Navbar title="首页" :left-show="true" @leftEvent="handleLeftClick"></Navbar>
  <Navbar title="首页" :left-show="false"></Navbar>
</template>

<style scoped>

</style>
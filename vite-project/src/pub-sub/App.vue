<script>


import Navbar from "./Navbar.vue";
import Tabbar from "./Tabbar.vue";

export default {
  name: "App.vue",
  methods:{

  },
  components:{
    Tabbar,
    Navbar
  },
  data(){
    return {
    }
  }

}
</script>

<template>
  <div>
  <Navbar/>
  <Tabbar/>
  </div>
</template>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  ul{
    list-style: none;
  }
</style>
<template>
  <div>navbar</div>
  <button @click="handleClick">click</button>
</template>
<script>
  export default {
    data(){
      return {

      }
    },
    methods:{
      handleClick(){
        console.log("navbar")
      }
    }
  }
</script>
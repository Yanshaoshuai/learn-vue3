<script >
  export default {
    data(){
      return {
        data:"none"
      }
    },
    methods:{
      handleClick(){
        fetch("/api/mmdb/movie/v3/list/hot.json?ct=%E4%B8%8A%E6%B5%B7&ci=10&channelId=4")
            .then(res => res.json())
            .then(res => {
                  console.log(res)
                  this.data = res.data;
                }
            )
      }
    }
  }
</script>

<template>
    <div>
      <button @click="handleClick">getData</button>
      {{data}}
    </div>
</template>

<style >

</style>
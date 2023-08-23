<script>
import {inject, ref} from "vue";

export default {
  setup(){
    const datalist=ref(['aaa','bbb','ccc'])
    const which=inject("which")
    const handleClick=()=>{
      which.value="Detail"
    }
    return {
      datalist,
      handleClick
    }
  }
}
</script>

<template>
  <div>
    <ul>
      <li v-for="data in datalist" :key="data" @click="handleClick">
        {{data}}
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
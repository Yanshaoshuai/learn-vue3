<script setup>
import {ref} from "vue";

const count=ref(0)
const add= () => {
  count.value++
}
</script>

<template>
  <div>
    {{count}}
    <button @click="add">add</button>
  </div>

</template>

<style scoped>

</style>
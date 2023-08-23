<script setup>
import {inject, onMounted} from "vue";
//注入响应式对象
const show = inject("show")
onMounted(() => {
  show.value = false
})
</script>

<template>
  <div>detail</div>
</template>

<style scoped>

</style>
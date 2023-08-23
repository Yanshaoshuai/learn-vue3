<script setup>
import {inject, ref} from "vue";

const datalist = ref(['aaa', 'bbb', 'ccc'])
const which = inject("which")
const handleClick = () => {
  which.value = false
}
</script>

<template>
  <div>
    <ul>
      <li v-for="data in datalist" :key="data" @click="handleClick">
        {{ data }}
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
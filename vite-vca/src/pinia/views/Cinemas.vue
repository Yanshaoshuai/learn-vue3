<script setup>
import {onMounted, ref} from "vue";
import useCinemaStore from "../store/setup/cinemaStore.js";

let store =useCinemaStore();
let type = ref(1);
onMounted(() => {
  if (store.cinemas.length === 0) {
    store.getCinemaList();
  } else {
    console.log("缓存")
  }
})
</script>
<template>
  <div>
    <select v-model="type">
      <option :value="1">app订票</option>
      <option :value="0">前台兑换</option>
    </select>
    <ul>
      <li v-for="data in store.filterByTypeCinemas(type)" :key="data.cinemaId">
        {{ data.name }}
      </li>
    </ul>
  </div>

</template>

<style scoped>
li {
  padding: 10px;
}
</style>
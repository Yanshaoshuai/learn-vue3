<script setup>
import {mapActions, mapGetters, mapState, useStore} from "vuex";
import {onMounted, ref} from "vue";

let store = useStore();
let type = ref(1);
onMounted(() => {
  if (store.state.CinemaModule.cinemas.length === 0) {
    store.dispatch("CinemaModule/getCinemaList")
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
      <li v-for="data in store.getters['CinemaModule/filterByTypeCinemas'](type)" :key="data.cinemaId">
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
<script setup>
import {onMounted, ref} from "vue";
import useCinemaStore from "../store/setup/cinemaStore.js";
import {NavBar as vanNavBar, Icon as vanIcon} from 'vant';
import {useRouter} from "vue-router";
import useCityStore from "../store/setup/cityStore.js";

let router = useRouter();
let store = useCinemaStore();
let cityStore = useCityStore();

let type = ref(1);
onMounted(() => {
  if (store.cinemas.length === 0) {
    store.getCinemaList();
  } else {
    console.log("缓存")
  }
})
const handleChange = () => {
  router.push("/city")
  store.clearCinemaList();
}
</script>
<template>
  <div>
    <van-nav-bar title="影院">
      <template #left>
        <div @click="handleChange">{{ cityStore.cityName }}</div>
      </template>
      <template #right>
        <van-icon name="search" size="18" color="black"/>
      </template>
    </van-nav-bar>
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
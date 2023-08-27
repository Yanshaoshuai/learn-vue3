<script setup>
import axios from "axios";
import {computed, onMounted, ref} from "vue";
import lodash from "lodash";
import {IndexBar as vanIndexBar, IndexAnchor as vanIndexAnchor, Cell as vanCell} from 'vant';
import useCityStore from "../store/setup/cityStore.js";
import {useRouter} from "vue-router";


const store = useCityStore()
const router = useRouter()
const datalist = ref([])
const indexList = computed(() => {
  return datalist.value.map(item => item.type)
})


onMounted(async () => {
  let res = await axios({
    url: `https://m.maizuo.com/gateway?k=4259719`,
    headers: {
      "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16928101985697188218798081"}',
      "X-Host":
          "mall.film-ticket.city.list"
    }
  });
  datalist.value = filterCity(res.data.data.cities);
});

function filterCity(cities) {

  cities.sort((item1, item2) => {
    return item1.pinyin.substring(0, 1).toUpperCase().charCodeAt()
        - item2.pinyin.substring(0, 1).toUpperCase().charCodeAt()
  })
  let groupBy = lodash.groupBy(cities, item => item.pinyin.substring(0, 1).toUpperCase());
  const newCities = []
  for (let key in groupBy) {
    newCities.push({type: key, list: groupBy[key]})
  }
  return newCities;
}

const handleChange = ({name, cityId}) => {
  store.change(name, cityId)
  router.go(-1);
}
</script>

<template>
  <div>
    <van-index-bar :index-list="indexList">
      <div v-for="item in datalist" :key="item.type">
        <van-index-anchor :index="item.type"/>
        <van-cell :title="city.name" v-for="city in item.list" :key="city.cityId" @click="handleChange(city)">

        </van-cell>
      </div>

    </van-index-bar>
  </div>

</template>

<style scoped>

</style>
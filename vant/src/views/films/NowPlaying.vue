<script setup>
import {List as vanList, Cell as vanCell} from 'vant';
import axios from "axios";
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";

let datalist = ref([])
let loading = ref(false);
let finished = ref(false);
const pageNum = ref(1)
const total=ref(0)
let router = useRouter()
let handleClick = (id) => {
  router.push('/detail/' + id);
}
onMounted(async () => {
  let res = await axios({
    url: `https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=5887160`,
    headers: {
      "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16928101985697188218798081","bc":"310100"}',
      "X-Host":
          "mall.film-ticket.film.list"
    }
  });
  datalist.value = res.data.data.films;
  total.value=res.data.data.total;
})

const onLoad = async () => {
  if(total.value===datalist.value.length){
    finished.value=true
    return
  }
  pageNum.value++
  let res = await axios({
    url: `https://m.maizuo.com/gateway?cityId=310100&pageNum=${pageNum.value}&pageSize=10&type=1&k=5887160`,
    headers: {
      "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16928101985697188218798081","bc":"310100"}',
      "X-Host":
          "mall.film-ticket.film.list"
    }
  });
  datalist.value=[...datalist.value,...res.data.data.films];
  loading.value=false;
}
</script>

<template>
  <div>
    <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :immediate-check="false"
        offset="10"
        flex-direction: column
    >
      <van-cell v-for="item in datalist" :key="item.filmId" @click="handleClick(item.filmId)">
        <img :src="item.poster" style="width: 100px;float: left"/>
        <div>{{ item.name }}</div>
      </van-cell>
    </van-list>
  </div>

</template>

<style scoped lang="scss">
ul {
  li {
    padding: 10px;
  }
}

//覆盖组件的class vue提供的写法
//深度选择器
:deep(.van-cell__value) {
  text-align: left;
}
</style>
<script>
import axios from "axios";

export default {
  data() {
    return {
      datalist: []
    }
  },
  methods: {
    handleClick(id) {
      //location.href='#/detail/'+id
      //编程式导航
      this.$router.push('/detail/'+id);
      //对象
      //this.$router.push({
      //  name: 'detail',
      //  params: {
      //    filmId: id
      //  }
      //});

      //命名路由 加上参数让路由建立url
      //this.$router.push({name:'user',params:{username:'yan'}});

      //带查询参数 /register?plan=private
      //this.$router.push({path:'/detail',query:{filmId:id}});
    }
  },
  async mounted() {
    let res = await axios({
      url: "https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=5887160",
      headers: {
        "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.2.1","e":"16928101985697188218798081","bc":"310100"}',
        "X-Host":
            "mall.film-ticket.film.list"
      }
    });
    this.datalist = res.data.data.films;
  }
}
</script>

<template>
  <div>
    <ul>
      <!--<router-link custom :to="'/detail/'+item.filmId" v-slot="{navigate}" v-for="item in datalist" :key="item.filmId">-->
      <!--  <li @click="navigate">-->
      <!--    {{item.name}}-->
      <!--  </li>-->
      <!--</router-link>-->

      <!--编程式导航-->
      <li v-for="item in datalist" :key="item.filmId" @click="handleClick(item.filmId)">
        {{ item.name }}
      </li>
    </ul>
  </div>

</template>

<style scoped lang="scss">
ul {
  li {
    padding: 10px;
  }
}
</style>
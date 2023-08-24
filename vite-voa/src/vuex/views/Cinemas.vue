<script>
import {mapActions, mapGetters, mapState} from "vuex";

export default {
  mounted() {
    //if (this.$store.state.cinemas.length === 0) {
    if (this.cinemas.length === 0) {
      //this.$store.dispatch("getCinemaList")
      this.getCinemaList();
    } else {
      console.log("缓存")
    }
  },
  //computed: {
  //  filterByTypeCinemas() {
  //    return this.$store.state.cinemas.filter(item => item.eTicketFlag === this.type)
  //  }
  //},
  computed:{
    ...mapState('CinemaModule',['cinemas']),
    ...mapGetters('CinemaModule',['filterByTypeCinemas'])
  },
  methods:{
    ...mapActions('CinemaModule',['getCinemaList'])
  },
  data() {
    return {
      type: 1
    }
  }
}
</script>

<template>
  <div>
    <select v-model="type">
      <option :value="1">app订票</option>
      <option :value="0">前台兑换</option>
    </select>
    <ul>
      <!--<li v-for="data in filterByTypeCinemas" :key="data.cinemaId">-->
      <!--  {{ data.name }}-->
      <!--</li>-->
      <!--<li v-for="data in $store.getters.filterByTypeCinemas(type)" :key="data.cinemaId">-->
      <li v-for="data in filterByTypeCinemas(type)" :key="data.cinemaId">
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
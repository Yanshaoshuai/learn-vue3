<script>
import useList from "./useList.js";
import useSearch from "./useSearch.js";
export default {
  setup(){
    let {select,list} = useList();
    let {mytext,computedList}=useSearch(list)
    return {
      select,
      mytext,
      computedList
    }
  }
}
</script>

<template>
  <div>
    <select name="" id="" v-model="select">
      <option value="yan">yan</option>
      <option value="wang">wang</option>
      <option value="yang">yang</option>
      <option value="zhang">zhang</option>
    </select>
    <input type="text" v-model="mytext"/>

    <ul>
      <li v-for="item in computedList" :key="item.id">
        {{item.author}}--{{item.content}}
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
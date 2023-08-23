<script>


import {reactive, ref, toRef, watch} from "vue";
import useSearch from "./useSearch.js";

export default {
  setup () {
    const state = reactive({
      datalist: []
    })
    //异步的
    setTimeout(()=>{
      state.datalist=['aaa', 'aab', 'abc', 'bbc', 'bcd', 'aef', 'bdf', 'cde']
    },2000)
    //const {mytext,computedList}=useSearch(state)
    const watchText=ref('');

    //watch 中可放异步代码
    watch(watchText,(newValue,oldValue)=>{
      console.log('ajax',newValue,oldValue)
    },{
      immediate:true,
      deep:true
    })

    return {
      //computedList,
      //mytext
      watchText,
      ...useSearch(toRef(state,"datalist"))
    }
  }
}

</script>

<template>
    <div>
      <input type="text" v-model="mytext"/>
      <ul>
        <li v-for="item in computedList">
          {{item}}
        </li>
      </ul>
      <input type="text" v-model="watchText"/>
    </div>
</template>

<style scoped>

</style>
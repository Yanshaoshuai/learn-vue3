<script>
import axios from "axios";
export default {
  name: "Child",
  data(){
    return {
      datalist:[]
    }
  },
  mounted() {
    axios.get("hot.json").then(res=>{
      this.datalist=res.data.data.hot
    }).catch(err=>{
      console.log(err)
    })
  }
}
</script>

<template>
  <div>
    child
    <!--预留给父组件使用时在双标签中的内容填充-->
    <!--匿名插槽会把所有匿名元素插入其中 多个匿名插槽会重复插入-->
    <slot></slot>
    <slot name="slot-with-name"></slot>

    <!--暴漏:mylist属性的作用域-->
    <slot name="hot" :mylist="datalist">
      <ul>
        <li v-for="item in datalist" :key="item.id">
          {{item.nm}}
        </li>
      </ul>
    </slot>

  </div>
</template>

<style scoped>

</style>
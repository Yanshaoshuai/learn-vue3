<script>
import Child from "./Child.vue";

export default {
  name: "App",
  components: {Child},
  methods: {
    handleClick() {
      this.title = '3333';
      this.showChild = !this.showChild;
    }
  },
  data() {
    return {
      title: '11111111',
      showChild: true
    }
  },
  beforeCreate() {
    //一般不用 数据还没初始化
    //undefined
    console.log('beforeCreate', this.title)
  },
  created() {
    //data已经初始化完成
    //此方法可做一些初始化工作
    console.log('created', this.title)
    this.title = '2222'
  },
  beforeMount() {
    //挂载之前
    console.log('app#beforeMount', document.getElementById("main"))
  },
  mounted() {
    //挂载之后
    console.log('app#mounted', document.getElementById("main"))
    //订阅发布
    //ajax(fetch/axios) 是异步的
    //定时器 setInterval
    //访问dom
  },
  beforeUpdate() {
    //数据更新渲染前
    console.log('beforeUpdate')
  },
  updated() {
    //数据更新渲染后
    console.log('updated')
    //echarts resize方法
    //所有数据修改都会走此方法 可用this.$nextTick针对单一改动调用
  },
  beforeUnmount() {
    //组件卸载前调用
    console.log('app#beforeUnmount')
  },
  unmounted() {
    //组件卸载后调用
    console.log('app#unmounted')
  }
}
</script>

<template>
  <div id="main">
    app--{{ title }}
    <button @click="handleClick">change</button>
    <Child v-if="showChild"></Child>
  </div>
</template>

<style scoped>

</style>
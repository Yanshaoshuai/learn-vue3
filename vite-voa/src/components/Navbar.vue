<script>
export default {
  //禁止透传到根节点
  //inheritAttrs:false,
  name: "Navbar",
  data(){
    return {
      //showSidebar:true
    }
  },
  methods:{
    hiddenSideCar(){
      //子传父
      //this.showSidebar=!this.showSidebar;
      //this.$emit("event",this.showSidebar)
      this.$emit("event")
    }
  },
  //props单向绑定 只能父传子 不能在子组件中直接修改
  //props:['title','left','right']
  //指定类型 类型传递错误控制台会有警告
  props:{
    title:String,
    left:String,
    right:String,
    leftShow:{
      type:Boolean,
      default: true
    },
    rightShow:{
      type:Boolean,
      default: true
    },
    //参数验证
    validateProp:{
      type:String,
      //默认值
      //default:'success',
      //是否必传
      required:true,
      validator(value) {
        return ['success','warning','danger'].includes(value)
      }
    }
  }
}
</script>

<template>
  <div>
    <button v-show="leftShow">{{ left }}</button>
    {{title}}
    <button @click="hiddenSideCar">展开/折叠侧边栏</button>
    <button v-show="rightShow">{{right}}</button>
    <!--父节点传递的属性透传到该元素-->
    <!--<button v-bind="$attrs"></button>-->
  </div>
</template>

<style scoped>
  div{
    background: gray;
  }
</style>
<script>
export default {
  name: "Child",
  methods:{
    handleInput(evt){
      //将update:modelValue事件和值传回父组件
      this.$emit("update:modelValue",evt.target.value)
    }
  },
  props:{
    label:{
      type:String,
      default:""
    },
    type:{
      type:String,
      default:""
    },
    //接受v-model参数固定写法
    modelValue:{
      type:String,
      default: ""
    }
  }
}
</script>

<template>
  <div>
    <!--不只input 任何元素都可用此方法接收v-model绑定参数-->
    {{label}}:<input :type="type" :value="modelValue" @input="handleInput"/>
  </div>
</template>

<style scoped>

</style>
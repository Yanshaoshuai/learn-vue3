<script >
import {computed, reactive, ref, toRef, toRefs} from "vue";

export default {
  setup(){
    //this undefined
    console.log("setup",this)
    //创建响应式对象 reactive不支持对简单类型拦截
    const obj=reactive({
      name:"yan",
      age:100
    })
    //创建响应式基本数据类型 new Proxy({value:0})
    const count= ref(0);
    //创建响应式对象类型
    const complex=ref({name:'123',age:20})
    const myinput=ref(null)
    const toRefObj=reactive({
      datalist:[1,2,3,4],
      title:"mytitle",
      count//ref对象可直接作为reactive对象的属性
    })
    const handleClick=()=>{
      obj.name='xiaoming'
      //要使用value访问
      count.value++;
      complex.value.name="complex"
      complex.value.age++
      //dom元素
      console.log(myinput.value)
      //元素value属性
      console.log(myinput.value.value)
      //基于响应式对象上的一个属性，创建一个对应的 ref
      console.log("基本类型转成ref",toRef(obj,"age"))
      //将一个响应式对象转换为一个普通对象，这个普通对象的每个属性都是指向源对象相应属性的 ref
      console.log("对象转成ref",toRefs(obj))
      toRefObj.datalist=[1]
    }

    //计算属性
    const computedName=computed(()=>{
      return obj.name.substring(0,1).toUpperCase()+obj.name.substring(1);
    });
    return {
      obj,//返回状态对象
      count,
      complex,
      myinput,
      ...toRefs(toRefObj),
      age:toRef(obj,"age"),
      handleClick,//返回方法
      computedName
    }


  }
}
</script>

<template>
  <div>{{ obj.name }}--{{obj.age}}</div>
  <div><button @click="handleClick">click</button></div>
  <!--此处不用count.value-->
  <div>{{count}}</div>
  <div>{{complex.name}}--{{complex.age}}</div>
  <!--引用dom元素-->
  <input type="text" ref="myinput"/>
  <br/>
  <div>
    <ul>
      <li v-for="item in datalist">
        {{item}}
      </li>
    </ul>

    {{age}}
    {{computedName}}
  </div>
</template>

<style scoped>

</style>
<script>
import Child from "./Child.vue";
export default {
  name: "App",
  components:{
    Child
  },
  data(){
    return {
      controlChild:true,
      text:""
    }
  },
  methods:{
    handleClick(){
      this.controlChild=!this.controlChild
    }
  }
}
</script>

<template>
    <div>
      <Child>
        <!--插槽中的元素可以访问父组件内容-->
        <div>show in child slot content</div>
        <div>{{controlChild}}</div>
        <button @click="handleClick()">ChangeState</button>

        <!--使用具名插槽-->
        <!--<template v-slot:slot-with-name>-->
        <template #slot-with-name>
          <div>slot-with-name</div>
        </template>
        <!--作用域插槽-->
        <!--myprops可以取得slot暴漏出的属性并以此为写模板-->
        <!--<template v-slot:hot="myprops">-->
        <template #hot="myprops">
          搜索:<input type="text" v-model="text"/>
          <ul>
            <li v-for="item in myprops.mylist" :key="item.id">
              <div v-if="text!=''&&item.nm.includes(text)" style="color:red;">
                {{item.nm}}
              </div>
              <div v-else>
                {{item.nm}}
              </div>
            </li>
          </ul>
        </template>
      </Child>
    </div>
</template>

<style scoped>

</style>
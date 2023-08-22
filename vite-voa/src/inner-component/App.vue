<script>
export default {
  name: "App",
  data(){
    return{
      isShow:true
    }
  }
}
</script>

<template>
    <div>
      <button @click="isShow=!isShow">click</button>
      <Transition name="y">
        <div v-show="isShow">11111</div>
      </Transition>
    </div>
</template>

<style scoped>
  /*.v-enter-active,
  .v-leave-active{
    transition: opacity 0.5s ease;
  }
  .v-enter-from,
  .v-leave-to{
    opacity: 0;
  }*/
  .y-enter-active,
  .y-leave-active{
    transition: all 1s ease;
  }
  .y-enter-from,
  .y-leave-to{
    transform: translateX(100px);
    opacity: 0;
  }
</style>
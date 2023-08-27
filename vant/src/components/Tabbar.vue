<script setup>

</script>

<template>
  <div class="tabbar">
    <div>
      <ul>
        <!--自定义router-link包裹标签 默认是a链接-->
        <router-link custom to="/films" v-slot="{isActive,navigate}">
          <li :class="isActive?'myactive':''" @click="navigate">电影</li>
        </router-link>
        <router-link custom to="/cinemas" v-slot="{isActive,navigate}">
          <li :class="isActive?'myactive':''" @click="navigate">影院</li>
        </router-link>
        <router-link custom to="/center" v-slot="{isActive,navigate}">
          <li :class="isActive?'myactive':''" @click="navigate">我的</li>
        </router-link>
      </ul>
    </div>
  </div>

</template>

<style scoped lang="scss">
.myactive {
  color: red;
}

.tabbar {

  position: fixed;
  bottom: 0;

  width: 100%;
  height: 50px;
  line-height: 50px;

  text-align: center;
  background: white;
  z-index: 100;

  ul {

    display: flex;

    li {
      flex: 1;
    }

  }
}
</style>
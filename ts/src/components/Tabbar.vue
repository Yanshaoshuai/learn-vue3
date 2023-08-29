<script lang="ts" setup>

</script>

<template>
  <div class="tabbar">
    <div>
      <ul>
        <!--与history耦合度高-->
        <!--<li><a href="#/films">电影</a></li>-->
        <!--<li><a href="#/cinemas">影院</a></li>-->
        <!--<li><a href="#/center">我的</a></li>-->


        <!--<li>-->
        <!--  &lt;!&ndash;active-class="myactive"指定样式名&ndash;&gt;-->
        <!--  <router-link to="/films" active-class="myactive">电影</router-link>-->
        <!--</li>-->
        <!--<li>-->
        <!--  <router-link to="/cinemas" active-class="myactive">影院</router-link>-->
        <!--</li>-->
        <!--<li>-->
        <!--  <router-link to="/center" active-class="myactive">我的</router-link>-->
        <!--</li>-->


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
<script setup>
import {Swipe as vanSwipe, SwipeItem as vanSwipeItem} from 'vant';

</script>

<template>

  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>

    <ul class="header">
      <router-link custom to="/films/nowplaying" v-slot="{isActive,navigate}">
        <li @click="navigate">
          <span :class="isActive?'myactive':''">正在热映</span>
        </li>
      </router-link>
      <router-link custom to="/films/commingsoon" v-slot="{isActive,navigate}">
        <li @click="navigate">
          <span :class="isActive?'myactive':''">即将上映</span>
        </li>
      </router-link>
    </ul>
    <!--children组件插在此处-->
    <router-view></router-view>
  </div>
</template>
<style scoped lang="scss">
.myactive {
  color: red;
  border-bottom: 3px solid red;
}

.header {
  display: flex;
  height: 50px;
  line-height: 50px;
  text-align: center;
  //粘性定位
  position: sticky;
  top:0;
  z-index:100;
  background: white;
  li {
    flex: 1;

    span {
      padding: 10px 0;
    }
  }
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
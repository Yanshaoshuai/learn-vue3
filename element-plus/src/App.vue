<script lang="ts" setup>
import {ref} from 'vue'
//图标组件没用在全局导入时导入
import {Message, HomeFilled} from '@element-plus/icons-vue'
import {useRoute} from "vue-router";

const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({length: 20}).fill(item))
let route = useRoute();
</script>


<template>
  <!--侧边栏-->
  <el-container class="layout-container-demo" style="height: 100vh">
    <el-aside width="200px">
      <el-scrollbar>
        <!--:router="true" 点击跳转到index值对应的路由-->
        <!--default-active 激活的menu-->
        <el-menu :router="true" :default-active="route.fullPath">
          <el-menu-item index="/home">
            <el-icon>
              <home-filled/>
            </el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-sub-menu index="/news">
            <template #title>
              <el-icon>
                <message/>
              </el-icon>
              新闻管理
            </template>
            <el-menu-item index="/news/addNews">创建新闻</el-menu-item>
            <el-menu-item index="/news/newsList">新闻列表</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <!--右侧页面-->
    <el-container>
      <!--头-->
      <el-header style="text-align: right; font-size: 15px">
        <div>新闻管理系统</div>
        <div>欢迎XXX</div>
      </el-header>
      <!--主体-->
      <el-main>
        <el-scrollbar>
          <!--加载组件位置-->
          <router-view></router-view>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>


<!--全局影响-->
<style>
*{
  margin: 0;
  padding: 0;
}
.el-header{
  background: lightblue;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
</style>
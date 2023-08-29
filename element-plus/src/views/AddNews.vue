<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="新闻标题">
      <el-input v-model="form.title"/>
    </el-form-item>
    <el-form-item label="新闻分类">
      <el-select v-model="form.category" placeholder="选择分类">
        <el-option label="经济" value="经济"/>
        <el-option label="明星" value="明星"/>
        <el-option label="科技" value="科技"/>
      </el-select>
    </el-form-item>
    <el-form-item label="新闻内容">
      <el-input v-model="form.content" type="textarea"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import {reactive, ref} from 'vue'
import useNewsStore from "../store/news.js";
import {useRouter} from "vue-router";

const form = ref({title: "", category: "", content: ""})
let newsStore = useNewsStore();
let router = useRouter();
const onSubmit = () => {
  newsStore.add(form.value);
  router.push(`/news/newsList`)
}
</script>

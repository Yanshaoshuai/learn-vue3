<template>
  <el-table :data="newsStore.list" border style="width: 100%">

    <el-table-column label="标题" width="180">
      <template #default="scope">
        <b style="margin-left: 10px">{{ scope.row.title }}</b>
      </template>
    </el-table-column>

    <el-table-column prop="category" label="分类" width="180"/>
    <el-table-column prop="content" label="内容"/>
    <el-table-column>
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
        >Edit
        </el-button
        >
        <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
        >Delete
        </el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import {onMounted, ref} from "vue";
import useNewsStore from "../store/news.js";

const newsStore = useNewsStore();

</script>

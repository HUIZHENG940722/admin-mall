<template>
  <el-form :model="form">
    <el-form-item type="text" label="用户名:">
      <el-input v-model="form.username" name="username"></el-input>
    </el-form-item>
    <el-form-item label="密码:">
      <el-input type="password" v-model="form.password" name="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="">登录</el-button>
      <el-button>注册用户</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
  import {reactive} from 'vue'
  const form = reactive({
    username: '',
    password: '',
  });
</script>

<style scoped>

</style>
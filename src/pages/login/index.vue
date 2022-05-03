<template>
  <el-card class="login-form-layout">
    <el-form :model="loginForm" :rules="loginRules" label-position="left" ref="loginFormRef">
      <el-form-item prop="username">
        <el-input
            name="username"
            type="text"
            v-model="loginForm.username"
            autocomplete="on"
            placeholder="请输入用户名">
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input name="password"
                  type="password"
                  @keyup.enter="submitForm(loginFormRef)"
                  v-model="loginForm.password"
                  autocomplete="on"
                  placeholder="请输入密码">
        </el-input>
      </el-form-item>
      <el-form-item style="margin-bottom: 60px;text-align: center">
        <el-button style="width: 45%;" type="primary" :loading="isLoading.valueOf()"
                   @click="submitForm(loginFormRef)">登录</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>


<script lang="ts" setup>
import {adminLogin} from "@/composables/adminLogin";

const {loginForm, loginFormRef, loginRules, isLoading, submitForm} = adminLogin();



</script>

<style scoped>
.login-form-layout {
  position: absolute;
  left: 0;
  right: 0;
  width: 360px;
  margin: 140px auto;
  border-top: 10px solid #409EFF;
}
</style>
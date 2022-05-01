<template>
  <el-card class="login-form-layout">
    <el-form :model="loginForm" :rules="loginRules" label-position="left">
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
                  @keyup.enter="handleLogin"
                  v-model="loginForm.password"
                  autocomplete="on"
                  placeholder="请输入密码">
        </el-input>
      </el-form-item>
      <el-form-item style="margin-bottom: 60px;text-align: center">
        <el-button style="width: 45%;" type="primary" :loading="loading" @click="handleLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script lang="ts" setup>
import {reactive, ref} from 'vue';
const validateUsername = () => {

};
const validatePassword = () => {

}
const loginRules = reactive({
  username: [
    {
      required: true,
      trigger: 'blur',
      validator: validateUsername
    },
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword
    },
  ],
  password: []
});
const loading = ref(false);
const loginForm = reactive({
  username: '',
  password: ''
});

const handleLogin = ()=> {

};

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
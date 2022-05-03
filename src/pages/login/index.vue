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
        <el-button style="width: 45%;" type="primary" :loading="loading.valueOf()" @click="handleLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script lang="ts" setup>
import {reactive, ref} from 'vue';
import {validateUsername, validatePassword} from "@/utils/validate";
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';

const usernameValidate = (rule: any, value: any, callback: any) => {
  if (!validateUsername(value)) {
    callback(new Error('请输入正确用户名'));
  }
};
const passwordValidate = (rule: any, value: any, callback: any) => {
  if (!validatePassword(value)) {
    callback(new Error('密码长度不小于3'));
  }
}
const loginRules = reactive({
  username: [
    {
      required: true,
      trigger: 'blur',
      validator: usernameValidate
    },
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: passwordValidate
    },
  ]
});
const loading = ref(false);
const loginForm = reactive({
  username: '',
  password: ''
});
const store = useStore();
const router = useRouter();
const handleLogin = ()=> {
  loading.value = true;
  store.dispatch('Login', loginForm).then(() => {
    loading.value = false;
    router.push({path: '/'});
  }).catch(() => {
    loading.value = false;
  })
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
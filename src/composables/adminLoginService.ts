import {reactive, ref} from "vue";
import {validatePassword, validateUsername} from "@/utils/validate";
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {FormInstance, FormRules} from 'element-plus';
import {setCookie} from "@/utils/cookieUtils";

export const adminLoginService = () => {
    // 登录表单数据
    const loginForm = reactive({
        username: '',
        password: ''
    });
    // 是否点击登录按钮
    let isLoading = ref(false);
    const usernameValidate = (rule: any, value: any, callback: any) => {
        if (!validateUsername(value)) {
            callback(new Error('请输入正确用户名'));
        }
        callback();
    };
    const passwordValidate = (rule: any, value: any, callback: any) => {
        if (!validatePassword(value)) {
            callback(new Error('密码长度不小于3'));
        }
        callback();
    };
    // 登录校验规则
    const loginRules = reactive<FormRules>({
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
    // 执行登录逻辑
    const store = useStore();
    const router = useRouter();
    const loginFormRef = ref<FormInstance>();
    const submitForm = (formEl: FormInstance) => {
        if (!formEl) return;
        formEl.validate((valid: boolean) => {
            if (valid) {
                store.dispatch('Login', loginForm).then(() => {
                    isLoading.value = false;
                    setCookie("username", loginForm.username.trim(), 15);
                    setCookie("password", loginForm.password.trim(), 15);
                    router.push({path: '/'});
                }).catch(() => {
                    isLoading.value = false;
                })
            } else {
                return false;
            }
        });
    };
    return {
        loginForm,
        loginRules,
        loginFormRef,
        isLoading,
        submitForm,
    }
}
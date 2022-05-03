import {reactive, ref} from "vue";
import {validatePassword, validateUsername} from "@/utils/validate";
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {FormInstance, FormRules} from 'element-plus';

export const adminLogin = () => {
    // 登录表单数据
    const loginForm = reactive({
        username: '',
        password: ''
    });
    // 是否点击登录按钮
    const isLoading = ref(false);
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
    const loginFormRef = ref<FormInstance>();
    const store = useStore();
    const router = useRouter();
    const submitForm = (formEl: FormInstance) => {
        if (!formEl) return;
        formEl.validate((valid: boolean) => {
            if (valid) {
                store.dispatch('Login', loginForm).then(response => {
                    router.push({path: '/'});
                });
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
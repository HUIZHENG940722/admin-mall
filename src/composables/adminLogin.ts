import {reactive, ref} from "vue";
import {validatePassword, validateUsername} from "@/utils/validate";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

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
    };
    const passwordValidate = (rule: any, value: any, callback: any) => {
        if (!validatePassword(value)) {
            callback(new Error('密码长度不小于3'));
        }
    };
    // 登录校验规则
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
    // 执行登录逻辑
    const store = useStore();
    const router = useRouter();
    const handleLogin = ()=> {
        isLoading.value = true;
        store.dispatch('Login', loginForm).then(() => {
            isLoading.value = false;
            router.push({path: '/'});
        }).catch(() => {
            isLoading.value = false;
        })
    };
    return {
        loginForm,
        isLoading,
        loginRules,
        handleLogin,
    }
}




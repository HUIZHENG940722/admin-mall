import {login} from "@/api/admin";
import {AxiosResponse} from "axios";
import {setToken, getToken} from '@/utils/cookieUtils';

const admin = {
    state: {
        token: getToken(),
    },
    mutations: {
        SET_TOKEN: (state: any, token: any) => {
            state.token = token;
        }
    },
    actions: {
        Login(context: any, userInfo: any) {
            const username = userInfo.username.trim();
            const password = userInfo.password.trim();
            return new Promise((resolve: any, reject: any) => {
                login(username, password).then(function (response: AxiosResponse) {
                    const data = response.data;
                    // 保存token
                    const tokenStr = data.tokenHead + data.token;
                    setToken(tokenStr);
                    context.commit('SET_TOKEN', tokenStr)
                    resolve();
                }).catch(function (error: any) {
                    reject(error);
                })
            })
        }
    }
};

export default admin;
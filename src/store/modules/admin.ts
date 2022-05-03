import {login} from "@/api/admin";
import {AxiosResponse} from "axios";

const admin = {
    state: {

    },
    mutations: {

    },
    actions: {
        Login({}, userInfo: any) {
            const username = userInfo.username;
            const password = userInfo.password;
            return new Promise((resolve: any, reject: any) => {
                login(username, password).then(function (response: AxiosResponse) {
                    const data = response.data;
                    resolve();
                }).catch(function (error: any) {
                    reject(error);
                })
            })
        }
    }
};

export default admin;
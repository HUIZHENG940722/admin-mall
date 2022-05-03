import axios from 'axios';
import { ElMessage} from 'element-plus';
import {useStore} from "vuex";

const httpClientUtils = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 15000,
    headers: {
        'Content-type':'application/json;charset=utf-8',
    }
});

// response拦截器
httpClientUtils.interceptors.response.use(response => {
    const resp = response.data;
    let store = useStore();
    if (resp.code !== "200") {
        ElMessage({
            message: resp.message,
            type: 'error',
            duration: 3*1000
        });
        return Promise.reject('error')
    } else {
        return resp;
    }

}, error => {
    console.log('err' + error)// for debug
    ElMessage({
        message: error.message,
        type: 'error',
        duration: 3 * 1000
    })
    return Promise.reject(error)
});

export default httpClientUtils;
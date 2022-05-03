import axios from 'axios';

const httpClientUtils = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 15000,
    headers: {
        'Content-type':'application/json;charset=utf-8',
    }
});

export default httpClientUtils;
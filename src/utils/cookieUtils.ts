import Cookies from 'js-cookie';

const tokenKey = 'loginToken';

export function setToken(token: string) {
    return Cookies.set(tokenKey, token);
}

export function getToken() {
    return Cookies.get(tokenKey);
}

export function setCookie(key: string,value: string, expires: number) {
    return Cookies.set(key, value,{ expires: expires})
}

export function getCookie(key: string) {
    return Cookies.get(key)
}
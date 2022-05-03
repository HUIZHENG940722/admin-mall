import httpClientUtils from "@/utils/httpClientUtils";

export function login(username: string, password: string) {
    return httpClientUtils({
        url: '/admin/login',
        method: 'post',
        params: {
            username,
            password
        }
    })
}
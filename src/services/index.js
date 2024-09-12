import axios from "axios";
import { deleteAllCookies, getCookie } from "./helper";

const baseURL = "https://afu1.pythonanywhere.com"

const service = axios.create({ baseURL });
service.interceptors.response.use(
    response => {
        return response;
    },
    async error => {
        console.log(error, 'error');
        if (error.response.status === 403) {
            await deleteAllCookies();
        }
    },
);
service.interceptors.request.use(async config => {
    let token = await getCookie('_auth');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export { service };
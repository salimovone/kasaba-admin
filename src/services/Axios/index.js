import axios from "axios";
import { getCookie } from "../helper";

const baseURL = "https://afu1.pythonanywhere.com"

const Axios = axios.create({
    baseURL,
    // headers: {
    //     Authorization: getCookie("_auth")
    // }
})

export const AxiosLogin = axios.create({
    baseURL
})


export default Axios
import axios from "axios";

const baseURL = "https://afu1.pythonanywhere.com"

const Axios = axios.create({
    baseURL
})
export default Axios
import axios from "axios";
import Cookies from "js-cookie";

const userToken = Cookies.get("userToken")

export const instanse = axios.create({
    baseURL: "URL",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`,
    }
});
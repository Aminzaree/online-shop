import axios from "axios";
import Cookies from "js-cookie";

const userToken = Cookies.get("userToken")

export const instanse = axios.create({
    baseURL: "https://localhost:7173/api/",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`,
    }
});
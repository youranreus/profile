/**
 * @author 季悠然
 * @date 2021-12-29
 */
import axios from "axios";

const api = axios.create({
    baseURL: 'https://i.exia.xyz/',
    timeout: 2000
});

export default api;
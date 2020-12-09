import axios from "axios";

const api = axios.create({
    baseURL: "https://5fd078fa1f23740016631ae3.mockapi.io/api/"
});

export default api;
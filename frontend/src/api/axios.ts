import axios from 'axios';
import {env} from "../config/env"

const BACKEND_BASE_URL = env.BACKEND_BASE_URL;

const axiosClient = axios.create({
    baseURL : BACKEND_BASE_URL,
    withCredentials : true,
    headers : {
        "Content-Type" : "application/json"
    }
});

// request intercepter
axiosClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');
        
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        
        return config;
    },(error) => Promise.reject(error)
);

// response intercepter
axiosClient.interceptors.response.use(
    (response) => response, 
    (error) => {

        // Auto logout on unAuthorized
        if(error.response?.status === 401){
            localStorage.removeItem('authToken');
            window.location.href = '/login'
        }

        const normalizedError = {
            status : error.response?.status ?? 500,
            message : error.response?.data?.message || error.message || "something went wrong",
            errors : error.response?.data?.errors || null
        }
        return Promise.reject(normalizedError);
    }
);

export default axiosClient;
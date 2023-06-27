import axios from "axios";
import { useGlobalStore } from "./useGlobalStore";

const setIsLoading = useGlobalStore.getState().setIsLoading;

export const axiosApi= axios.create({
    baseURL:"https://notepads.eduardovelho.com",
});

axiosApi.interceptors.request.use(config => {
    setIsLoading(true);
    return config;
})

axiosApi.interceptors.response.use(response =>{
    setIsLoading(false);
    return response;
})
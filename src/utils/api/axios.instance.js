import axios from 'axios';

import { config } from '@utils/configs';

import { store } from '@store';

export const axiosPublicInstance = axios.create({
    baseURL: config.API_BASE_URL
});

export const axiosPrivateInstance = axios.create({
    baseURL: config.API_BASE_URL
});

axiosPrivateInstance.interceptors.request.use(
    async config => {
        const userInfo = store?.getState()?.user?.info;
        if (userInfo?.accessToken) {
            // Refresh token actions
            
            if (config?.headers)
                config.headers['authorization'] = `Bearer ${userInfo.accessToken}`;
        }
        
        return config;
    },
    error => Promise.reject(error)
);
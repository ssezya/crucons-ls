import axios from 'axios';

import { config } from '@utils/configs';
import { store } from '@store';
import { logout } from '@store/auth/auth.actions';

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

axiosPrivateInstance.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 401) { // Unauthorized
            logout();
            window.location.href = '/login'
        }
    }
);
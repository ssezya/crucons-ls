import axios from 'axios';

import { config } from '@utils/configs';

export const axiosInstance = axios.create({
    baseURL: config.API_BASE_URL
});
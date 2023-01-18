import axios from 'axios';

import { applicationConfig } from '@utils/configurations';

export const axiosInstance = axios.create({
    baseURL: applicationConfig.API_BASE_URL
});
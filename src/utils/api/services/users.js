import { publicApi } from '@utils/api';

export const getAuthTokenAsync = async (username, password) => await publicApi.post('/auth/token', { username, password });
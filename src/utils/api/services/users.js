import { publicApi } from '@utils/api';

export const getAuthToken = async (username, password) => await publicApi.post('/auth/token', { username, password });
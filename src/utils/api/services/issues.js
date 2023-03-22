import { privateApi } from '@utils/api';

export const getAllIssuesAsync = async () => await privateApi.get('/issues');
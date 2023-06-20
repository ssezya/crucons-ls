import { privateApi } from '@utils/api';

export const getAllIssuesAsync = async () => await privateApi.get('/issues');

export const createIssueAsync = async data => await privateApi.post('/issues', data);
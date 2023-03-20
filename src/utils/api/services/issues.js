import { privateApi } from '@utils/api';

export const getAllIssues = async () => await privateApi.get('/issues');
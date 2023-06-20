import { privateApi } from '@utils/api';

export const getAllProjectsAsync = async () => await privateApi.get('/projects');
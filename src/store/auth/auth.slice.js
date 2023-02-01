import {
    createAsyncThunk,
    createSlice
} from '@reduxjs/toolkit';

import { api } from '@utils/api';

const slicePrefix = 'auth';
const initialState = {
    isAuth: false,
    isError: false,
};

export const login = createAsyncThunk(
    `${slicePrefix}/login`,
    async (username, password) => {
        const response = await api.post('/auth/token', { username, password });
        return response;
    }
);

export const authSlice = createSlice({
    name: slicePrefix,
    initialState
});
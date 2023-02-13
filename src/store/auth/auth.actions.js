import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '@utils/api';

export const logout = state => {
    localStorage.removeItem('accessToken');
    state.info = null;
    state.loading = false;
    state.error = false;
    state.success = false;
};

export const login = createAsyncThunk(
    'auth/login',
    async request => {
        const { username, password } = request;
        const response = await api.post('/auth/token', { username, password });

        return response;
    }
);
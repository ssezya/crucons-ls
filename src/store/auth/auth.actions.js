import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAuthToken } from '@utils/api/services/users';

export const logout = state => {
    localStorage.removeItem('user');
    state.info = null;
    state.loading = false;
    state.error = false;
    state.success = false;
};

export const login = createAsyncThunk(
    'auth/login',
    async request => {
        const { username, password } = request;
        const response = await getAuthToken(username, password);

        return response;
    }
);
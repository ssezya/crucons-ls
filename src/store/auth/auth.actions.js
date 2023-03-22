import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAuthTokenAsync } from '@utils/api/services/users';

export const logout = state => {
    localStorage.removeItem('user');
};

export const login = createAsyncThunk(
    'auth/login',
    async request => {
        const { username, password } = request;
        const { data } = await getAuthTokenAsync(username, password);

        return data;
    }
);
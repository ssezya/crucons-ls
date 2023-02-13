import { createSlice } from '@reduxjs/toolkit';

import {
    logout,
    login
} from './auth.actions';

const initialState = {
    info: null,
    loading: false,
    error: false,
    success: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout
    },
    extraReducers: {
        [login.pending]: state => {
            state.loading = true;
            state.error = false;
        },
        [login.fulfilled]: (state, action) => {
            const { data } = action.payload;
            localStorage.setItem('accessToken', data.accessToken);
            state.info = data;
            state.loading = false;
            state.error = false;
            state.success = true;
        },
        [login.rejected]: state => {
            state.loading = false;
            state.error = true;
        }
    }
});

export { authSlice };
import {
    createAsyncThunk,
    createSlice
} from '@reduxjs/toolkit';

import { history } from '@utils/helpers';
import { applicationConfig } from '@utils/configurations';
import { axiosInstance } from '@utils/helpers'

const name = 'authentication';
const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, reducers, extraReducers });

export const authActions = { ...slice.actions, ...extraActions };
export const authReducer = slice.reducer;

function createInitialState() {
    return {
        user: JSON.parse(localStorage.getItem('user')),
        error: null
    };
}

function createReducers() {
    return {
        logout
    };

    function logout(state) {
        state.user = null;
        localStorage.removeItem('user');
        history.navigate('/login');
    }
}

function createExtraActions() {
    return {
        login: login()
    };    

    function login() {
        return createAsyncThunk(
            `${name}/login`,
            async ({ username, password }) => await axiosInstance.post(`${applicationConfig.API_BASE_URL}/auth/token`, { username, password })
        );
    }
}

function createExtraReducers() {
    return {
        ...login()
    };

    function login() {
        let {
            pending,
            fulfilled,
            rejected
        } = extraActions.login;

        return {
            [pending]: state => {
                state.error = null;
            },
            [fulfilled]: (state, action) => {
                const user = action.payload;
                
                localStorage.setItem('user', JSON.stringify(user));
                state.user = user;

                const { from } = history.location.state || { from: { pathname: '/' } };
                history.navigate(from);
            },
            [rejected]: (state, action) => {
                state.error = action.error;
            }
        };
    }
}
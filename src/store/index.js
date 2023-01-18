import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './authentication/authentication.slice';

export const store = configureStore({
    reducer: {
        auth: authReducer
    }
});
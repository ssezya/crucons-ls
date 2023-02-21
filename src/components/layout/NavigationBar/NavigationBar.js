import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { logout } from '@store/auth/auth.actions';

export const NavigationBar = () => {
    const dispatch = useDispatch();
    const handleLogout = useCallback(() => dispatch(logout()), [dispatch]);

    return (
        <React.Fragment>
            
        </React.Fragment>
    );
};
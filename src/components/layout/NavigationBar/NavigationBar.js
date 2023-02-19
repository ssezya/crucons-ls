import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
    GlobalStyles,
    CssBaseline,
    AppBar,
    Toolbar,
    Typography,
    Button
} from '@mui/material';

import { logout } from '@store/auth/auth.actions';

export const NavigationBar = () => {
    const dispatch = useDispatch();
    const handleLogout = useCallback(() => dispatch(logout()), [dispatch]);

    return (
        <React.Fragment>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <AppBar position='static' color='default' elevation={0} sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}>
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <Typography variant='h6' color='inherit' noWrap sx={{ flexGrow: 1 }}>
                        Crucons
                    </Typography>
                    <Button href='/login' variant='outlined' sx={{ my: 1, mx: 1.5 }} onClick={() => handleLogout()}>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};
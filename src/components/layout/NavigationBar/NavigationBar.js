import React from 'react';
import { useSelector } from 'react-redux';
import {
    GlobalStyles,
    CssBaseline,
    AppBar,
    Toolbar,
    Typography,
    Button
} from '@mui/material';

export const NavigationBar = () => {
    const { info } = useSelector(state => state.user);
    if (!info)
        return null;

    return (
        <React.Fragment>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <AppBar position='static' color='default' elevation={0} sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}>
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <Typography variant='h6' color='inherit' noWrap sx={{ flexGrow: 1 }}>
                        Crucons
                    </Typography>
                    <Button href='#' variant='outlined' sx={{ my: 1, mx: 1.5 }}>
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};
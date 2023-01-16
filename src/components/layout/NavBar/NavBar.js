import React from 'react';
import {
    GlobalStyles,
    CssBaseline,
    AppBar,
    Toolbar,
    Typography
} from '@mui/material';

export const NavBar = () => {
    <React.Fragment>
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
        <CssBaseline />
        <AppBar position='static' color='default' elevation={0} sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}>
            <Toolbar sx={{ flexWrap: 'wrap' }}>
                <Typography variant='h6' color='inherit' noWrap sx={{ flexGrow: 1 }}>
                    Crucons
                </Typography>
            </Toolbar>
        </AppBar>
    </React.Fragment>
};
import React from 'react';
import {
    useSelector,
    useDispatch
} from 'react-redux';
import {
    Container,
    CssBaseline,
    Box,
    Avatar,
    Typography,
    TextField,
    Button
} from '@mui/material';

import { authActions } from '@store/authentication/authentication.slice';

export const LoginForm = () => {
    const dispatch = useDispatch();
    const authUser = useSelector(s => s.auth.user);
    const authError = useSelector(s => s.auth.error);

    const handleSubmit = event => {
        event.preventDefault();
        
        const data = new FormData(event.target);
        const username = data.get('username');
        const password = data.get('password');

        return dispatch(authActions.login({ username, password }));
    };

    return (
        <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: 8,
                    alignItems: 'center'
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
                <Typography component='h1' variant='h5'>Sign in</Typography>
                <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        required
                        margin='normal'
                        fullWidth
                        id='username'
                        label='Username'
                        name='username'
                        autoFocus
                    />
                    <TextField
                        required
                        margin='normal'
                        fullWidth
                        id='password'
                        label='Password'
                        name='password'
                        type='password'
                    />
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    {
                        authError && <Typography>authError.message</Typography>
                    }
                </Box>
            </Box>
        </Container>
    );
};
import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
    Container,
    CssBaseline,
    Box,
    Avatar,
    Typography,
    TextField,
    Button
} from '@mui/material';

import { login } from '@store/auth/auth.actions';

export const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { error, success } = useSelector(state => state.user);

    const handleSubmit = useCallback(event => {
        event.preventDefault();
        
        const data = new FormData(event.target);
        const username = data.get('username');
        const password = data.get('password');

        return dispatch(login({ username, password }));
    }, [ dispatch ]);

    useEffect(() => {
        if (success)
            navigate('/');
    }, [ success, navigate ]);

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
                        error && <Typography>Auth error.</Typography>
                    }
                </Box>
            </Box>
        </Container>
    );
};
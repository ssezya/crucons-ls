import React from 'react';
import { Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import { PrivateRoute } from '@components/routing';
import { HomePage } from '@views/Home';
import { LoginPage } from '@views/Login';

export const Content = () => {
    return (
        <Container maxWidth={false}>
            <Routes>
                <Route exact path='/' element={<PrivateRoute><HomePage /></PrivateRoute>} />
                <Route path='/login' element={<LoginPage />} />
            </Routes>
        </Container>
    );
};
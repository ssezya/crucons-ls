import { Routes, Route } from 'react-router-dom';

import { PrivateRoute } from '@components/routing';
import { HomePage } from '@views/Home';
import { LoginPage } from '@views/Login';

export const ApplicationRoutes = () => (
    <Routes>
        <Route exact path='/' element={<PrivateRoute component={<HomePage />} />} />
        <Route path='/login' element={<LoginPage />} />
    </Routes>
);
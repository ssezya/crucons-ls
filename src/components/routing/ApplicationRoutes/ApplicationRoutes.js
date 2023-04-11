import { Routes, Route } from 'react-router-dom';

import { PrivateRoute } from '@components/routing';
import { LoginPage } from '@views/Login';
import { HomePage } from '@views/Home';
import { IssuesPage } from '@views/Issues';

export const ApplicationRoutes = () => (
    <Routes>
        <Route exact path='/login' element={<LoginPage />} />
        <Route exact path='/' element={<PrivateRoute component={<HomePage />} />} />
        <Route exact path='/issues' element={<PrivateRoute component={<IssuesPage />} />} />
    </Routes>
);
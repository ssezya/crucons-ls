import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { history } from '@utils/helpers';

export function PrivateRoute({ children }) {
    const { user: authUser } = useSelector(s => s.auth);

    if (!authUser)
        return <Navigate to='/login' state={{ from: history.location }} />;

    return children;
}
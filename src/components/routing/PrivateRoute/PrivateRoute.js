import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function PrivateRoute({ component }) {
    const location = useLocation();
    const { info } = useSelector(state => state.user);

    if (!info)
        return <Navigate to='/login' replace state={{ path: location.pathname }} />;

    return component;
}
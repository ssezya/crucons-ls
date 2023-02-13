import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function PrivateRoute({ component }) {
    const { info } = useSelector(state => state.user);

    if (!info)
        return <Navigate to='/login' replace />;

    return component;
}
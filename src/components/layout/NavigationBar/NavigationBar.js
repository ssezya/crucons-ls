import { useDispatch } from 'react-redux';
import { Layout } from 'antd';

import { logout } from '@store/auth/auth.actions';

import './NavigationBar.styles.scss';

export const NavigationBar = () => {
    const dispatch = useDispatch();
    const handleLogout = () => dispatch(logout());

    return (
        <Layout.Header className='navigation-bar'>
            <div className='navigation-bar-logo'></div>
        </Layout.Header>
    );
};
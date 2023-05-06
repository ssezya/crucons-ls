import { useSelector, useDispatch } from 'react-redux';
import { Dropdown, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { logout } from '@store/auth/auth.actions';

import './UserDropdown.styles.scss';

export const UserDropdown = () => {
    const userFullName = useSelector(state => state.user.info.fullName);
    const dispatch = useDispatch();
    const handleLogout = () => dispatch(logout());

    const items = [
        {
            key: 1,
            disabled: true,
            label: userFullName ?? 'User profile'
        },
        {
            key: 2,
            danger: true,
            label: <a rel='noopener noreferrer' href='/login' onClick={handleLogout}>Logout</a>
        }
    ];

    return (
        <Dropdown
            className='user-dropdown'
            menu={{ items }}
            placement='bottomRight'
        >
            <Avatar className='user-dropdown-avatar' shape='square' icon={<UserOutlined />} />
        </Dropdown>
    );
};
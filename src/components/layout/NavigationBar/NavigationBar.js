import { Layout } from 'antd';

import { UserDropdown } from './UserDropdown/UserDropdown';

import './NavigationBar.styles.scss';

export const NavigationBar = () => {
    return (
        <Layout.Header className='navigation-bar'>
            <div className='navigation-bar-logo'></div>
            <div className='navigation-bar-user'>
                <UserDropdown />
            </div>
        </Layout.Header>
    );
};
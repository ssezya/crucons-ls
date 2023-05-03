import { Layout } from 'antd';

import { IssuesDropdownButton } from './IssuesDropdownButton/IssuesDropdownButton';
import { UserDropdown } from './UserDropdown/UserDropdown';

import './NavigationBar.styles.scss';

export const NavigationBar = () => {
    return (
        <Layout.Header className='navigation-bar'>
            <div className='navigation-bar-logo'></div>
            <div className='navigation-bar-tools'>
                <IssuesDropdownButton />
            </div>
            <div className='navigation-bar-user'>
                <UserDropdown />
            </div>
        </Layout.Header>
    );
};
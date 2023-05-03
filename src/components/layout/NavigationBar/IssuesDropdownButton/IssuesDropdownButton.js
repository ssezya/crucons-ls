import { Dropdown } from 'antd';
import {
    AppstoreAddOutlined,
    UserOutlined,
    AppstoreOutlined
} from '@ant-design/icons';

import './IssuesDropdownButton.styles.scss';

export const IssuesDropdownButton = () => {
    const items = [
        {
            key: 1,
            icon: <AppstoreAddOutlined style={{ fontSize: '16px' }} />,
            label: 'Add new issue'
        },
        {
            key: 2,
            icon: <UserOutlined style={{ fontSize: '16px' }} />,
            label: 'Your issues list'
        }
    ];

    return (
        <Dropdown.Button
            className='issues-dropdown-button'
            menu={{ items }}
            placement='bottom'
            icon={<AppstoreOutlined style={{ fontSize: '16px' }} />}
        >
            Issues
        </Dropdown.Button>
    );
};
import { useNavigate } from 'react-router-dom';
import { Dropdown } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';

import './IssuesDropdownButton.styles.scss';

export const IssuesDropdownButton = () => {
    const navigate = useNavigate();

    const items = [
        {
            key: 1,
            label: 'Add new issue',
            onClick: () => navigate('/issues/create')
        },
        {
            key: 2,
            label: 'Your issues list'
        }
    ];

    return (
        <Dropdown.Button
            className='issues-dropdown-button'
            menu={{ items }}
            placement='bottom'
            icon={<AppstoreOutlined className='issue-dropdown-button-icon' />}
        >
            Issues
        </Dropdown.Button>
    );
};
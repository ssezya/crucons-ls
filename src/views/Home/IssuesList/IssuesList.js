import { useState, useEffect } from 'react';
import { List } from 'antd';

import { getAllIssuesAsync } from '@utils/api/services/issues';

import './IssuesList.styles.scss';

export const IssuesList = () => {
    const [initLoading, setInitLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        getAllIssuesAsync().then(response => {
            const { issues } = response.data;
            setData(issues);
            setInitLoading(false);
        });
    }, []);

    return (
        <List
            className='issues-list'
            loading={initLoading}
            dataSource={data}
        />
    );
};
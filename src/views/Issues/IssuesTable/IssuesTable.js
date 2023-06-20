import { useState, useEffect } from 'react';
import { Table } from 'antd';

import { getAllIssuesAsync } from '@utils/api/services/issues';

const columns = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Project', dataIndex: 'projectName', key: 'projectName' },
    { title: 'Reporter', dataIndex: 'reporterName', key: 'reporterName' },
    { title: 'Status', dataIndex: 'statusName', key: 'statusName' },
    { title: 'Executor', dataIndex: 'executorName', key: 'executorName' }
];

export const IssuesTable = () => {
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        getAllIssuesAsync().then(response => {
            const { issues } = response.data;

            setIssues(issues);
        });
    });

    return (
        <div style={{ padding: '15px', backgroundColor: 'white' }}>
            <Table size='small' dataSource={issues} columns={columns} />

        </div>
    );
};
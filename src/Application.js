import { useSelector } from 'react-redux'; 
import { Layout } from 'antd';

import { NavigationBar } from '@components/layout';
import { ApplicationRoutes } from '@components/routing';

const Application = () => {
    const { info } = useSelector(state => state.user);
    if (!info)
        return <ApplicationRoutes />

    return (
        <Layout>
            <NavigationBar />
            <Layout.Content>
                <ApplicationRoutes />
            </Layout.Content>
        </Layout>
    );
};

export default Application;
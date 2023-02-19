import React from 'react';
import { useSelector } from 'react-redux'; 

import { NavigationBar, Content } from '@components/layout';

const Application = () => {
    const { info } = useSelector(state => state.user);

    return (
        <div>
            { info && <NavigationBar /> }
            <Content />
        </div>
    );
};

export default Application;
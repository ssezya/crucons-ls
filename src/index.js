import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from '@store';
import Application from './Application';

const rootNode = document.getElementById('root');
ReactDOM.createRoot(rootNode).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Application />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

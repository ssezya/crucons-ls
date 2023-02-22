import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider as ThemeProvider, theme } from 'antd';

import { store } from '@store';
import Application from './Application';

import './styles.scss';

const rootNode = document.getElementById('root');
ReactDOM.createRoot(rootNode).render(
    <React.StrictMode>
        <ReduxProvider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={{ algorithm: theme.defaultAlgorithm }}>
                    <Application />
                </ThemeProvider>
            </BrowserRouter>
        </ReduxProvider>
    </React.StrictMode>
);

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { LocalStorage } from '@services';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    <Route {...rest} render={props => (
        LocalStorage.get('user')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
};
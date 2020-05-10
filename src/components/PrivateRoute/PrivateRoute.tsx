import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import auth from '../../auth/auth';

export const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => (
    <Route
        {...rest}
        render={({ location }) =>
            auth.isAuthenticated() ? (
                children
            ) : (
                <Redirect to={{ pathname: '/login', state: { from: location } }} />
            )
        }
    />
);

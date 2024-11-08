import React from 'react';
import { useAuth } from 'shared/lib/useAuth/useAuth';
import { ErrorPage } from 'pages/error';

export function PrivateRoute({ children }) {
    const isAuth = useAuth();

    return (isAuth ? <>{children}</> : <ErrorPage />);
}
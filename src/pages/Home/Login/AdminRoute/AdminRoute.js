import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../../hooks/useAuth';




const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading, isAdmin } = useAuth();
    // console.log(user);
    if (isLoading) {
        return <Spinner animation="border" variant="info" />
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email === isAdmin?.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/userDashboard",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;
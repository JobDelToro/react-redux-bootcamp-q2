import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { rootSlice } from '../slice';

const ProtectedAuthRoute = ({ component: Component, ...rest }) => {
    const { useAuth } = rootSlice;
    const { user, isAuthenticated, isLoading } = useAuth();

    return (
        <Route {...rest} component={props => {
                    if(!isAuthenticated && !user) {
                        return <Redirect exact to={
                            {
                                pathname: '/login',
                                state: {
                                    from: props.location
                                }
                            }
                        }
                        />
                    }
                    return <Component {...rest} {...props} />
                }
            }
        />
    );
};

export default ProtectedAuthRoute;

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedAuthRoute = ({ isAuthenticated, component: Component, ...rest }) => {
    return (
        <Route {...rest} component={props => {
                    if(isAuthenticated === false) {
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

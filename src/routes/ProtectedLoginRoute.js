import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedLoginRoute = ({ isAuthenticated, component: Component, ...rest }) => {
    return (
        <Route {...rest} component={props => {
                    if(isAuthenticated === true) {
                        return <Redirect exact to={
                            {
                                pathname: '/products',
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

export default ProtectedLoginRoute;

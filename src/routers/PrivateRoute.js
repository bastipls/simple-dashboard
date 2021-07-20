import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';


export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    
    localStorage.setItem('lastPath', rest.location.pathname);
    return (
        <Route { ...rest }
            render={ (props) => (
                // Si es true  le doy a acceso al componente
                ( isAuthenticated )
                    ? ( <Component { ...props } /> )
                    : ( <Redirect to="/login" /> )
            )}
        
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
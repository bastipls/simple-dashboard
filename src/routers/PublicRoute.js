import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';


export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    return (
        <Route { ...rest }
            render={ (props) => (
                // Si es false doy acceso al componente Login
                ( !isAuthenticated )
                    ? ( <Component { ...props } /> )
                    // Si no existe la ruta decido donde enviarlo
                    : ( <Redirect to="/admin/dashboard" /> )
            )}
        
        />
    )
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
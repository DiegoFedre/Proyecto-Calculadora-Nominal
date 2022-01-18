import React from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRoutes = ({ log, component: Component, ...resto }) => {
    return ( 
        <Route {...resto} component={(props) =>
            //Si log=true entonces voy a renderizar <Component />, pero si log=false me redirige a /login
            log ? <Component {...props} /> : <Redirect to="/auth/login" />
        } />
    )
}

export default PrivateRoutes;

import React from 'react'
import { Redirect, Route } from 'react-router'

const PublicRoutes = ({ log, component: Component, ...resto }) => {
    return (
        <Route {...resto} component={(props) =>
            //Si log=true entonces voy a renderizar <Component />, pero si log=false me redirige a /login
            log ? <Redirect to="/" /> : <Component {...props} />
        } />
    )
}

export default PublicRoutes

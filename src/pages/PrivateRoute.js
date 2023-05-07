import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Outlet, Navigate } from 'react-router-dom'
import { Cargando } from '../componentes'

const PrivateRoute = () => {

    //Si no lo llamas user NO funciona
    const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
    } = useAuth0();

    if (isLoading) return <div><Cargando/></div>
    //if (isAuthenticated) return <div>Se ha autenticado</div>
    /*if (!user) {
    return <Navigate to='/' />;
    }
    return children*/
    return (
        user ? <Outlet/> : <Navigate to='/' />
    )
}

export default PrivateRoute
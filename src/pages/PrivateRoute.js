import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Navigate } from 'react-router-dom'
import { useUsuarioContexto } from '../contextos/usuario_contexto'

const PrivateRoute = ({ children }) => {
    //Si no lo llamas user NO funciona
    const {user} = useAuth0()
    if (!user) {
        return user ? children : <Navigate to='/' />
    }
    return children
}

export default PrivateRoute
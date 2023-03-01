import React, { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UsuarioContexto = React.createContext()

export const UsuarioProvider = ({ children }) => {

    //WARNING!!! Estos tres primeros valores se tienen que llamar IGUAL que en la documentación
    //si no, no funciona
    const {user, loginWithRedirect, logout} = useAuth0()

    const [miUsuario, setMiUsuario] = useState(null)

    //Le ponemos que el useEffect se lance cada vez que cambie el valor del 'autenticado'
    useEffect (() => {
        /*console.log(`usuario': ${user}`)
        console.log(`autenticado': ${isAuthenticated}`)
        console.log(`estaCargando': ${isLoading}`)*/
        setMiUsuario(user)
    }, [user])

    return (
        <UsuarioContexto.Provider value={{loginWithRedirect, logout, miUsuario}}>
            {children}
        </UsuarioContexto.Provider>
    )
}

export const useUsuarioContexto = () => {
    return useContext(UsuarioContexto)
}
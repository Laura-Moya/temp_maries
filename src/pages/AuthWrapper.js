import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'

//Importaciones propias

//Este componente contendrá todas las rutas del proyecto
const AuthWrapper = ({children}) => {
    const {estaCargando, error} = useAuth0();
    if (estaCargando) return <Contenedor>'Cargando'</Contenedor> 
    if (error) return <Contenedor>{error.message}</Contenedor>
    //Si no le pones el <></> te da un error en el componente OJO
    return <>{children}</>
}

const Contenedor = styled.section`
    min-height:100vh;
    display:grid;
    place-items: center;
`

export default AuthWrapper
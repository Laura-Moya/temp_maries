//Importaciones básicas
import React from 'react'
import styled from 'styled-components'
const Error404 = () => {
  return (
    <Contenedor_Error404 className='pagina-completa'>
      <h1>Error 404</h1>
      <span></span>
      <h3>¡Ups! La página que estás buscando no existe</h3>
    </Contenedor_Error404>
  )
}

const Contenedor_Error404 = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export default Error404
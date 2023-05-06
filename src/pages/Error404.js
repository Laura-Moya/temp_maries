//Importaciones básicas
import React from 'react'
import styled from 'styled-components'
const Error404 = () => {
  return (
    <Contenedor_Error404 className='pagina-completa'>
      <section>
        <h1>Error 404</h1>
        <h3>¡Ups! La página que estás buscando no existe</h3>
      </section>
    </Contenedor_Error404>
  )
}

const Contenedor_Error404 = styled.main`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
height: auto;
h1 {
  font-size: 5rem;
}
h3 {
  text-transform: none;
}
`

export default Error404
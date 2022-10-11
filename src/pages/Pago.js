import React from 'react'
import styled from 'styled-components'
import { EsqueletoSplit } from '../componentes/EsqueletoSplit'

const Pago = () => {
  return (
    <main>
      <EsqueletoSplit title='pago'/>
      <Contenedor_Pago className='pagina-espacio-central'>
        <h1>Paga aquí!</h1>
      </Contenedor_Pago>
      
    </main>
  )
}

const Contenedor_Pago = styled.div`
`

export default Pago
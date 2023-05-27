//Importaciones básicas
import React from 'react'
import styled from 'styled-components'
import { EsqueletoSplit} from '../componentes/EsqueletoSplit'
import { PagoComponente } from '../componentes'

//Importaciones propias
import { useCarritoContexto } from '../contextos/carrito_contexto'
import { Link } from 'react-router-dom'

const Pago = () => {
  const {carrito} = useCarritoContexto();
  return (
    <main>
      <EsqueletoSplit title='Pago'/>
      <Contenedor_Pago className='pagina-espacio-central'>
        {
          carrito.length < 1 ?
          <div className='vacio'>
            <h2>Tu carrito está vacío</h2>
            <Link to='/productos' className='btn'> PRODUCTOS </Link>
          </div> 
          : 
          <PagoComponente></PagoComponente>}
      </Contenedor_Pago>
    </main>
  )
}

const Contenedor_Pago = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
.vacio {
    text-align: center;
  }
`

export default Pago
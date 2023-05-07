import React from 'react'
import styled from 'styled-components'
import { EsqueletoSplit} from '../componentes/EsqueletoSplit'
import { Checkout } from '../componentes'

//Importaciones propias
import { useCarritoContexto } from '../contextos/carrito_contexto'
import { Link } from 'react-router-dom'

const Pago = () => {
  /*const {carrito} = useCarritoContexto();
  return (
    <main>
      <EsqueletoSplit title='pago'/>
      <Contenedor_Pago className='pagina-espacio-central'>
        {
          carrito.length < 1 ? 
          (
          <div className='vacio'>
            <h2>Your cart is empty</h2>
            <Link to='/productos' className='btn'>Fill it!</Link>
          </div> )
          :
          (<Checkout/>)
        }
      </Contenedor_Pago>
      
    </main>
  )*/
}

const Contenedor_Pago = styled.div`
`

export default Pago
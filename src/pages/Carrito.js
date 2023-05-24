//Importaciones básicas
import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//Importaciones propias
import { EsqueletoSplit } from '../componentes/EsqueletoSplit'
import { useCarritoContexto } from '../contextos/carrito_contexto';
import CarritoComponente from '../componentes/CarritoComponente'


const Carrito = () => {
  const {carrito} = useCarritoContexto();

  //Si el carrito está vacío
  if (carrito.length < 1) {
    return( <Contenedor_Carrito>
      <div className='vacio'>
        <h2>Tu carrito está vacío, ¡echa un vistazo a nuestros productos!</h2>
        <Link to='/productos' className='btn'>Productos</Link>
      </div>
    </Contenedor_Carrito>)
  }
  
  return (
    <main>
      <EsqueletoSplit title='Carrito'></EsqueletoSplit>
      <Contenedor_Carrito>
        <CarritoComponente></CarritoComponente>
      </Contenedor_Carrito>
    </main>
  )
}

const Contenedor_Carrito = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 10rem);
.vacio {
    text-align: center;
  }
  h2 {
    margin-bottom: 1rem;
    text-transform: none;
  }
`

export default Carrito
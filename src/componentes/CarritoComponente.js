import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

//Importaciones propias
import { useCarritoContexto } from '../contextos/carrito_contexto';
import ProductoCarrito from './ProductoCarrito';
import PrecioTotalCarrito from './PrecioTotalCarrito';

const CarritoComponente = () => {
  const {carrito, vaciarCarrito} = useCarritoContexto()
  return (
    <Contenedor_CarritoComponente className='section section-centrada'>
        <div className='columnas-carrito'>
          <h5>Producto</h5>
          <h5>Precio individual</h5>
          <h5>Cantidad</h5>
          <h5>Subtotal</h5>
          <span></span>
        </div>
        <hr />
        {carrito.map((item) => {
          return <ProductoCarrito key={item.id} {...item}></ProductoCarrito>
        })}
        <hr/>
        <div className='btns-container'>
          <Link to='/productos' className='continuarComprando-btn'>Continuar comprando</Link>
          <button type='button' className='continuarComprando-btn vaciar-btn'
                  onClick={vaciarCarrito}>
              Vaciar carrito
          </button>
        </div>
        <PrecioTotalCarrito/>      
    </Contenedor_CarritoComponente>
  )
}

const Contenedor_CarritoComponente = styled.section`

.columnas-carrito {
  display: grid;
  grid-template-columns: 20rem 1fr 1fr 1fr auto;
  justify-items: center;
  column-gap: 1rem;
  h5 {
    font-weight: 400;
  }
}
.btns-container{
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}
.continuarComprando-btn { 
  background: transparent;
  border-color: transparent;
  padding: 0.25rem 0.5rem;
  background: #b19277;
  color: white;
  border-radius: 0.25rem;
  cursor: pointer;
}
.vaciar-btn {
  background: red !important;
}
`
 
export default CarritoComponente
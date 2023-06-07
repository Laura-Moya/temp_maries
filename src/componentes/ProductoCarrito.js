import React from 'react'
import styled from 'styled-components'
import { formatearPrecio } from '../utils/helpers'
import MasMenosBotones from './MasMenosBotones'
import { FaTimes, FaUser, FaUserInjured } from 'react-icons/fa';
import { useCarritoContexto } from '../contextos/carrito_contexto'

const ProductoCarrito = ({ id, imagen, nombre, color, precio, cantidad }) => {
  const { eliminarDelCarrito, modificarCantidad } = useCarritoContexto();
  const sumar = () => {
    modificarCantidad(id, 'mas')
  }
  const quitar = () => {
    modificarCantidad(id, 'menos')
  }
  return (
    <Contenedor_ProductoCarrito>
      <div className='title'>
        <img src={imagen} alt={nombre}></img>
        <div>
          <h5 className='name'>{nombre}</h5>
          <p className='color'>
            color :
            <span style={{backgroundColor:color, borderRadius: '50% '}} />
          </p>
          <h5 className='price-small'>{formatearPrecio(precio)}</h5>
        </div>
      </div>
      <h5 className='price'>{formatearPrecio(precio)}</h5>
      <MasMenosBotones cantidad={cantidad} sumar={sumar} quitar={quitar} />
      <h5 className='subtotal'>{formatearPrecio(precio * cantidad)}</h5>
      <button className='remove-btn' onClick={() => eliminarDelCarrito(id, color)}>
        <FaTimes color='red'/>
      </button>
    </Contenedor_ProductoCarrito>
  )
}

const Contenedor_ProductoCarrito = styled.article`
  .subtotal {
    display: none;
  }
  .price {
    display: none;
  }
  display: grid;
  grid-template-columns: 12.5rem auto auto;
  grid-template-rows: 4.7rem;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  align-items: center;
  .title {
    grid-template-rows: 4.7rem;
    display: grid;
    grid-template-columns: 4.7rem 7.813rem;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 0.25rem;
    object-fit: cover;
  }
  h5 {
    font-size: 0.75rem;
    margin-bottom: 0;
  }
  .color {
    color: #5a5a5a;
    font-size: 0.75rem;
    text-transform: capitalize;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      background: red;
      margin-left: 0.5rem;
      border-radius: 0.25rem;
    }
  }
  .price-small {
    color: #5a5a5a;
  }
  .amount-btns {
    width: 4.7rem;
    button {
      width: 1rem;
      height: 0.5rem;
      font-size: 0.75rem;
    }
    h2 {
      font-size: 1rem;
    }
  }
  .remove-btn {
    color: white;
    background: transparent;
    border: transparent;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    cursor: pointer;
    vertical-align: center;
  }
  
  @media (min-width: 776px) {
    .subtotal {
      display: block;
      //margin-bottom: 0;
      color: #5a5a5a;
      font-weight: 400;
      font-size: 1rem;
      margin-bottom: 1.5rem;
    }
    .price-small {
      display: none;
    }
    .price {
      display: block;
      font-size: 1rem;
      color: #5a5a5a;
      font-weight: 400;
      margin-bottom: 1.5rem;
    }
    .name {
      font-size: 0.85rem;
    }
    .color {
      font-size: 0.85rem;
      span {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 75px;
    img {
      height: 100%;
    }
    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
      
    }
    .amount-btns {
      width: 100px;
      button {
        width: 1.5rem;
        height: 1rem;
        font-size: 1rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
  }
`

export default ProductoCarrito
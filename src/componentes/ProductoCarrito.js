import React from 'react'
import styled from 'styled-components'

//Importaciones propias
import { useCarritoContexto } from '../contextos/carrito_contexto'
import { Link } from 'react-router-dom'
import MasMenosBotones from '../componentes/MasMenosBotones'
import { FaTimes, FaUser, FaUserInjured } from 'react-icons/fa';

const ProductoCarrito = ({id, imagen, nombre, color, precio, cantidad}) => {
  //Nos traemos las funciones que va a poder usar cada producto
  const {eliminarDelCarrito, modificarCantidad} = useCarritoContexto();
  const sumar = () => {}
  const quitar = () => {}
  return (
    <Contenedor_ProductoCarrito>
      <div className='titulo'>
        <img src={imagen} alt={nombre}></img>
        <div>
          <h5 className='nombre'>{nombre}</h5>
          <p className='color'>Color: <span style={{backgroundColor:color, borderRadius: '50% '}}></span></p>
          <h5 className='precio-responsive'>{precio} €</h5>
        </div>
      </div>
      <h5 className='precio'>{precio} €</h5>
      <MasMenosBotones cantidad={cantidad} sumar={sumar} quitar={quitar}></MasMenosBotones>
      <h5 className='subtotal'>{precio * cantidad} €</h5>
      <button type='button' className='eliminar-btn' onClick={() => {eliminarDelCarrito(id, color)}}><FaTimes color='red'/></button>
      
    </Contenedor_ProductoCarrito>
  )
}

const Contenedor_ProductoCarrito = styled.article`
  .subtotal {
    display: none;
  }
  .precio {
    display: none;
  }
  display: grid;
  grid-template-columns: 12.5rem auto auto;
  grid-template-rows: 4.7rem;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  align-items: center;
  .titulo {
    grid-template-rows: 4.7rem;
    display: grid;
    grid-template-columns: 4.7rem 7.8rem;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }
  img {
    /*width: 50%;
    height: 50%;
    display: block;
    border-radius: 0.25rem;
    object-fit: cover;*/
    float: left;
    width:  6.25rem;
    height: 6.25rem;
    object-fit: cover;
  }
  h5 {
    font-size: 0.75rem;
    //margin-bottom: 0;
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
  .precio-responsive {
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
  .eliminar-btn {
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
    }
    .precio-responsive {
      display: none;
    }
    .precio {
      display: block;
      font-size: 1rem;
      color: #5a5a5a;
      font-weight: 400;
    }
    .nombre {
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
    .titulo {
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
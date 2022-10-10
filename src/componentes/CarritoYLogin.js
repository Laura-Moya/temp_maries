//Importaciones básicas
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { useProductosContexto } from '../contextos/productos_contexto';

//Importaciones propias
import { FaShoppingCart, FaUser, FaUserInjured } from 'react-icons/fa';

const CarritoYLogin = () => {
  const {navbarLateralAbierta, cerrarNavbarLateral} = useProductosContexto();
  return (
    <Contenedor_CarritoYLogin className='contenedor-btn-carrito'>
      <Link to="/cart" className='btn-carrito' onClick={cerrarNavbarLateral}>
        <span className='contenedor-carrito'>
          <FaShoppingCart />
          <span className='items-carrito'>2</span>
        </span>
      </Link>
      <button type='button' className='btn-auth'>
        <FaUser/>
      </button>
    </Contenedor_CarritoYLogin>
  )
}

const Contenedor_CarritoYLogin = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  span {
    padding: 1rem;
  }

  .btn-carrito {
    display:flex;
    color: black;
    font-size: 1.5rem;
  }

  .contenedor-carrito {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }

  .items-carrito {
    position: absolute;
    top: -0rem;
    right: -0.1rem;
    background: #b19277;
    width: 0.3rem;
    height: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    font-weight: 600;
    color: white;
    padding: 0.5rem;
  }

  .btn-auth {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: black;
    svg {
      margin-left: 5px;
    }
  }

`

export default CarritoYLogin;
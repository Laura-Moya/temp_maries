//Importaciones básicas
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


//Importaciones propias
import { FaShoppingCart, FaUser, FaUserInjured } from 'react-icons/fa';
import { useProductosContexto } from '../contextos/productos_contexto';
import { useCarritoContexto } from '../contextos/carrito_contexto';
import { useUsuarioContexto } from '../contextos/usuario_contexto';

const CarritoYLogin = () => {
  const {cerrarNavbarLateral} = useProductosContexto();
  const {items_carrito} = useCarritoContexto();
  const {loginWithRedirect, miUsuario, logout} = useUsuarioContexto();

  return (
    <Contenedor_CarritoYLogin className='contenedor-btn-carrito'>
      <Link to="/carrito" className='btn-carrito' onClick={cerrarNavbarLateral}>
        <span className='contenedor-carrito'>
          <FaShoppingCart />
          <span className='items-carrito'>{items_carrito}</span>
        </span>
      </Link>

      {miUsuario ? 
      <button type='button' className='btn-auth' onClick={() => logout({
        returnTo: window.location.origin
      })}>
        Logout <FaUser id='especial'/>
      </button> : 
      <button type='button' className='btn-auth' onClick={loginWithRedirect}>
        Login <FaUser id='especial'/>
    </button>
      }
      
      
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
    background: transparent;
    border-color: transparent;
    font-size: 1rem;
    cursor: pointer;
    svg {
      margin-left: 5px;
    }
    
  }

  #especial{
      font-size: 1.5rem !important;
  }

`

export default CarritoYLogin;
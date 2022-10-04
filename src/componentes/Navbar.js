//Importaciones básicas
import React from 'react'
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

//Importaciones propias
import logo from '../images/logo.png';
import {links} from '../utils/constantes'
import CarritoYLogin from './CarritoYLogin.js'



export const Navbar = () => {
  return (
    <Contenedor_Navbar>
      <div className='navbar-centrada'>
        <div className='navbar-botones'>
          <Link to='/'>
            <img src={logo}></img>
          </Link>
          <button type='button' className='btn-Navbar'>
            <FaBars />
          </button> 
        </div>
      
        <ul className='nav-links'>
          {links.map((item) => {
            const{id, nombre, url} = item;
            return(<li key={id}>
                    <Link to={url}>{nombre}</Link>
                  </li>) 
          })}
        </ul>
        <CarritoYLogin />
      </div>
    </Contenedor_Navbar>
  )
}

const Contenedor_Navbar = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem;

  .navbar-centrada {
    width: 90vw;
    margin: 0 auto;
    //max-width: var(--max-width);
  }
  .navbar-botones {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 10rem;
      //margin-left: -15px;
    }
  }
  .btn-Navbar {
    background: transparent !important;
    border: transparent;
    color: #b19277;
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  /*.cart-btn-wrapper {
    display: none;
  }*/
  @media (min-width: 700px) {
    .btn-Navbar {
      display: none;
    }
    .navbar-centrada {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: black;   
        font-size: 1rem;
        padding: 0.5rem;
      }
      a:hover {
          color: #b19277;
          outline: none;
      }
    }
    /*.cart-btn-wrapper {
      display: grid;
    }*/
  }
`

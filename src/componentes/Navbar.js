//Importaciones básicas
import React from 'react'
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

//Importaciones propias
import logo from '../images/logo.png';
import {links} from '../utils/constantes'



export const Navbar = () => {
  return (
    <Contenedor_Navbar>
      <div className='nav-centrada'>
        <div className='nav-botones'>
          <Link to='/'>
            <img src={logo}></img>
          </Link>
          <button type='button' className='btn-navbar'>
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
      </div>
    </Contenedor_Navbar>
  )
}

const Contenedor_Navbar = styled.nav `
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;

  .nav-centrada {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .nav-botones {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 10rem;
      margin-left: -0.5rem;
    }
  }

  .btn-navbar {
    background: transparent !important;
    border: transparent !important;
    color: #b19277 !important;
    cursor: pointer;
    svg {
      font-size: 1.5rem;
    }
  }

  .nav-links {
    display: none;
  }

  @media (min-width: 992px) {
    .nav-botones {
      display: none;
    }
    .nav-centrado {
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
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
`

//Importaciones básicas
import React from 'react'
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

//Importaciones propias
import logo from '../images/logo.png';
import {links} from '../utils/constantes'
import CarritoYLogin from './CarritoYLogin.js'
import { useProductosContexto } from '../contextos/productos_contexto';
import { useUsuarioContexto } from '../contextos/usuario_contexto';
import ReactAudioPlayer from 'react-audio-player';
import musica from '../audios/musica_de_fondo2.mp3'

export const Navbar = () => {
  const {abrirNavbarLateral} = useProductosContexto()
  const {miUsuario} = useUsuarioContexto()

  return (
    <Contenedor_Navbar>
      <ReactAudioPlayer
  src={musica}
  autoPlay={true}
  volume={0.25}
/>
      <div className='navbar-centrada'>
        <div className='navbar-botones'>
          <Link to='/'>
            <img src={logo}></img>
          </Link>
          <button type='button' className='btn-Navbar' onClick={abrirNavbarLateral}>
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
          {
            miUsuario && <li><Link to="/pago">Pago</Link></li>
          }
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
    color: #b19277;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .contenedor-btn-carrito {
    display: none;
  }

  @media (min-width: 850px) {
    .btn-Navbar {
      display: none;
    }
    .contenedor-btn-carrito {
      display: grid;
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
    
  }
`

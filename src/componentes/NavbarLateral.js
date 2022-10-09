//Importaciones básicas
import React from 'react'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { links } from '../utils/constantes'
import styled from 'styled-components'

//Importaciones propias
import logo from '../images/logo.png'
import CarritoYLogin from './CarritoYLogin'
import { useProductosContexto } from '../contextos/productos_contexto'

const NavbarLateral = () => {
  const datos = useProductosContexto();
  console.log(datos)
  //Flag que representa si la navbar lateral está abierta o no
  const flag = true;
  return  <Contenedor_NavbarLateral>
            <aside className={`${flag ? 'navbarLateral mostrarNavbarLateral' : 
            'navbarLateral'}`}>
                <div className='navbarLateral-botones'>
                  <img src={logo} className='logo'/>
                  <button className='btn-cerrar' type='button'><FaTimes/></button>
                </div>
                <ul className='navLateral-links'>
                  {links.map(({id, nombre, url}) => {
                    return <li key={id}>
                            <Link to={url}>{nombre}</Link>
                           </li>
                  })}
                  <li>
                    <Link to='/carrito'>Carrito</Link>
                  </li>
                </ul>
                <CarritoYLogin />
            </aside>
          </Contenedor_NavbarLateral>
}

const Contenedor_NavbarLateral = styled.div`
  text-align: center;
  .navbarLateral-botones {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .btn-cerrar {
    font-size: 2rem;
    margin-top: 0.2rem;
  }
  .btn-cerrar:hover {
    color: red;
  }
  .logo {
    justify-self: center;
    height: 3.5rem;
  }
  .navLateral-links {
    margin-bottom: 1rem;
  }
  .navLateral-links a {
    display: block;
    text-align: left;
    padding: 1rem 1.5rem;
    color: black;
  }
  .navLateral-links a:hover {
    color: #b19277;
  }
  .navbarLateral {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    z-index: -1;
  }
  .mostrarNavbarLateral {
    transform: translate(0);
    z-index: 999;
  }
  .contenedor-carrito {
    margin: 1rem auto;
  }
  @media screen and (min-width: 850px) {
    .navbarLateral {
      display: none;
    }
  }
`

export default NavbarLateral;
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { RiCursorFill } from 'react-icons/ri'

const Producto = ({url, nombre, precio, id, destacado}) => {
  console.log(url)
  return (
    <Producto_Contenedor>
      
        <div className='contenedor'>
            <img src={url} alt={nombre}></img>
            <Link to={`/productos/${id}`} className='link'>
                <RiCursorFill></RiCursorFill>
            </Link>
        </div>
        <footer>
            <h4>{nombre}</h4>
            <p>{precio} €</p>
        </footer>
    </Producto_Contenedor> 
  )
}
//TO DO dar un besito a ivan!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! FUEGO

const Producto_Contenedor = styled.article`
.contenedor {
    position: relative;
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: 0.5rem;
    transition: all 0.3s linear;
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: all 0.3s linear;
    opacity: 0;
    svg {
      font-size: 2rem;
      color: #6c584c;
    }
  }
  .contenedor:hover img {
    opacity: 0.5;
  }
  .contenedor:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h4,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

`

export default Producto
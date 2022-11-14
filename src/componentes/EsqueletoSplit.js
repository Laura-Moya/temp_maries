//Importaciones básicas
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

//Aquí es donde escribimos el percorso

export const EsqueletoSplit = ({title, producto}) => {
  //Formateamos el título de cada sección para que quede en mayúsculas
  //Y si son dos palabras para que te las separe y sea entendible para el 
  //usuario
  //var tituloFormateado = title.charAt(0).toUpperCase() + title.slice(1);
  //tituloFormateado = tituloFormateado.replace(/([A-Z])/g, ' $1').trim()
  return (
    <Contenedor_EsqueletoSplit>
      <div className='section-centrada'>
        <h3>
          <Link to='/'>Home</Link>
          {producto && <Link to="/productos"> / Productos</Link>} / {title}
        </h3>
      </div>
    </Contenedor_EsqueletoSplit>
  )
}

const Contenedor_EsqueletoSplit = styled.section`
  //background: var(--clr-primary-10);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  //color: var(--clr-primary-1);
  a {
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`
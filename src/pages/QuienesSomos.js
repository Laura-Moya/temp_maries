//Importaciones básicas
import React from 'react'
import styled from 'styled-components';

//Importaciones propias
import {EsqueletoSplit} from '../componentes/EsqueletoSplit'
import quienesSomos from '../images/quienesSomos.jpg'

const QuienesSomos = () => {
  return (
    <main>
      <EsqueletoSplit title='quienesSomos'/>
      <Contenedor_QuienesSomos className='pagina-espacio-central section section-centrada'>
        <img src={quienesSomos}></img>
        <article>
          <div className='nombre-seccion'>
            <h2>Quienes somos</h2>
          </div>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
          Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
          unknown printer took a galley of type and scrambled it to make a type specimen 
          book. It has survived not only five centuries, but also the leap into electronic 
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with 
          the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
          with desktop publishing software like Aldus PageMaker including versions of Lorem 
          Ipsum.
          </p>
        </article>
      </Contenedor_QuienesSomos>
    </main>
  )
}

const Contenedor_QuienesSomos = styled.div`
  display: grid;

  //Separación entre las dos columnas
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    //height: 500px;
    height: 31rem;
    object-fit: cover;
  }
  p {
    line-height: 1.5;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
  }
  .nombre-seccion {
    text-align: left;
  }
  @media (min-width: 850px) {
    grid-template-columns: 1fr 1fr;
  }`

export default QuienesSomos
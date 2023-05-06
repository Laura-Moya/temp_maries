//Importaciones básicas
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

//Importaciones propias
import fotoSalonHome from '../images/habitacion.png'
import foto2 from '../images/mariesHome.png'

const Intro = () => {
  return (
    <Contenedor_Intro className='section-centrada'>
        <article className='contenido'>
            <h1>
                Designs made <br/>
                only for you 
            </h1>
            <Link to='/productos' className='btn btn-intro'>
                Compra aquí    
            </Link>
        </article>
        <article className='img-estancia'>
            <img src={fotoSalonHome} className='salon-img'></img>
            <img src={foto2} className='accent-img'></img>
        </article>
    </Contenedor_Intro>
  )
}

const Contenedor_Intro = styled.section`
min-height: 60vh;
  display: grid;
  place-items: center;
  .img-estancia {
    display: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 850px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
      font-size: 2rem;
      font-weight: 300;
    }
    p {
      font-size: 1.25rem;
    }
    .btn-intro {
      padding: 0.75rem 1.5rem;
      font-size: 1.1rem;
    }
    .img-estancia {
      display: block;
      position: relative;
    }
    .salon-img {
      width: 100%;
      height: 34rem;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-estancia::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }`

export default Intro
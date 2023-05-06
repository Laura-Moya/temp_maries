//Importaciones básicas
import React from 'react'
import styled from 'styled-components';

//Importaciones propias
import {EsqueletoSplit} from '../componentes/EsqueletoSplit'
import quienesSomos from '../images/quienesSomos.jpg'

const QuienesSomos = () => {
  return (
    <main>
      <EsqueletoSplit title='Quienes somos'/>
      <Contenedor_QuienesSomos className='pagina-espacio-central section section-centrada'>
        <img src={quienesSomos}></img>
        <article>
          <div className='nombre-seccion'>
            <h2>Quienes somos</h2>
          </div>
          <p>
          Llevamos décadas asesorando a miles de clientes sobre nuestros productos, todos ellos
          basados en la máxima calidad y en el mejor diseño. Esto se debe a que uno de 
          nuestros principales objetivos es seguir manteniendo la misma premisa que tenemos 
          desde hace más de cuatro décadas, ofrecer al cliente solo productos de calidad contrastada. 
          El tiempo y la completa satisfacción de los clientes han hecho el resto.
          <br/><br/>
          Ofrecemos a los clientes la calidad que se merecen, siempre en consonancia con la 
          confianza que han depositado en nosotros a lo largo de los años. Además, damos un trato 
          familiar, cordial y cercano, pero profesional, siempre con el objetivo de satisfacer todas 
          las necesidades que se pudieran tener, tanto estéticas como funcionales.
          <br/><br/>
          A lo largo de nuestra carreta empresarial, nuestro trabajo siempre ha sido sinónimo de calidad, 
          dispensando a todos los consumidores un trato profesional y con una rotación constante de productos, 
          para que siempre encuentren las últimas novedades y tendencias del mercado.
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
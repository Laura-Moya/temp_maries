import React from 'react'
import styled from 'styled-components'

const Contacto = () => {
  return (
    <Contenedor_Contacto>
        <div className='section-centrada'>
            <h3> ¿A qué esperas? ¡Únete a nuestra newsletter y disfruta de un 10% de descuento en tu primera compra! </h3>
            <div className='contenido'>
                <p>Inscríbete ahora y benefíciate de ofertas exclusivas, las últimas tendencias
                  en decoración del hogar, consejos para remodelar tu hogar, ... ¡Y mucho más!
                </p>
                <form action="https://formspree.io/f/moqblgko" method="POST" className='form-contacto'>
                    <input type="email" className='form-input' placeholder='Email...' name="email"></input>
                    <button type='submit' className='submit-btn'>SUSCRIBETE</button>
                </form>
            </div>
        </div>
    </Contenedor_Contacto>
  )
}

const Contenedor_Contacto = styled.section`
padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: grey;
  }
  .form-contacto {
    width: 60vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 1.5px solid #888888;
  }
  .form-input {
    border-right: none;
    color: grey;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  .form-input::placeholder {
    color: #888888;
  }
  .submit-btn {
    background-color: #b19277 !important;
    cursor: pointer;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    //transition: all 0.3s linear;
    color: black;
  }
  .submit-btn:hover {
    color: white;
  }
  @media (min-width: 850px) {
    .contenido {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 5rem 0;
    padding-top: 0rem;
    padding-bottom: 10rem;
  }
`

export default Contacto
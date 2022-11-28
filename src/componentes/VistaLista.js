import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const VistaLista = ({productos}) => {
  return (
    <Contenedor_VistaLista>
        {productos.map((item) => {
            const {id, url, nombre, precio, descripcion} = item;
            return  <article key={id}>
                        <img src={url}></img>
                        <div>
                            <h4>{nombre}</h4>
                            <h5 className='precio'>{precio} €</h5>
                            <p>{descripcion.substring(0, 150)}...</p>
                            <Link to={`/productos/${id}`} className='btn'>
                                Ver más
                            </Link>
                        </div>
                    </article>
        })}
    </Contenedor_VistaLista>
  )
}

const Contenedor_VistaLista = styled.section`
  display: grid;
  row-gap: 3rem;
  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .precio {
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 850px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`


export default VistaLista
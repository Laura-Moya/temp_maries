import React from 'react'
import styled from 'styled-components'
import Producto from './Producto'

const VistaCuadricula = ({productos}) => {
  return (
    <Contenedor_VistaCuadricula>
        <div className='contenedor_productos'>
            {productos.map((item) => {
                return <Producto key={item.id} {...item} />
            }
            )}
        </div>
    </Contenedor_VistaCuadricula>
  )
}

const Contenedor_VistaCuadricula = styled.section`
  img {
    height: 175px;
  }
  .contenedor_productos {
    display: grid;
    gap: 2rem 1.5rem;
  }
  @media (min-width: 850px) {
    .contenedor_productos {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .contenedor_productos {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`


export default VistaCuadricula
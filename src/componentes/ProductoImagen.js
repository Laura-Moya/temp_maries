import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';

//Definimos la primera url que cargamos como vacía porque como nos viene 
//como undefined casca
const ProductoImagen = ({imagenes = [{url: ''}]}) => {
  const [primera, setPrimera] = useState(imagenes[0]);
  console.log(primera)
  return (
    <Contenedor_ProductoImagen>
      <img src={primera.url} className='primera'></img>
      {/*Montamos las demás fotos en un carousel hecho a mano*/}
      <div className='fotos'>
        {imagenes.map((item, index)=>{
          //Te obliga a ponerle una key, pues le ponemos el indice de la imagen
          return <img src={item.url} key={index} onClick={() => setPrimera(imagenes[index])} className={`${item.url === primera.url ? 'foco': '' }`}></img>
        })}
      </div>
    </Contenedor_ProductoImagen>
  )
}

const Contenedor_ProductoImagen = styled.section`
  //Este estilo no me convence, tal vez en un futuro
  .primera {
    height: 35rem;
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
  }
  .fotos {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 5rem;
      cursor: pointer;
    }
  }
  .foco {
    border: 2px solid #9c795a;
  }
  @media (max-width: 576px) {
    .primera {
      height: 300px;
    }
    .fotos {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .primera {
      height: 500px;
    }
    .fotos {
      img {
        height: 75px;
      }
    }
  }
`

export default ProductoImagen
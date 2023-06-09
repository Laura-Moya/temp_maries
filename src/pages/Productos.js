import React from 'react'
import styled from 'styled-components'
//Importaciones propias
import { EsqueletoSplit } from '../componentes/EsqueletoSplit'
import  Filtros  from '../componentes/Filtros'
import VistaBotones from '../componentes/VistaBotones'
import ListaProductos from '../componentes/ListaProductos'

const Productos = () => {
  return (
    <main>
      <EsqueletoSplit title="Productos"></EsqueletoSplit>
      <Contenedor_Productos className='pagina-espacio-central'>
        <div className='section-centrada productos'>
          <Filtros/>
          <div>
            <VistaBotones />
            <ListaProductos />
          </div>
        </div>
      </Contenedor_Productos>
    </main>
  )
}

const Contenedor_Productos = styled.div `
  .productos {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }

  @media (min-width: 768px) {
    .productos {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default Productos
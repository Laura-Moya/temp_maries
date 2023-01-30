import React from 'react'
import styled from 'styled-components'


//Importaciones propias
import { useFiltroContexto } from '../contextos/filtro_contexto'
import { getValoresFiltros } from '../utils/helpers'

const Filtros = () => {

  const {
    filtros_disponibles: {
      texto, fabricante, colores, categoria, precio_min, precio_max, precio, envioGratis,
    }, 
    actualizarFiltros, 
    resetFiltros, 
    productos_totales,
  } = useFiltroContexto();

  const categorias = getValoresFiltros(productos_totales, 'categoria')
  const fabricantes = getValoresFiltros(productos_totales, 'fabricante')
  const coloresDisponibles = getValoresFiltros(productos_totales, 'colores')


  return (
  <Contenedor_Filtros>
    <div className='content'>
      <form onSubmit={(e) => e.preventDefault()}>
        {/*Campo de búsqueda */}
          <div className='form-control'>
            <input type='text' name='texto' placeholder='Busca...' className='cuadro-busqueda' value={texto} onChange={actualizarFiltros}></input>
          </div>
        {/*Fin Campo de búsqueda  */}

        {/*Categorías */}
        <div className='form-control'>
          <h5>Estancia</h5>
          <div>
            {
              categorias.map((c, item) => {
                return (<button 
                  key={item} 
                  onClick={actualizarFiltros} 
                  type='button' 
                  name='categoria' 
                  className={`${categoria === c.toLowerCase() ? 'active' : null}`}>
                    {c}
                  </button>)
              })
            }
          </div>
        </div>
        {/*Fin Categorías */}
      </form>
    </div>
  </Contenedor_Filtros>
  )
}

const Contenedor_Filtros = styled.section`
.form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .cuadro-busqueda {
    padding: 0.5rem;
    background: #e8e8e8;
    border-radius: 0.25rem;
    border-color: transparent;
    outline: none;
    letter-spacing:  0.1rem;
  }
  .cuadro-busqueda::placeholder {
    text-transform: capitalize;
  }
  .cuadro-busqueda:focus {
    background: #d9d9d9;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`

export default Filtros
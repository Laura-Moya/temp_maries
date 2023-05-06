import React from 'react'
import styled from 'styled-components'
import {FaCheck} from "react-icons/fa";

//Importaciones propias
import { useFiltroContexto } from '../contextos/filtro_contexto'
import { getValoresFiltros } from '../utils/helpers'

const Filtros = () => {

  const {
    filtros_disponibles: {
      texto, fabricante, color, categoria, precio_min, precio_max, precio, envioGratis,
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
                  className={`${categoria === c?.toLowerCase() ? 'activo' : null}`}
                  onClick={actualizarFiltros} 
                  type='button' 
                  name='categoria' 
                  >
                    {c}
                  </button>)
              })
            }
          </div>
        </div>
        {/*Fin Categorías */}
        {/*Fabricantes */}
        <div className='form-control'>
            <h5>Fabricante</h5>
            <select name='fabricante' 
            value={fabricante}
            onChange={actualizarFiltros}
            className='fabricante'>
              {fabricantes.map((item, i) => {
                  return <option key={i} value={item}>{item}</option>
              })}
            </select>
        </div>
        {/*Fin fabricantes */}
        {/*Colores */}
        <div className='form-control'>
            <h5>Colores </h5>
            <div className='colores'>
              {
                  coloresDisponibles.map((c, index) => {
                    if (c === 'todos') {
                      return (
                        <button
                          key={index}
                          name='color'
                          onClick={actualizarFiltros}
                          data-color='todos'
                          className={`${
                            color === 'todos' ? 'todos-btn activo' : 'todos-btn'
                          }`}
                        >
                          Todos
                        </button>
                      )
                    }
                    return (
                      <button
                        key={index}
                        name='color'
                        ref={(node) => {
                          if (node) {
                            node.style.setProperty("background-color", c, "important");
                          }
                        }}
                        className={`${
                          color === c ? 'color-btn activo' : 'color-btn'
                        }`}
                        data-color={c}
                        onClick={actualizarFiltros}
                      >
                        {color === c ? <FaCheck /> : null}
                      </button>
                    )
                  
                })
              }
            </div>
        </div>
        {/*Fin colores */}
        {/*Precio */}
        <div className='form-control'>
            <h5>Precio </h5>
            <p className='precio'>{precio} €</p>
            {/*Cuidado esto te convierte la cantidad a 
            string, lo queremos en integer */}
            <input 
            id='precio'
            type='range' 
            name='precio' 
            onChange={actualizarFiltros} 
            min={precio_min} 
            max={precio_max}
            value={precio}></input>
        </div>
        {/*Fin precios */}
        {/*Envío gratis */}
        <div className='form-control envio'>
            <label htmlFor='envioGratis'>Envío gratuito: </label>
            <input type='checkbox' name='envioGratis' id='envioGratis'
                  onChange={actualizarFiltros} checked={envioGratis}></input>
        </div>
        {/*Fin Envío gratis */}
        {/*Limpiar filtros */}
        <button type='button' className='borrarFiltros-btn'
                onClick={resetFiltros}> {' '} Limpiar filtros</button>
        {/*Fin Limpiar filtros */}

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
    letter-spacing: 0.1rem;
    color: grey;
    cursor: pointer;
  }
  .activo {
    border-color: gray;
  }
  .fabricante {
    background: #e8e8e8;
    border-radius: 0.25rem;
    border-color: transparent;
    padding: 0.25rem;
  }
  .colores {
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
      color: white;
    }
  }
  .todos-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .activo {
    opacity: 1;
  }
  .todos-btn .activo {
    text-decoration: underline;
  }
  .precio {
    margin-bottom: 0.25rem;
  }
  .envio {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .borrarFiltros-btn {
    background: #db0b0b !important;
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
  }
  .borrarFiltros-btn:hover {
    background: #b00b0b !important;
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`

export default Filtros
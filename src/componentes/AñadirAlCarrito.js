//Importaciones básicas
import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
//Importaciones propias
import {FaCheck} from 'react-icons/fa';
import MasMenosBotones from './MasMenosBotones';

const AñadirAlCarrito = ({producto}) => {
  //Lo del estilo inline he tenido que hacerlo así porque 
  //react doesn't support el !important en el inline style

  //Colores stuff
  const { id, stock, colores } = producto
  const [selectedColor, setSelectedColor] = useState(colores[0])

  //Más menos stuff
  //Por defecto le ponemos que tenga 1 elemento mínimo, si no peta
  const [cantidadActual, setCantidadActual] = useState(1);

  const mas = () => {
    setCantidadActual((valorAnterior) => {
      let aux = valorAnterior + 1;
      if (aux > stock) {aux = stock}
      return aux;
    })
  }

  const menos = () => {
    setCantidadActual((valorAnterior) => {
      let aux = valorAnterior - 1;
      if (aux < 1) {aux = 1}
      return aux;
    })
  }

  return (
    <Contenedor_AñadirAlCarrito>
      <div className='colores-disponibles'>
        <span>Colores disponibles:</span>
        <div>
          {colores.map((item, index) => {
            return (
              <button
                key={index}
                ref={(node) => {
                  if (node) {
                    node.style.setProperty("background-color", item, "important");
                  }
                }}
                className={`${
                  selectedColor === item ? 'color seleccionado' : 'color'
                }`}
                onClick={() => setSelectedColor(item)}
              >
                {selectedColor === item ? <FaCheck /> : null}
              </button>
            )
          })}
        </div>
      </div>
      <div>
        <MasMenosBotones cantidad={cantidadActual} sumar={mas} quitar={menos}/>
        <Link to="/carrito" className='btn'>Añadir al carrito</Link>
      </div>
    </Contenedor_AñadirAlCarrito>
  )
}

const Contenedor_AñadirAlCarrito = styled.section`
  margin-top: 2rem;
  .colores-disponibles {
    display: grid;
    grid-template-columns: 7.8rem 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: white;
    }
  }
  .seleccionado {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }
  .btn {
    margin-top: 1rem;
    width: 8.75rem;
  }
`

export default AñadirAlCarrito
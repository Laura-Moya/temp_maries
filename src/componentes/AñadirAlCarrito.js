import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';

import {FaCheck} from 'react-icons/fa';

const AñadirAlCarrito = ({producto}) => {
  // add to cart
  //Lo del estilo inline he tenido que hacerlo así porque 
  //react doesn't support el !important en el inline style
  const { id, stock, colores } = producto
  const [selectedColor, setSelectedColor] = useState(colores[0])
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
    //margin-top: 1rem;
    width: 8.75rem;
  }
`

export default AñadirAlCarrito
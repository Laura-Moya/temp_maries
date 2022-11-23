//Importaciones básicas
import React from 'react'
import styled from 'styled-components'

//Importaciones propias
import {FaMinus, FaPlus} from 'react-icons/fa'

const MasMenosBotones = ({cantidad, sumar, quitar}) => {
  return (
    <Contenedor_MasMenosBotones className="amount-btn">
        <button type="button" className='amount-btn' onClick={quitar}>
            <FaMinus />
        </button>
        <h2 className='amount'>{cantidad}</h2>
        <button type="button" className='amount-btn' onClick={sumar}>
            <FaPlus/>
        </button>
    </Contenedor_MasMenosBotones>
  )
}

const Contenedor_MasMenosBotones = styled.div`
  display: grid;
  width: 8.75rem;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export default MasMenosBotones
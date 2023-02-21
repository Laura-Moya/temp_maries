import React from 'react'
import styled from 'styled-components'

//Importaciones propias
import { useCarritoContexto } from '../contextos/carrito_contexto'
import { Link } from 'react-router-dom'

const PrecioTotalCarrito = () => {
    const {precio_total, coste_envio } = useCarritoContexto();
  return (
    <Contenedor_PrecioTotalCarrito>
        <div>
            <article>
                <p>Subtotal: <span>{precio_total}</span></p>
                <p>Coste envío: <span>{coste_envio}</span></p>
                <hr/>
                <h4>Total a pagar: {' '}
                <span>{precio_total+coste_envio}</span></h4>
            </article>
            <Link to='pago' className='btn'>
                Realizar el pago
            </Link>
        </div>
    </Contenedor_PrecioTotalCarrito>
  )
}

const Contenedor_PrecioTotalCarrito = styled.section`
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    article {
    border: 1px solid #d9d9d9;
    border-radius: 0.25rem;
    padding: 1.5rem 3rem;
    }
    h4,
    h5,
    p {
    display: grid;
    grid-template-columns: 12.5rem 1fr;
    }
    h4 {
    margin-top: 2rem;
    }
    @media (min-width: 776px) {
    justify-content: flex-end;
    }
    .btn {
    width: 92%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 400;
    color: white;
    letter-spacing: 0.2rem
    }
`

export default PrecioTotalCarrito
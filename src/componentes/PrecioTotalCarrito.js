import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

//Importaciones propias
import { useCarritoContexto } from '../contextos/carrito_contexto'
import { useUsuarioContexto } from '../contextos/usuario_contexto'

import { formatearPrecio } from '../utils/helpers'

const PrecioTotalCarrito = () => {
    const {precio_total, coste_envio } = useCarritoContexto();
    const {miUsuario, loginWithRedirect} = useUsuarioContexto();

    return (
        <Contenedor_PrecioTotalCarrito>
            <div>
                <article>
                    <p>Subtotal: <span>{formatearPrecio(precio_total)}</span></p>
                    <p>Coste envío: <span>{formatearPrecio(coste_envio)}</span></p>
                    <hr/>
                    <h4>Total a pagar: {' '}
                    <span>{formatearPrecio(precio_total+coste_envio)}</span></h4>
                </article>
                {miUsuario ? 
                    <Link to='/pago' className='btn'>
                    Realizar el pago
                    </Link>    : 
                    <button type='button' className='btn' style={{ width: '100%'}} onClick={loginWithRedirect}>Login</button>
                }
                
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
    width: 93.5%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 400;
    color: white;
    letter-spacing: 0.2rem
    }
`

export default PrecioTotalCarrito
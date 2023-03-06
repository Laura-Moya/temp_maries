//Importaciones básicas
import React from 'react'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { links } from '../utils/constantes'
import styled from 'styled-components'

//Importaciones propias
import { useProductosContexto } from '../contextos/productos_contexto'
import Error404 from './Error404'
import Cargando from './Cargando'
import Producto from './Producto'

const ProductosDestacados = () => {
    const {productos_cargando: cargando, 
           productos_error: error,
           productos_destacados: destacados 
          } = useProductosContexto();
          
    if (cargando) {
        return <Cargando />
    }
    if (error) {
        return <Error404 />
    }
    return (
        <ProductosDestacados_Contenedor className='section'>
            <div className='titulo'>
                <h2>Productos destacados</h2>
            </div>
            <div className='section section-centrada destacados'>
                    {destacados.map((producto) => {
                        return <Producto key={producto.id} {...producto} ></Producto>
                    })}
            </div>
        </ProductosDestacados_Contenedor>
    )
}

const ProductosDestacados_Contenedor = styled.section `
    .destacados {
        margin: 2rem auto;
        display: grid;
        gap: 2.5rem;
        img {
        height: 14rem;
        }
    }
    .btn {
        display: block;
        width: 148px;
        margin: 0 auto;
        text-align: center;
    }
    @media (min-width: 36px) {
        .destacados {
        grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
        }
    }
`

export default ProductosDestacados

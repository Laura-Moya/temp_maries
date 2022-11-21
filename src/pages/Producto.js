import React from 'react'
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {useProductosContexto} from '../contextos/productos_contexto'
import { url_producto_individual } from '../utils/constantes'
import Cargando from '../componentes/Cargando'
import Error404 from '../componentes/Error404'
import AñadirAlCarrito from '../componentes/AñadirAlCarrito'
import ProductoImagen from '../componentes/ProductoImagen'
import Review from '../componentes/Review'
import {EsqueletoSplit} from '../componentes/EsqueletoSplit'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Producto = () => {
  const {id} = useParams()
  const historial = useNavigate()
  const {producto_individual_cargando: cargando, 
         producto_individual_error: error, 
         producto_individual: producto, 
         fetchProductoIndividual} = useProductosContexto()
  
  useEffect(() => {
    fetchProductoIndividual(`${url_producto_individual}${id}`)
  }, [id])

  useEffect(() => {
    if(error) {
      setTimeout(() => {
        historial('/')
      }, 3000);
    }
  }, [error])

  if (cargando){
    return <Cargando />
  }
  if (error) {
    return <Error404 />
  }
  const {nombre, precio, descripcion, stock, estrellas, id:sku, fabricante, imagen} = producto
  
  return (
   <Contenedor_Producto>
    <EsqueletoSplit title={nombre} producto />
    <div className='section section-centrada'>
      <Link to="/products" className='btn'>Atrás</Link>
      <div className='product-center'>
        <ProductoImagen imagenes={imagen}/>
        <section className='content'>
          <h2>{nombre}</h2>
          <Review estrellas={estrellas} />
          <h5>{precio} €</h5>
          <p className='desc'>{descripcion}</p>
          <p className='info'>
            <span>Disponible: </span>
            {stock > 0 ? 'Sí' : 'No'}
          </p>
          <p className='info'>
            <span>SKU: </span>
            {sku}
          </p>
          <p className='info'>
            <span>Marca: </span>
            {fabricante}
          </p>
          <hr />
        </section>
        {stock > 0 && <AñadirAlCarrito />}

      </div>
    </div>
  </Contenedor_Producto>
  )
}

const Contenedor_Producto = styled.main `
.product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default Producto
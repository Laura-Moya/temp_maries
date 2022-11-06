import React from 'react'
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {useProductosContexto} from '../contextos/productos_contexto'
import { url_producto_individual } from '../utils/constantes'
import Cargando from '../componentes/Cargando'
import Error404 from '../componentes/Error404'
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

  return (
    <div>Producto</div>
  )
}

const Contendor_Producto = styled.main `

`

export default Producto
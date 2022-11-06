import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import {useProductosContexto} from '../contextos/productos_contexto'
import { url_producto_individual } from '../utils/constantes'
/*import {
  Cargando, 
  Error, 
  ImagenesProducto, 
  AañdirAlCarrito, 
  Reviews,
} from '../componentes'*/
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Producto = () => {
  console.log(useParams())
  return (
    <div>Producto</div>
  )
}

const Contendor_Producto = styled.main `

`

export default Producto
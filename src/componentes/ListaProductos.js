import React from 'react'
import { useFiltroContexto } from '../contextos/filtro_contexto'
import VistaCuadricula from './VistaCuadricula'
import VistaLista from './VistaLista'

const ListaProductos = () => {
  const {productos_filtrados: productos} = useFiltroContexto();



  return (
    <VistaCuadricula productos={productos}>ListaProductos</VistaCuadricula>
  )
}

export default ListaProductos
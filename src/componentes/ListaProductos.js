import React from 'react'
import { useFiltroContexto } from '../contextos/filtro_contexto'
import VistaCuadricula from './VistaCuadricula'
import VistaLista from './VistaLista'

const ListaProductos = () => {
  const {productos_filtrados: productos, v_cuadricula} = useFiltroContexto();
  
  if (productos.length < 1){
    return <h5 style={{textTransform: 'none'}}>Ningún producto coincide con tus criterios de búsqueda</h5>
  }
  if (v_cuadricula === false){
    return <VistaLista productos={productos}></VistaLista>
  }
  return (
    <VistaCuadricula productos={productos}></VistaCuadricula>
  )
}

export default ListaProductos
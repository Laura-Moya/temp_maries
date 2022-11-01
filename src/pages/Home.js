import React from 'react'

//Importaciones propias
import Intro from '../componentes/Intro'
import NuestrosServicios from '../componentes/NuestrosServicios'
import Contacto from '../componentes/Contacto'
import ProductosDestacados from '../componentes/ProductosDestacados'

const Home = () => {
  return (
    <main>
      <Intro />
      <NuestrosServicios />
      <ProductosDestacados />
      <Contacto />
    </main>
  )
}

export default Home
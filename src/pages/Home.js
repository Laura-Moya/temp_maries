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
      <a href="https:/wa.me/34659841440"  target="_blank" className="whatsapp_float"><i className="fa-brands fa-whatsapp whatsapp-icon"></i></a>
    </main>
  )
}

export default Home
import React from 'react'

//Importaciones propias
import Intro from '../componentes/Intro'
import NuestrosServicios from '../componentes/NuestrosServicios'
import Contacto from '../componentes/Contacto'

const Home = () => {
  return (
    <main>
      <Intro />
      <NuestrosServicios />
      <Contacto />
    </main>
  )
}

export default Home
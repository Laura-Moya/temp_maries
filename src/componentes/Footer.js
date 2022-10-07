//Importaciones básicas
import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <Contenedor_Footer>
      <p>Copyright &copy; {new Date().getFullYear()} MARIE'S APARTMENTS</p>
    </Contenedor_Footer>
  )
}

const Contenedor_Footer = styled.footer`
  height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #b19277;
  text-align: center;
  margin-top: 1rem;
  p {
    color: white;
  }

  @media (min-width: 776px) {
    flex-direction: row;
  }
` 

//export default Footer;

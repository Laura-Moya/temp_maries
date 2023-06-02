//Importaciones básicas
import React from 'react'
import styled from 'styled-components'
import logo from '../images/logoFooter.png';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <Contenedor_Footer>
      
    <footer>
    <div className="content">
      <div className="branding">
        <img className="logo" src={logo} alt="Marie apartments logo" />
        {/*<p className='center'>Designs made only<br/> for you</p>*/}
      </div>

      <div>
        <p className="section-title">Enlaces</p>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/quienesSomos'>Quienes somos</Link></li>
          <li><Link to='/productos'>Productos</Link></li>
        </ul>
      </div>

      <div>
        <p className="section-title">Social</p>
        <ul>
          <li><a href="https://www.facebook.com/profile.php?id=100093310509150">Facebook</a></li>
          <li><a href="https://www.instagram.com/mariesapartmentss/">Instagram</a></li>
        </ul>
      </div>

      <div>
        <p className="section-title">Dirección</p>
        <ul>
          <li>C/ Desengaño, 21</li>
          <li>+34 961 234 591</li>
          <li>marieApartments2023@gmail.es</li>
        </ul>
      </div>

    </div>
    <div className="copyright"><p><br />Copyright &copy; {new Date().getFullYear()} MARIE'S APARTMENTS</p></div>

    </footer>
    </Contenedor_Footer>
  )
}

const Contenedor_Footer = styled.footer`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

footer {
  //position: fixed;
 // width: 100%;
  //bottom: 0;
  background-color: #f6f8fa;
  padding: 24px;
  color: #57606a;
}

footer .content {
  max-width: 1080px;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  margin: 0 auto;
  row-gap: 20px;
}

footer .logo {
  max-width: 14rem;
  //max-width: 124px;
}

ul {
  list-style: none;
}

.section-title {
  font-weight: 700;
  margin-bottom: 8px;
}

footer ul li {
  margin: 4px 0;
  font-weight: 500;
}

footer .branding {
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 12px;
  justify-content: space-between;
}

.copyright {
  text-align: center;
}

.center {
  text-align: center;
}

@media (max-width: 600px) {
  footer .content {
    grid-template-columns: repeat(2,1fr);
  }
  footer .branding {
    grid-template-rows: auto;
    grid-area: auto/span 2;
    row-gap: 8px;
  }
}
` 

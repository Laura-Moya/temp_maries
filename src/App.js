import { React } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './componentes/Navbar';
import { Footer } from './componentes/Footer'
import NavbarLateral  from './componentes/NavbarLateral'
import PrivateRoute from './pages/PrivateRoute';
import AuthWrapper from './pages/AuthWrapper';

import {Home, QuienesSomos, Carrito, Productos, Pago, Error404, Producto} from './pages'


function App() {
  return (
    <AuthWrapper>
      <Router>
      <Navbar />
      <NavbarLateral />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/quienesSomos' element={<QuienesSomos />} />
        <Route exact path='/carrito' element={<Carrito />} />
        <Route exact path='/productos' element={<Productos />} />
        <Route exact path='/productos/:id' element={<Producto />} />
        <Route element={<PrivateRoute/>} >
          <Route exact path='/pago' element={<Pago/>} />
        </Route>
        
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
    </AuthWrapper>
    
  )
}

export default App;

{/*<PrivateRoute element={<Pago />} />*/}

{/*<Route
          path='/pago'
          element={
            <PrivateRoute><Pago /></PrivateRoute>
          } /> */}
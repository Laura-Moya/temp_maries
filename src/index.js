import {React} from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';

//Importaciones propias
import { ProductosProvider } from './contextos/productos_contexto'
import { FiltroProvider } from './contextos/filtro_contexto'
//import { CarritoProvider } from './contextos/carrito_contexto'
//import { UsuarioProvider } from './contextos/usuario_contexto'
//import { Auth0Provider } from '@auth0/auth0-react'

//ReactDOM.render(<App></App>, document.getElementById('root'))

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
    <ProductosProvider>
        <FiltroProvider>
            <App></App>
        </FiltroProvider>
    </ProductosProvider>
    
);
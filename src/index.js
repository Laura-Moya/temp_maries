import {React} from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';

//Importaciones propias
import { ProductosProvider } from './contextos/productos_contexto'
import { FiltroProvider } from './contextos/filtro_contexto'
import { CarritoProvider } from './contextos/carrito_contexto'
import { UsuarioProvider } from './contextos/usuario_contexto'
import { Auth0Provider } from '@auth0/auth0-react'

//ReactDOM.render(<App></App>, document.getElementById('root'))

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider 
        domain="dev-erjzftojm2of33zj.us.auth0.com"
        clientId="9oOChrC1XF7Ei1oq2XAWOHcKSbxGfOO6"
        authorizationParams={{
        redirect_uri: window.location.origin
        }}
        cacheLocation='localstorage'
    >
        <UsuarioProvider>
            <ProductosProvider>
                <FiltroProvider>
                    <CarritoProvider>
                        
                        <App></App>
                    </CarritoProvider>
                </FiltroProvider>
            </ProductosProvider>
        </UsuarioProvider>
    </Auth0Provider>
);
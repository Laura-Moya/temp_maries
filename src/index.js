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
import AuthWrapper from './pages/AuthWrapper';

//ReactDOM.render(<App></App>, document.getElementById('root'))

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider 
        domain={process.env.REACT_APP_AUTH_DOMAIN}
        clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
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
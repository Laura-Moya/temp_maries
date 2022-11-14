import React from "react";


/*Nos creamos aquí los links
para no tener que repetir código
*/

export const links = [
    {
        id: 1, 
        nombre: 'Home',
        url: '/'
    }, 
    {
        id: 2, 
        nombre: 'Quienes Somos',
        url: '/quienesSomos'
    }, 
    {
        id: 3, 
        nombre: 'Productos',
        url: '/productos'
    }
]

/*Nos creamos dos constantes (que vamos a exportar)
  que serán los links a la api que hemos creado de productos */

export const url_productos = 'https://serverless-api-maries-apartments.netlify.app/api/productos'
//export const url_productos = 'https://serverless-api-maries-apartments.netlify.app'

export const url_producto_individual = 'https://serverless-api-maries-apartments.netlify.app/api/productos?id='
//export const url_producto_individual = 'https://course-api.com/react-store-single-product?id='

 
//Importaciones básicas
import React, { useEffect, useContext, useReducer } from 'react'
import { url_productos } from '../utils/constantes'
import axios from 'axios'

//Importaciones propias
import {
    GET_PRODUCTOS_ERROR,
    GET_PRODUCTO_INDIVIDUAL_INICIAL,
    GET_PRODUCTO_INDIVIDUAL_CORRECTO,
    GET_PRODUCTO_INDIVIDUAL_ERROR,
    CONTAR_PRECIO_TOTAL_CARRITO,
    VACIAR_CARRITO,
} from '../actions'

const initialState = {
    variable_uno: {}, 
    variable_dos: "", 
    variable_tres: true
}

const EjemploContexto = React.createContext()

export const EjemploProvider = ({children}) => {
    //Acciones que se enviarán al Reducer con las variables 
    //que se han definido previamente en el initialState
    return <EjemploContexto.Provider value='ejemplo'>{children}</EjemploContexto.Provider>
}

export const useEjemploContexto = () => {
    return useContext(EjemploContexto)
}







useEffect
useContext
useReducer
axios
url_productos
GET_PRODUCTOS_ERROR,
    GET_PRODUCTO_INDIVIDUAL_INICIAL,
    GET_PRODUCTO_INDIVIDUAL_CORRECTO,
    GET_PRODUCTO_INDIVIDUAL_ERROR,
    CONTAR_PRECIO_TOTAL_CARRITO,
VACIAR_CARRITO
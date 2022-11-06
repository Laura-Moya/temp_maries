//Importaciones básicas
import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import { url_productos } from '../utils/constantes'

//El hook
import reducer from '../reducers/productos_reducer'

import {
    NAVBARLATERAL_ABIERTA,
    NAVBARLATERAL_CERRADA,
    GET_PRODUCTOS_INICIAL, 
    GET_PRODUCTOS_CORRECTO,
    GET_PRODUCTOS_ERROR,
    GET_PRODUCTO_INDIVIDUAL_INICIAL,
    GET_PRODUCTO_INDIVIDUAL_CORRECTO,
    GET_PRODUCTO_INDIVIDUAL_ERROR,
} from '../actions'

const initialState = {
    navbarLateralAbierta: false,
    productos_cargando: false,
    productos_error: false,
    productos: [],
    productos_destacados: [],
    producto_individual_cargando: false,
    producto_individual_error: false,
    producto_individual: {},
}
const ProductosContexto = React.createContext()

export const ProductosProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const abrirNavbarLateral = () => {
        dispatch({type: NAVBARLATERAL_ABIERTA})
    }

    const cerrarNavbarLateral = () => {
        dispatch({type: NAVBARLATERAL_CERRADA})
    }

    const fetchProductos = async(url_productos) => {
        dispatch({type: GET_PRODUCTOS_INICIAL})
        try {
            const response = await axios.get(url_productos)
            const productos = response.data
            dispatch({type: GET_PRODUCTOS_CORRECTO, payload: productos})
        }
        catch(error) {
            dispatch({type: GET_PRODUCTOS_ERROR})
        }
    }

    const fetchProductoIndividual = async(url_productos) => {
        dispatch({type:GET_PRODUCTO_INDIVIDUAL_INICIAL});
        try {
            const response = await axios.get(url_productos);
            const producto_individual = response.data;
            dispatch({type: GET_PRODUCTO_INDIVIDUAL_CORRECTO, payload: producto_individual})
        }
        catch(error) {
            dispatch({type: GET_PRODUCTO_INDIVIDUAL_ERROR})
        }
    }

    useEffect(() => {
        fetchProductos(url_productos)
    }, [])

    return (
        <ProductosContexto.Provider value={{...state, abrirNavbarLateral, cerrarNavbarLateral, fetchProductoIndividual}}>
            {children}
        </ProductosContexto.Provider>
    )
}

export const useProductosContexto = () => {
    return useContext(ProductosContexto)
}

import React, { useContext, useEffect, useReducer } from 'react'

//El hook
import reducer from '../reducers/productos_reducer'

import {
    NAVBARLATERAL_ABIERTA,
    NAVBARLATERAL_CERRADA
} from '../actions'

const initialState = {
    navbarLateralAbierta: false,
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


    return (
        <ProductosContexto.Provider value={{...state, abrirNavbarLateral, cerrarNavbarLateral}}>
            {children}
        </ProductosContexto.Provider>
    )
}

export const useProductosContexto = () => {
    return useContext(ProductosContexto)
}
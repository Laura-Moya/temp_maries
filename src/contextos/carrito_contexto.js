import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/carrito_reducer'

import {
    AÑADIR_AL_CARRITO,
} from '../actions'

const initialState = {
    carrito: [], 
    //No lo llamo productos, porque de un 
    //producto puedes comprar varios ejemplares
    items_carrito: 0, 
    precio_total: 0, 
    coste_envio: 2,

}

const CarritoContexto = React.createContext()

export const CarritoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    //FUNCIONALIDAD DE AÑADIR AL CARRITO
    const añadirAlCarrito = (id, color, cantidad, producto) => {
        dispatch({type: AÑADIR_AL_CARRITO, payload: { id, color, cantidad, producto }})
    }

    return (
        <CarritoContexto.Provider value={{...state, añadirAlCarrito}}>{children}</CarritoContexto.Provider>
    )
}

export const useCarritoContexto = () => {
    return useContext(CarritoContexto)
}
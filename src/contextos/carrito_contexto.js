import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/carrito_reducer'

import {
    AÑADIR_AL_CARRITO,
    ELIMINAR_DEL_CARRITO,
    MODIFICAR_CANTIDAD,
    VACIAR_CARRITO,
} from '../actions'

//Gestión del almacenamiento local
const getLocalStorage = () => {
    //Le pedimos el contenido del elemento cuya key es igual a 'carrito'
    let carrito = localStorage.getItem("carrito");
    if (carrito !== 'undefined' && carrito) {
        return JSON.parse(localStorage.getItem('carrito'))
    }
    else {
        return []
    }
}


const initialState = {
    carrito: getLocalStorage(), 
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

    //FUNCIONALIDAD DE ELIMINAR DEL CARRITO
    const eliminarDelCarrito = (id, color) => {
        dispatch({type: ELIMINAR_DEL_CARRITO, payload: { id, color }})
    }

    //FUNCIONALIDAD DE SUBIR O BAJAR LA CANTIDAD DE ELEMENTOS DEL CARRITO
    const modificarCantidad = (id, valor) => {
        //Valor es si subes o bajas
        dispatch({type: MODIFICAR_CANTIDAD, payload: {id, valor}})
    }

    //FUNCIONALIDAD PARA VACIAR EL CARRITO
    const vaciarCarrito = () => {
        dispatch({type: VACIAR_CARRITO})
    }

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(state.carrito))
    }, [state.carrito])
    
    return (
        <CarritoContexto.Provider value={{...state, añadirAlCarrito, eliminarDelCarrito, modificarCantidad, vaciarCarrito}}>{children}</CarritoContexto.Provider>
    )
}

export const useCarritoContexto = () => {
    return useContext(CarritoContexto)
}
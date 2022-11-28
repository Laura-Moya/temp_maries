import React, { useEffect, useContext, useReducer } from 'react'
import { useProductosContexto } from './productos_contexto'
import reducer from '../reducers/filtro_reducer'

import {
    CARGAR_PRODUCTOS,
} from '../actions'



const initialState = {
    productos_filtrados: [], 
    productos_totales: [],
    v_cuadricula: true,
}

const FiltroContexto = React.createContext()

export const FiltroProvider = ({children}) => {
    const {productos} = useProductosContexto();
    //Para meter esos productos en mi initial state, no los puedo
    //asignar sin más, hay que usar el useEffect
    const [state, dispatch] = useReducer(reducer, initialState)
    
    useEffect(() => {
        dispatch({type: CARGAR_PRODUCTOS, payload: productos})
    }, [productos])

    return (
        <FiltroContexto.Provider value={{...state}}>
            {children}
        </FiltroContexto.Provider>
    )
}

export const useFiltroContexto = () => {
    return useContext(FiltroContexto)
}
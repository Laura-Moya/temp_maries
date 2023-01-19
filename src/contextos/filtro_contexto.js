import React, { useEffect, useContext, useReducer } from 'react'
import { useProductosContexto } from './productos_contexto'
import reducer from '../reducers/filtro_reducer'

import {
    CARGAR_PRODUCTOS,
    SET_VISTA_CUADRICULA,
    SET_VISTA_LISTA,
} from '../actions'



const initialState = {
    productos_filtrados: [], 
    productos_totales: [],
    v_cuadricula: true
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

    const setVistaCuadricula = () => {
        dispatch({type: SET_VISTA_CUADRICULA})
    }

    const setVistaLista = () => {
        dispatch({type: SET_VISTA_LISTA})
    }

    return (
        <FiltroContexto.Provider value={{...state, setVistaCuadricula, setVistaLista}}>
            {children}
        </FiltroContexto.Provider>
    )
}

export const useFiltroContexto = () => {
    return useContext(FiltroContexto)
}
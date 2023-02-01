import React, { useEffect, useContext, useReducer } from 'react'
import { useProductosContexto } from './productos_contexto'
import reducer from '../reducers/filtro_reducer'
import {
    CARGAR_PRODUCTOS,
    SET_VISTA_CUADRICULA,
    SET_VISTA_LISTA,
    ACTUALIZAR_ORDER_BY,
    ORDENAR,
    ACTUALIZAR_FILTROS,
    FILTRAR_PRODUCTOS,
} from '../actions'


const initialState = {
    productos_filtrados: [], 
    productos_totales: [],
    v_cuadricula: true, 
    order_by: 'precio-mas-bajo', 
    filtros_disponibles: {
        texto: '', 
        fabricante: 'Todos',
        color: 'Todos', 
        categoria: 'Todos',
        precio_min: 0, 
        precio_max: 0, 
        precio: 0,
        envioGratis: false,
    },
}

const FiltroContexto = React.createContext()

export const FiltroProvider = ({children}) => {
    const {productos} = useProductosContexto();
    //Para meter esos productos en mi initial state, no los puedo
    //asignar sin más, hay que usar el useEffect
    const [state, dispatch] = useReducer(reducer, initialState)
    
    //Con este useEffect cargaremos nuestros productos
    useEffect(() => {
        dispatch({type: CARGAR_PRODUCTOS, payload: productos})
    }, [productos])

    useEffect(() => {
        dispatch({type: FILTRAR_PRODUCTOS})
        dispatch({type: ORDENAR})
    }, [productos, state.order_by, state.filtros_disponibles])

    const setVistaCuadricula = () => {
        dispatch({type: SET_VISTA_CUADRICULA})
    }

    const setVistaLista = () => {
        dispatch({type: SET_VISTA_LISTA})
    }

    //Se llama cada vez que cambia el orden
    const actualizarOrderBy = (e) => {
        const valor = e.target.value
        dispatch({type: ACTUALIZAR_ORDER_BY, payload: valor})
    }

    //Se llama cada vez que cambian los filtros, gracias al onClick
    
    const actualizarFiltros = (e) => {
        let nombre = e.target.name;
        let valor = e.target.value;
        
        if (nombre === 'categoria') { 
            valor = e.target.textContent;
        } 
        if(nombre === 'color') {
            valor = e.target.dataset.color
        }
        dispatch({type: ACTUALIZAR_FILTROS, payload: {nombre, valor}})
    } 

    const resetFiltros = () => {

    } 

    return (
        <FiltroContexto.Provider value={{...state, setVistaCuadricula, setVistaLista, actualizarOrderBy, actualizarFiltros, resetFiltros}}>
            {children}
        </FiltroContexto.Provider>
    )
}

export const useFiltroContexto = () => {
    return useContext(FiltroContexto)
}

//Hay que hacer esto porque si no, desde el button de html no podemos acceder al valor del botón que hemos pulsado
        //Sale undefined todo el rato
import {
    CARGAR_PRODUCTOS,
    SET_VISTA_CUADRICULA,
    SET_VISTA_LISTA,
} from '../actions'

const filtro_reducer = (state, action) => {
    if (action.type === CARGAR_PRODUCTOS) {
        return{...state, 
            productos_totales: [...action.payload], 
            productos_filtrados: [...action.payload], }
    }

    if (action.type === SET_VISTA_CUADRICULA) {
        return {...state, v_cuadricula:true}
    }

    if (action.type === SET_VISTA_LISTA) {
        return {...state, v_cuadricula:false}
    }

    throw new Error(`No matching "${action.type}" - action type`)
}

export default filtro_reducer
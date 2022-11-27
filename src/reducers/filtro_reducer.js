import {
    CARGAR_PRODUCTOS,
} from '../actions'

const filtro_reducer = (state, action) => {
    if (action.type === CARGAR_PRODUCTOS) {
        return{...state, productos_totales: [...action.payload], productos_filtrados: [...action.payload]}
    }
    return state
    throw new Error(`No matching "${action.type}" - action type`)
}

export default filtro_reducer
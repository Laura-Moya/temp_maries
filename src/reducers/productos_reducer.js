import {
    NAVBARLATERAL_ABIERTA,
    NAVBARLATERAL_CERRADA,
    GET_PRODUCTOS_INICIAL,
    GET_PRODUCTOS_CORRECTO,
    GET_PRODUCTOS_ERROR,
} from '../actions'

const productos_reducer = (state, action) => {
    if(action.type === NAVBARLATERAL_ABIERTA){
        return {...state, navbarLateralAbierta: true}
    }
    if (action.type === NAVBARLATERAL_CERRADA){
        return {...state, navbarLateralAbierta: false}
    }
    if (action.type === GET_PRODUCTOS_INICIAL) {
        return {...state, productos_cargando: true}
    }
    if (action.type === GET_PRODUCTOS_CORRECTO) {
        const productos_destacados = action.payload.filter(
            (producto) => producto.destacado === true
        )
        return {...state, productos_cargando: false, productos: action.payload, productos_destacados}
    }
    if(action.type === GET_PRODUCTOS_ERROR) {
        return {...state, productos_cargando: false, productos_error: true}
    }
    throw new Error(`No matching "${action.type}" - action type`)
}

export default productos_reducer

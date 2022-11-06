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

const productos_reducer = (state, action) => {
    if (action.type === NAVBARLATERAL_ABIERTA){
        return {...state, navbarLateralAbierta: true}
    }
    if (action.type === NAVBARLATERAL_CERRADA){
        return {...state, navbarLateralAbierta: false}
    }

    //Productos
    if (action.type === GET_PRODUCTOS_INICIAL) {
        return {...state, productos_cargando: true}
    }
    if (action.type === GET_PRODUCTOS_CORRECTO) {
        const productos_destacados = action.payload.filter(
            (producto) => producto.destacado === 'SI'
        )
        return {...state, productos_cargando: false, productos: action.payload, productos_destacados}
    }
    if (action.type === GET_PRODUCTOS_ERROR) {
        return {...state, productos_cargando: false, productos_error: true}
    }

    //Producto individual
    if (action.type === GET_PRODUCTO_INDIVIDUAL_INICIAL) {
        return {...state, producto_individual_cargando: true, producto_individual_error: false}
    }
    if (action.type === GET_PRODUCTO_INDIVIDUAL_CORRECTO) {
        return {...state, producto_individual_cargando: false, producto_individual: action.payload}
    }
    if (action.type === GET_PRODUCTOS_ERROR) {
        return {...state, productos_cargando: false, productos_error: true}
    }

    throw new Error(`No matching "${action.type}" - action type`)
}

export default productos_reducer

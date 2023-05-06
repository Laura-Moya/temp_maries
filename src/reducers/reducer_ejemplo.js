import {
    ACCION_EJEMPLO,
    NAVBARLATERAL_CERRADA,
    GET_PRODUCTOS_INICIAL,
    GET_PRODUCTOS_CORRECTO,
    GET_PRODUCTOS_ERROR,
    GET_PRODUCTO_INDIVIDUAL_INICIAL,
    GET_PRODUCTO_INDIVIDUAL_CORRECTO,
} from '../actions'

const productos_reducer = (state, action) => {

    //Funciones
    if (action.type === ACCION_EJEMPLO){
        return {...state, navbarLateralAbierta: false}
    }

    throw new Error(`No matching "${action.type}" - action type`)
}

export default productos_reducer







NAVBARLATERAL_ABIERTA,
    NAVBARLATERAL_CERRADA,
    GET_PRODUCTOS_INICIAL,
    GET_PRODUCTOS_CORRECTO,
    GET_PRODUCTOS_ERROR,
    GET_PRODUCTO_INDIVIDUAL_INICIAL,
    GET_PRODUCTO_INDIVIDUAL_CORRECTO,
import {
    NAVBARLATERAL_ABIERTA,
    NAVBARLATERAL_CERRADA
} from '../actions'

const productos_reducer = (state, action) => {
    if(action.type === NAVBARLATERAL_ABIERTA){
        return {...state, navbarLateralAbierta: true}
    }
    if (action.type === NAVBARLATERAL_CERRADA){
        return {...state, navbarLateralAbierta: false}
    }
    throw new Error('No matching "${action.type}" - action type')
}

export default productos_reducer
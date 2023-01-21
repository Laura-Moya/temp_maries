import {
    CARGAR_PRODUCTOS,
    SET_VISTA_CUADRICULA,
    SET_VISTA_LISTA,
    ACTUALIZAR_ORDER_BY,
    ORDENAR
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

    if (action.type === ACTUALIZAR_ORDER_BY) {
        return {...state, order_by: action.payload}
    }

    if (action.type === ORDENAR) {
        const {order_by, productos_filtrados} = state;
        //Lo inicializo como los productos filtrados por si pasa algo, 
        //que al menos se devuelva algún producto, si no, devolvería
        //un array vacío
        let aux = [...productos_filtrados];
        switch (order_by)
        {
            case 'precio-mas-bajo': 
                aux = aux.sort((a, b) => (a.precio > b.precio ? 1 : -1));
                break;
            case 'precio-mas-alto': 
                aux = aux.sort((a, b) => (a.precio < b.precio ? 1 : -1));
                break;
            case 'nombre-a': 
                aux = aux.sort((a, b) => (a.nombre > b.nombre ? 1 : -1));
                break;
            case 'nombre-z': 
                aux = aux.sort((a, b) => (a.nombre < b.nombre ? 1 : -1));
                break;
        }
        return {...state, productos_filtrados: aux}
    }

    throw new Error(`No matching "${action.type}" - action type`)
}

export default filtro_reducer
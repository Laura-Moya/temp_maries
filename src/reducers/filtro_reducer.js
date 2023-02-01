import {
    CARGAR_PRODUCTOS,
    SET_VISTA_CUADRICULA,
    SET_VISTA_LISTA,
    ACTUALIZAR_ORDER_BY,
    ORDENAR, 
    ACTUALIZAR_FILTROS,
    FILTRAR_PRODUCTOS,
    RESET_FILTROS,
} from '../actions'

const filtro_reducer = (state, action) => {
    if (action.type === CARGAR_PRODUCTOS) {
        /*Podríamos asignar un valor random a precio_min y precio_max, 
        tipo 2000000000 para el máximo y -20000000 para el mínimo, 
        pero para hacerlo lo más coherente posible, vamos a establer el 
        precio_max igual al mayor precio de nuestra bd y lo mismo para
        precio_min*/

        //Hacemos un map de todos nuestros productos y cogemos el mayor precio
        let auxMax = action.payload.map((item) => item.precio)
        auxMax = Math.max(...auxMax)
        return {...state, 
            productos_totales: [...action.payload], 
            productos_filtrados: [...action.payload], 
            filtros_disponibles: {
                ...state.filtros_disponibles,
                precio_max: auxMax,
                precio: auxMax
            }
        }
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

    if (action.type === ACTUALIZAR_FILTROS) {
        const {nombre, valor} = action.payload;
        /*Explcación de esta línea: filtros_disponibles:{...state, filtros_disponibles, [nombre]: valor}
        Nosotros queremos que sea cual sea el filtro que estemos tocando, se actualice con nuestro valor, 
        así que en vez de hacer un switch o algo así, lo actualizamos de manera dinámica, 
        el valor nombre va a ser una de las propiedades de filtros_disponibles, la que sea se actualizará
        con el valor "valor" */
        return {
            ...state, 
            filtros_disponibles:{...state.filtros_disponibles, [nombre]: valor}
        }
    }


    if (action.type === FILTRAR_PRODUCTOS) {
        return {...state}
    }

    if(action.type === RESET_FILTROS) {
        return {...state, 
            filtros_disponibles: {
            texto: '', 
            fabricante: 'Todos',
            color: 'Todos', 
            categoria: 'Todos',
            precio: 0,
            envioGratis: false,
        },}
    }

    throw new Error(`No matching "${action.type}" - action type`)
}

export default filtro_reducer
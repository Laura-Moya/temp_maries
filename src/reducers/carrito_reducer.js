import {
    AÑADIR_AL_CARRITO, 
    ELIMINAR_DEL_CARRITO,
    MODIFICAR_CANTIDAD,
    VACIAR_CARRITO
} from '../actions'

const carrito_reducer = (state, action) => {

    if (action.type === AÑADIR_AL_CARRITO) 
    {
        const {id, color, cantidad, producto} = action.payload;

        //Hay que comprobar si lo que nos viene para añadir ya 
        //está en la cesta, para subir la cantidad y no "añadirlo"
        //de nuevo

        //No vale mirar solo el id porque si cambia el color, 
        //sí que lo añadimos de nuevo
        const auxItem = state.carrito.find((item) => item.id === id + color)
        if (auxItem) {
            const auxCarrito = state.carrito.map((item) => {
                if (item.id === id + color) {
                    let cantidadActualizada = item.cantidad + cantidad
                    //Comprobamos que el cliente no añada más items
                    //de los que hay en stock realmente
                    if (cantidadActualizada > item.maxStock) {
                        cantidadActualizada = item.maxStock
                    }
                    return {...item, cantidad: cantidadActualizada}
                }
                else {
                    return item
                }
            })
            return {...state, carrito: auxCarrito}
        }
        else {
            const productoaAñadir = {
                id: id+color,
                nombre: producto.nombre,
                color,
                cantidad,
                imagen: producto.imagen[0].url,
                precio: producto.precio,
                maxStock: producto.stock,
            }
            return {...state, carrito: [...state.carrito, productoaAñadir]}
        }
    }

    if (action.type === ELIMINAR_DEL_CARRITO)
    {        
        const {id, color} = action.payload;

        //Recuerda que de payload le estás pasando el id del producto a eliminar!!!
        const carritoAux = state.carrito.filter((item) => item.id !== id)
        return {...state, carrito: carritoAux}
    }

    if (action.type === MODIFICAR_CANTIDAD) 
    {
        const {id, valor} = action.payload
        const carritoAux = state.carrito.map((item) => {
            if (item.id === id){
                if (valor === 'mas' ){
                    let cantidadActualizada = item.cantidad + 1;
                    if (cantidadActualizada > item.maxStock) {cantidadActualizada = item.maxStock}
                    return {...item, cantidad: cantidadActualizada}
                }
                if (valor === 'menos'){
                    let cantidadActualizada = item.cantidad - 1;
                    if (cantidadActualizada < 1) {cantidadActualizada = 1}
                    return {...item, cantidad: cantidadActualizada}
                } 
            }
            else return item
        } )

        return {...state, carrito: carritoAux}
    }

    if (action.type === VACIAR_CARRITO)
    {
        //No traemos payload porque simplemente hay que vaciar el localStorage
        return {...state, carrito: []}
    }

    throw new Error(`No matching "${action.type}" - action type`)
}

export default carrito_reducer
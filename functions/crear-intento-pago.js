exports.handler = async function (event, context) {
    if (event.body) {
        const { carrito, coste_envio, items_carrito } = JSON.parse(event.body)
        console.log(carrito)
        return {
            statusCode: 200,
            body: JSON.stringify(carrito),
        };
        
    }
        
    return {
        statusCode: 200,
        body: "Create Payment Intent",
    };

};
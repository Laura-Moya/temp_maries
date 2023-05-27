
const dotenv = require('dotenv')
dotenv.config()
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY)

exports.handler = async function (event, context) {
  const { carrito, coste_envio, items_carrito, precio_total } = JSON.parse(event.body)

  const calcularMontoTotal = () => {
    return coste_envio + parseInt(precio_total)
  }
  try {
    const paymentIntent = await stripe.paymentIntents.create({
    //Estos dos parámetros se tienen que llamar así sí o sí. Stripe rules
      amount: calcularMontoTotal(),
      currency: 'eur',
    })
    return {
      statusCode: 200,
      body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    }
  }
}
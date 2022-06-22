import React from "react"
import { Link } from "react-router-dom"
import { Context } from "../../context/Context"


/* AGREGA LA IMAGEN DE LA CANASTA AL MENU */
export default function CartWidget () {

const {items, coffeeCart} = React.useContext(Context)       

return (
<div className="text"><Link to = "/cart"><img src="/images/canasta.png" alt="Carrito de compras"/> </Link>{items()}</div>
)
}
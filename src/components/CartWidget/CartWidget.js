import { Link, NavLink } from "react-router-dom"

/* AGREGA LA IMAGEN DE LA CANASTA AL MENU */
export default function CartWidget ({count}) {
    return (
        <div className="text">
            <Link to = "/cart"><img src="images/canasta.png" alt="Carrito de compras"/> </Link>
        </div> 
    ) 
}
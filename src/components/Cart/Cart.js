import React from "react"
import CartItem from "../CartItem/CartItem"
import {Container} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { Context } from "../../context/Context"
import { clear } from "@testing-library/user-event/dist/clear"
import Buttons from "../Buttons/Buttons"

export default function Cart () {
const {coffeeCart, total, clear} = React.useContext(Context)

const list = {
    display: "flex", 
    justifyContent: "space-around",
    flexWrap: "wrap",
    alignItems: "center",
}

return( 
    (!coffeeCart.length>0) 
    ? (<Container><div className="title"> El carrito esta vacio
    <NavLink to ="/products"><Buttons text={"Empezar a comprar"} style={"addDetail"} /></NavLink></div></Container>)
    : (
    <Container>
        <h1 className="title"> MI CARRITO </h1>
        <div style={list}>
        {coffeeCart.map((product) => <CartItem product={product} />)}</div>
        <p className="text text-center">El total de tu compra es de <b>{total()}$</b></p>  
        <div className="text-center"> <NavLink to ="/CheckOut"><Buttons text= {"Comprar"} style={"addDetail"}/></NavLink>
        <Buttons text={"Vaciar Carrito"} handle={() => clear()} style={"addDetail"} />
        </div>    
    </Container>)  
)
}

import React from "react"
import {Container} from "react-bootstrap"
import { Context } from "../../context/Context"

import ItemResume from "../ItemResume/ItemResume"

export default function Resume () {
const {coffeeCart, total, clear} = React.useContext(Context)

const list = {
    display: "flex", 
    justifyContent: "space-around",
    flexWrap: "wrap",
    alignItems: "center",
}

return( 
    <Container>
        <div style={list}>
        <h1 className="title"> Mi pedido </h1>
        {coffeeCart.map((product) => <ItemResume product={product} />)}</div>
        <p className="text text-center">El total de tu compra es de <b>{total()}$</b></p>      
    </Container>  
)
}
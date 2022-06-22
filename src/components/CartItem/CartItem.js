import React from "react"
import {Container, Col, Row} from "react-bootstrap"
import {Context} from "../../context/Context"


export default function CartItem ({product})  {
const {coffeeCart, removeItem} = React.useContext(Context)

const img =
{
    width: "40%",
}

const colour ={
    color: "red",
}

const Total  = (a,b) => {
    return(a*b)
} 

return (
<Container>
    <Row>
        <Col sm="2"><img src={product.img} alt="imagen" style={img}/></Col>
        <Col sm="4">{product.title}</Col>
        <Col sm="1">{product.price}$</Col>
        <Col sm="1">{product.quantity}</Col>
        <Col sm="2" style={colour}>{Total(product.price,product.quantity)}$</Col>
        <Col sm="2"><button onClick={() => removeItem(product.id)} className="addDetail"> Eliminar </button></Col>        
    </Row>
</Container>
)
}
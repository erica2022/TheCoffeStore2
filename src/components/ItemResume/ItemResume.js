import React from "react"
import {Container, Col, Row} from "react-bootstrap"

export default function ItemResume ({product})  {
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
        <Col sm="2">{product.price}$</Col>
        <Col sm="1">{product.quantity}</Col>
        <Col sm="2" style={colour}>{Total(product.price,product.quantity)}$</Col>   
    </Row>
</Container>
)
}
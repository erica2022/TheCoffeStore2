import { Card} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import React from "react"
import Buttons from "../Buttons/Buttons"

/* CARD CON EL PRODUCTO Y LOS BOTONES DEL ITEMCOUNT*/
export default function Item ({product}) {
    const img = {
        width: "50%",
        padding: "10px 10px",
        margin: "0 auto"
    }

    const link = {
        color:"#12a2ad",
        fontFamily: "'Roboto', sans-serif",
        fontSize: "20px",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }

    return(      
        <Card border="light" style={{ width: '300px', height: '400px', border: '3px solid #000000', margin:'30px'}}>
            <Card.Img variant="top" style={img}  src={product.img} alt={product.id}/>
            <Card.Body>
                <Card.Title className="text-center">{product.title}</Card.Title>
                <Card.Text className="text-center"> 
                    <p>Precio: {product.price}</p>
                </Card.Text>
                <NavLink to ={`/detail/${product.id}`}><Buttons text= {"Ver detalle"} style={"addDetail"}/></NavLink> 
            </Card.Body>
        </Card>
    )
}
import Item from "../Item/Item"
import React from "react"
import { Container } from "react-bootstrap"

export default function ItemList ({ListProd}) {
    const list = {
        display: "flex", 
        justifyContent: "space-around",
        flexWrap: "wrap",
        alignItems: "center",
    }
    
    return (
        <>
        <Container>
            <h1 className="title"> NUESTROS CAFÉS </h1>
            <div style={list}>
            {ListProd.map((product) => <Item product={product} key={product.id}/>)}
            </div>    
        </Container>

        </>
     )
}
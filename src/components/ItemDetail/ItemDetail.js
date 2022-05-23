import React from "react"
import { Container, Card, Row, Col } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"
import { Context } from "../../context/Context"
import AddButton from "../ItemCount/ItemCount"
import { Link, NavLink } from "react-router-dom"

export default function ItemDetail ({coffee}){

    const [count, setCount ] = React.useState(1)
    const {isInCart, addToCart} = React.useContext(Context)

    const img =
    {
        width: "50%",
        padding: "10px 10px",
        margin: "0 auto"
    }

    const titleCard =
    {
        color: "#666666",
        textAlign: "center",
        fontFamily: "'Roboto', sans-serif",
        fontSize: "30px",
        padding: "20px 20px"
    }

    return(
       <Container>
       <Row>         
            <Col sm={6}>
                <Card border="light" style={{ height: '300px', border: '0px solid #000000', margin:'30px'}}>
                <Card.Img className="text-center" style={img} variant="top" src={coffee.img} alt={coffee.id}/>
                </Card>                            
            </Col>  
            <Col sm={6}>
                <Card border="light" style={{ height: '400px', border: '0px solid #000000', margin:'30px'}}>                                
                <Card.Body>
                <Card.Title style={titleCard}>{coffee.title}</Card.Title>
                    <Card.Text> 
                        <p className="textCard"><b>{coffee.description}</b></p>
                        <p className="textCard"><b>Stock:</b> {coffee.stock}</p>
                        <p className="textCard"><b>Precio:</b> {coffee.price}</p>
                    </Card.Text>
                    {isInCart(coffee.id) 
                        ? (<NavLink to ="/cart"><button className="addDetail"> Ir al carrito</button></NavLink>) 
                        : <AddButton
                            onSubmit={() => addToCart(coffee, count)}
                            count={count}
                            setCount={setCount}
                            stock={coffee.stock}
                          />
                    }
              
                </Card.Body>
                </Card>                  
            </Col>   
        </Row> 
 
        </Container>
    )
}
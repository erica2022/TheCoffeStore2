import React from "react";
import {Container, Form, Button} from "react-bootstrap"

export default function Forms ({handleChange, handleSubmit, value}) { 
    console.log(value)
return(
    <Container>
        <h1 className="title">FINALIZAR COMPRA</h1>
        <div class="col-6" >
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
        <Form.Label >Nombre:</Form.Label>
        <Form.Control type="text" placeholder="Nombre" name="name" onChange={handleChange}/>        
        <Form.Label style={{ marginTop:'20px'}}>Correo electrónico</Form.Label>
        <Form.Control type="email" placeholder="Correo electrónico" name="email" onChange={handleChange}/>
        <Form.Label style={{ marginTop:'20px'}}>Repetir Correo electrónico</Form.Label>
        <Form.Control type="email" placeholder="Correo electrónico" name="email2" onChange={handleChange}/>
        <Form.Label style={{ marginTop:'20px'}}>Teléfono:</Form.Label>
        <Form.Control type="phone" placeholder="Teléfono" name="phone" onChange={handleChange}/>
        <Button style={{ marginTop:'30px'}} type="submit" variant="secondary">Finalizar compra</Button>
        </Form.Group>
        </Form>
        </div>                 
    </Container>
)
}
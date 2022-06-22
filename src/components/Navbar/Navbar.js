import CartWidget from "../CartWidget/CartWidget"
import {Navbar, Container, Nav, NavDropdown, } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"

export default function NavBar(){
        
const menu = {
    backgroundColor:"#efefef",
    borderRadius: "25px",
    boxShadow: "rgba(0, 0, 0, 0.5) 0px 8px 16px"
}  

const link = {
    color:"#603813",
    fontFamily: "'Roboto', sans-serif",
    fontSize: "22px",
    padding: "20px 20px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center"
}


/* CREO EL HEADER DE LA PAGINA Y AGREGO EL CARRITO CREADO EN CARTWIDGET*/
    return(
        <header>
            <Navbar expand="lg" >
            <Container style={menu}>
                <div > 
                <Nav.Link> <NavLink to ="/" style={link}><img src="images/logo.png" id="logo" alt="logo de la empresa" className="logo"/></NavLink></Nav.Link>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link> <NavLink to ="/Products" style={link}> Comprá Online </NavLink></Nav.Link>
                    <NavDropdown title="Intensidades" id="basic-nav-dropdown" style={link}>
                        <NavDropdown.Item ><NavLink to ="/Category/suave" style={link}> Suave </NavLink></NavDropdown.Item>
                        <NavDropdown.Item ><NavLink to ="/Category/fuerte" style={link}> Fuerte </NavLink></NavDropdown.Item>
                    </NavDropdown>
                    <CartWidget/>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    );
}


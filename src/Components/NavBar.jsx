import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
    return (
    <div className= "navegacion">
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Brand</Navbar.Brand> 
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Productos</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
    </div>
)
}

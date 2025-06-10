import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'   
import { Link } from 'react-router-dom'



const BarraNavegacao = () => {
  return (
    <div>
        {""}


    <Navbar expand="lg" bg="success" data-bs-them="dark">
        <Container>
            <Navbar.Brand as={Link} to="/home">
            VS Biblioteca
            </Navbar.Brand>
            
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/cadastrausuario">Cad User</Nav.Link>
                <Nav.Link as={Link} to="/cadastralivro">Cad Livro</Nav.Link>
            </Nav>

        </Container>
    </Navbar>

    </div>
  )
}

export default BarraNavegacao
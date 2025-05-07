import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"

import { BsBoxSeamFill } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";


const BarraNavegacao = () => {
    // const usuarioNome = "Visitante"
    const {usuarioNome, logout } = useContext (AuthContext)
  return (
    <div style={{ position: "sticky", top: "0", width: "100%", zIndex: 1 }}>
        
        <Navbar expand="lg" bg="success" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/home">
                    Mercado <BsBoxSeamFill size="1.5em" 
                                            className="me-2" 
                                            color="white" />
                    Silva
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="minha-nav" />
                    <Navbar.Collapse id="minha-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Produtos</Nav.Link>
                            <Nav.Link href="/cadastraproduto">Cadastro</Nav.Link>
                        </Nav>
                        <Nav className="justify-content-end">
                            <Navbar.Text style={{ color: "white", marginRight: "5px" }}>
                                Usuário: {usuarioNome} |
                            </Navbar.Text>
                            {/* Caso o usuário tenha feito login, aparece o botão SAIR, senão o botão ENTRAR */}
                            {usuarioNome === "Visitante" ? (
                                  <>
                                    <Button variant="primary" 
                                            href="/login">
                                            Entrar
                                    </Button>                           
                                    </>
                                    ) : (
                                    <>
                                    <Button variant="danger"
                                            href="/login"
                                            onClick={logout}>
                                            Sair
                                    </Button>
                                    </>
                                    )
                            }
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default BarraNavegacao
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"

import { BsBoxSeamFill } from "react-icons/bs";

const BarraNavegacao = () => {
    const usuarioNome = "Vistante"
  return (
    <div>
        <Navbar expand="lg" bg="succes" data-ds-theme="dark">
            <Container>
                <Navbar.Brand hrej="/home">
                <BsBoxSeamFill size="1.5em" className="me-2" color="white"/>
                    Mercado Silva
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="minha=nav" />
                    <Navbar.Collapse id="minha-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Produtos</Nav.Link>
                            <Nav.Link href="/cadastraProduto">Cadastro</Nav.Link>
                        </Nav>
                        <Nav className="justify-content-end">
                            <Navbar.Text style={{color:"white", marginRight: "5px"}}>
                                Usuário: xxxXXxxx
                            </Navbar.Text>
                            {/* Caso o usuário tenha feito login, aparece o botão SAIR, senão o botão ENTRAR */}
                            {
                                    usuarioNome === "Visitante" ? (
                                        <>
                                        <Button variant="primary" href="/login">Entrar</Button>
                                        </>
                                    ) : (
                                        <>
                                        <Button variant="danger" href="/login">Sair</Button>
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
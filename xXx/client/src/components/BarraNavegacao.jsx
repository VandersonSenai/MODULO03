// Importação components do bootstrap
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const BarraNavegacao = () => {
  return (
    <div>
      {" "}
      <Navbar expand="lg" bg="success" data-bs-theme="dark">
        <Container>
          {/* Logomarca do site */}
          <Navbar.Brand href="/home">
            {/* Texto Logo */}
            C&G BIBLIOTECA
          </Navbar.Brand>
          <Nav className="me-auto">
            {/* Páginas */}
            <Nav.Link href="/cadastrausuario"> 
            Cadastrar Usuário 
            </Nav.Link>
            <Nav.Link href="/cadastralivro"> 
            Cadastrar livros 
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default BarraNavegacao;

// Importação components do bootstrap
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const BarraNavegacao = () => {
  return (
    <div>
      {" "}
      <Navbar expand="lg" bg="primary" data-bs-theme="dark">
        <Container>
          {/* Logomarca do site */}
          <Navbar.Brand href="/home">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v560q0 33-23.5 56.5T800-120H160Zm0-80h640v-560H160v560Zm40-80h200v-80H200v80Zm382-80 198-198-57-57-141 142-57-57-56 57 113 113Zm-382-80h200v-80H200v80Zm0-160h200v-80H200v80Zm-40 400v-560 560Z"/></svg>
            <span className="px-4">Lista de Tarefas</span> 
          </Navbar.Brand>
          <Nav className="me-auto px-1 d-flex justify-content-center">
            {/* Páginas */}
            <span className="d-flex justify-content-evenly">
            <Nav.Link className="mx-2" href="/cadastrausuario"> 
            Cadastrar Usuário 
            </Nav.Link>
            <Nav.Link className="mx-2" href="/cadastratarefa"> 
            Cadastrar Tarefa 
            </Nav.Link>

            </span>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default BarraNavegacao;

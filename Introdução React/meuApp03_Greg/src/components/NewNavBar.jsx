import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/esm/Button';

export function NewNavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary " bg="dark" data-bs-theme="dark">
{/* adicionando thema dark */}
      <Container className="mt-0 p-1">
        <Navbar.Brand href="/home">
{/* adicionando icones aos menus             */}
        <img
              alt="TESTE DE LOGO NO MENU"
              src="./logo_0_5x.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              />{' '}
              MenuBootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link href="/cadastro">Cadastro</Nav.Link>
            <Nav.Link href="/contato">Contato</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/sobre">Sobre</Nav.Link>

            <NavDropdown title="Unidades" id="basic-nav-dropdown" bg="dark" data-bs-theme="dark">
              <NavDropdown.Item href="#action/3.1">Vitoria</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Serra
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Vila Velha</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Viana
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Guarapari
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Nav>
                <Navbar.Text>
                    Logado como : <a href='#login' className="p-2">EU mesmo</a>
                </Navbar.Text>
                <Button  variant="danger" >Sair</Button>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NewNavBar;
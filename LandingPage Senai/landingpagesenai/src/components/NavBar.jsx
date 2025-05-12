import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/esm/Button';
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
        // <Navbar expand="lg" className="bg-body-tertiary " bg="dark" data-bs-theme="dark">

        
    <Navbar expand="lg" className={styles.navbar_custom}
      > 
{/* adicionando thema dark */}
      <Container className="mt-0 p-1" >
        <Navbar.Brand href="/home">
{/* adicionando icones aos menus             */}
        <img
              alt="SenaiLogo"
              src="./logo_senai.svg"
              width="300"
              // height="30"
              className="d-inline-block align-top"
              />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto bg" >

            <Nav.Link className={styles.link} href="/cursos">Cursos</Nav.Link>            
            <Nav.Link className={styles.link} href="/contato">Contato</Nav.Link>
            <Nav.Link className={styles.link} href="/login">Login</Nav.Link>
            <Nav.Link className={styles.link} href="/sobre">Sobre</Nav.Link>

            {/* <NavDropdown title="Unidades" id="basic-nav-dropdown" bg="dark" data-bs-theme="dark">
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
            </NavDropdown> */}

          </Nav>
          <Nav >
                <Navbar.Text className={styles.text} >
                    login :
{/* <a href='#login' className="p-2">Visitante</a> */}
<a href='/login' className="p-2">Visitante</a>
                </Navbar.Text>
                {/* <Button  variant="danger" >Sair</Button> */}
                {/* <Button  variant="success" >Login</Button> */}
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default NavBar
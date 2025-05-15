import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/esm/Button';
import styles from "./NavBar.module.css";
import ModalLogin from './ModalLogin';
import { useState } from "react";
import { AuthContext } from "../contexts/UserContext";
import { useContext } from "react";

const NavBar = () => {
   const { usuarioNome, logout } = useContext(AuthContext);

  return (
        // <Navbar expand="lg" className="bg-body-tertiary " bg="dark" data-bs-theme="dark">

        
    <Navbar sticky="top" expand="lg" className={`container-fluid py-2 ${styles.navbar_custom}`}
      > 
{/* adicionando thema dark */}
      <Container className="mt-0 p-1" >
        <Navbar.Brand href="/home">
{/* adicionando icones aos menus             */}
        <img
              alt="SenaiLogo"
              src="./SenaiLogoBranco.svg"
              // src="./logo_senai.svg"
              width="200"
              // height="30"
              className="d-inline-block align-top"
              />{' '}
        </Navbar.Brand>
        <Navbar.Toggle className={styles.text} aria-controls="basic-navbar-nav" />
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

                {/* {usuarioNome === "Visitante" ? 
                  `Olá, ${usuarioNome}` :
                  `Olá, Visitante`} */}
             {usuarioNome === "Visitante" ? (
                <>
                  <span>Olá, </span>
                  <a href="/login" className={styles.login}>Visitante
                  </a>
                </>
              ) : (
                                <>
                  <span>Olá, </span>
                  <a href="/login" onClick={logout} className={styles.login}>{usuarioNome}
                  </a>
                </>
                // `Olá, ${usuarioNome}`
              )}
              

{/* 
               <Button variant="danger" href="/login" onClick={logout}>
                                  Sair
                                </Button> */}
                    
{/* <span>Olá,</span><a href='/login' className={styles.login}>Visitante</a> */}
{/* 

`<span>Olá,</span><a href='/login' className={styles.login}>Visitante</a>`
 */}


 {/* <span className={styles.login} onClick={() => setShowModal(true)} role="button">
        Visitante
      </span>
      {showModal && (
        <ModalLogin  onClose={() => setShowModal(false)} 
        onClick={() => setShowModal(true)} 
        />
      )} */}
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
// importando components do bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
// MUDEI AQUI AGORA
import NavDropdown from "react-bootstrap/NavDropdown";

import { FcAssistant } from "react-icons/fc";


import { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";
import styles from "./NavBar.module.css";

const BarraNavegacao = () => {
  // Usa as variaveis do contexto de usuário
  const { usuarioNome, logout } = useContext(AuthContext);

  
  const id = localStorage.getItem("id") || "";

  return (
    <div style={{ position: "sticky", top: "0", width: "100%", zIndex: 10 }}>
      <Navbar sticky="top" expand="lg" className={`container-fluid py-2 px-0 ${styles.navbar_custom}`}
        style={{ 
        display: 'flex', 
        alignItems: 'center'
    }}
      > 
      {/* <Navbar expand="lg" bg="success" data-bs-theme="dark"> */}
        <Container>
          
          <Navbar.Brand as={NavLink} to="/home"
          // style={{ textDecoration: "none" }}
          
          >
            
            
            <FcAssistant size="1.5em" className="me-2 m-1" />
            
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="minha-nav" />
          <Navbar.Collapse id="minha-nav">
            {/* MUDEI AQUI AGORA */}
            {/* Paginas */}
            <Nav className="me-auto">
              <NavLink to="/cadastrausuario"
                      style={({ isActive }) => {
                      return { color: isActive ?
                            'var(--secondary-blue)' : 
                            'var(--primary-dark-blue)',
                            transition: 'all 0.2s ease',
                            textDecoration: isActive ? 'underline' : 'none',
                            fontWeight: isActive ? 'bold' : 'normal',
                            }
                      }}
              >
              Cadastrar usuário
              </NavLink>
              {usuarioNome != "Visitante" && (
                <>
              <NavLink className="mx-3" 
                      to="/home"
                      style={({ isActive }) => {
                      return { color: isActive ?
                            'var(--secondary-blue)' : 
                            'var(--primary-dark-blue)',
                            transition: 'all 0.2s ease',
                            textDecoration: isActive ? 'underline' : 'none',
                            fontWeight: isActive ? 'bold' : 'normal',
                            }
                      }}
              >
              Ver Produtos</NavLink>
              <NavLink to="/cadastraproduto"
                                    style={({ isActive }) => {
                      return { color: isActive ?
                            'var(--secondary-blue)' : 
                            'var(--primary-dark-blue)',
                            transition: 'all 0.2s ease',
                            textDecoration: isActive ? 'underline' : 'none',
                            fontWeight: isActive ? 'bold' : 'normal',
                            }
                      }}
              >
              Cadastrar produto
              </NavLink>
              </>
              )}
            </Nav>
            {/* Sair */}
            <Nav className="justify-content-end">
              {/* Nome do usuário */}
              <Navbar.Text style={{ color: "white", marginRight: "5px" }}>
                {/* Usuário: */}
                {/* MUDEI AQUI AGORA */}
                {/* Caso tenha feito login, aparece o botao de sair, caso contrario, o botao para login */}
                <span className={styles.login}>Olá,</span>
                {usuarioNome === "Visitante" ? (
                  <>
                  <Link  as={NavLink} 
                          to="/login" 
                          className={styles.login}>{usuarioNome}
                  </Link>
                  </>
                ) : (
                  <>
                    <NavDropdown
                      title={usuarioNome}
                      className="d-inline-block"
                      id="basic-nav-dropdown"
                    >
                      <NavDropdown.Item as={NavLink} to={`/editausuario/${id}`}
                      className={styles.login}>Editar usuário
                      </NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/login" 
                      onClick={logout} 
                      className={styles.login}
                      >Sair de {usuarioNome}
                      </NavDropdown.Item>
                    </NavDropdown>
                  {/* <Link  as={NavLink} to="/login" 
                          onClick={logout} 
                          className={styles.login}>{usuarioNome}
                  </Link> */}
                  </>
                )}
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default BarraNavegacao;

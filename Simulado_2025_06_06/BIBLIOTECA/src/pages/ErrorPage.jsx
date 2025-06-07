import { Container } from "react-bootstrap";
import styles from "./Estilos.module.css";
import React from 'react'

const ErrorPage = () => {
  return (
    <div className={styles.divPagina}>
      <Container fluid>
            <h1>
              Pagina não encontrada 404
            </h1>
      </Container>
    </div>
  )
}

export default ErrorPage
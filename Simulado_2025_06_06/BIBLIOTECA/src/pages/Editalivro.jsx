import styles from "./Estilos.module.css";
import React from 'react'
import Container from "react-bootstrap/Container";
import CardLivroEditar from "../components/CardLivroEditar";


export const Editalivro = () => {
  return (
    
    <div className={styles.divPagina}> 
    <Container>
     <CardLivroEditar/>
    </Container>
   </div>
    
  )
}

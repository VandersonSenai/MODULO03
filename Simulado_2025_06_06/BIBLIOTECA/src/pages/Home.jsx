import React from 'react'
import styles from "./Estilos.module.css";
import { useListaLivros } from "../hooks/useApi";
import { AuthContext } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";
import CardLivro from "../components/CardLivro";
import Container from "react-bootstrap/Container";

const Home = () => {
  // const { usuarioNome } = useContext(AuthContext)

  const cursos = useListaLivros();

  return (
  <div className={styles.divPagina}>
    <Container>

    
      <section id="home" >
      <p className="text-center "></p>
        
      </section>
      <section id="cursos" className="justify-content-center gap-5 mt-1 mb-5 py-4">
        <h3 className="text-center" >Livros no Acervo</h3>
          <div className="d-flex justify-content-center gap-5 mt-4 mb-5 flex-wrap" >
          {cursos.map((livros) => (
            <CardLivro
              key={livros.livro_id}
              livro_id={livros.livro_id}
              livro_titulo={livros.livro_titulo}
              livro_autor={livros.livro_autor}
              livro_genero={livros.livro_genero}
              livro_status={livros.livro_status}
            />              
          ))}
          
          </div>
        </section>
    </Container>
  </div>
  )
}

export default Home
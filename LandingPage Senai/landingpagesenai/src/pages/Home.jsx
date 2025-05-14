import React from 'react'
import styles from "./Estilos.module.css";
import { useListaCursos } from "../hooks/useApi";
import { AuthContext } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";
import CardCurso from "../components/CardCurso";
import CarouselSenai from "../components/CarouselSenai";

const Home = () => {
  // const { usuarioNome } = useContext(AuthContext)

  const cursos = useListaCursos();

  return (
  <div className={styles.divPagina}>

      <div className="row">
        <CarouselSenai/>
        {/* <div style={{ width: "100%",marginLeft: "auto",
      marginRight: "auto", marginTop: "40px", marginBottom: "40px"}}>
          
          <a href="https://conteudo.senaies.com.br/cursos-qualificacao" target="_blank" rel="noopener noreferrer">
          <img
            src="banner-Acelera-Senai_desktop.png"
            className="card-img-top"
            alt="..."
          />
          </a>
      </div> */}
      </div>
    
      <h1 className="text-center" >Cursos Disponiveis</h1>
        <div className="d-flex col-12 gap-2 mt-3 justify-content-between flex-wrap">
        {cursos.map((prod) => (
          <CardCurso
            key={prod.id}
            id={prod.id}
            nome={prod.nome}
            cidade={prod.cidade}
            modalidade={prod.modalidade}
            imagemUrl={prod.imagemUrl}
            valor={prod.valor}
          />              
        ))}
        </div>
    
  </div>
  )
}

export default Home
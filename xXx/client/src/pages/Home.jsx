import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardLivro from "../components/CardLivro";

import { useListaLivros } from "../hooks/useLivro";
const Home = () => {
  const livros = useListaLivros();
  console.log();
  
  return (
    <>
      <Row>
        <Col xs={4}>
          <h1>QUERO LER</h1>
          {livros.map((livro) => 
            livro.status == "Quero ler" && (
              <CardLivro
                key={livro.id}
                id={livro.id}
                titulo={livro.titulo}
                autor={livro.autor}
                genero={livro.generos}
                status={livro.status}
                usuario={livro.usuario}
              />
            )
          )}
        </Col>
        <Col xs={4}>
          <h1>LENDO</h1>
          {livros.map((livro) => 
            livro.status == "Lendo" && (
              <CardLivro
                key={livro.id}
                id={livro.id}
                titulo={livro.titulo}
                autor={livro.autor}
                genero={livro.generos}
                status={livro.status}
                usuario={livro.usuario}
              />
            )
          )}
        </Col>
        <Col xs={4}>
          <h1>LIDO</h1>
          {livros.map((livro) => 
            livro.status == "Lido" && (
              <CardLivro
                key={livro.id}
                id={livro.id}
                titulo={livro.titulo}
                autor={livro.autor}
                genero={livro.generos}
                status={livro.status}
                usuario={livro.usuario}
              />
            )
          )}
        </Col>
      </Row>
    </>
  );
};

export default Home;

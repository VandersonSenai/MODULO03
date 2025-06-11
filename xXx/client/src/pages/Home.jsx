import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import CardLivro from "../components/CardLivro";

import { useListaLivros } from "../hooks/useLivro";
const Home = () => {
  const livros = useListaLivros();
  console.log();
  
  return (
    <>
      <Container className=" m-3 justify-content-evenly">
      {/* <Container className="mt-3" > */}
        <Row>
          <Col xs={12} className="text-center m-3 justify-content-center">
            <h2>Bem-vindo(a) à sua biblioteca virtual!</h2>
          </Col>
        </Row>
        
      <Row xs={12} className="justify-content-evenly">
        
        <Col xs={4} className="m-2" style={{ width: "18rem" }}>
          <h1 className="text-center" style={{ width: "16rem" }}>
            QUERO LER
          </h1>
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
        
        <Col xs={4} className="m-2" style={{ width: "18rem" }}>
          <h1 className="text-center" style={{ width: "16rem" }}>
            LENDO
            </h1>
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
        
        <Col xs={4} className="m-2" style={{ width: "18rem" }}>
          <h1 className="text-center" style={{ width: "16rem" }}>
            LIDO
          </h1>
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
      </Container>
    </>
  );
};

export default Home;

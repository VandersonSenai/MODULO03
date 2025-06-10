import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardLivro from "../components/CardLivro"

import { useListaLivros } from "../hooks/useLivro";

const Home = () => {
  const livros = useListaLivros();
  return (
    <div>
      <Row>
        <Col xs={4}>
          <h1>Quero Ler</h1>
          {livros.map((livro) =>(
            livro.status == "Quero ler" && (
              <CardLivro
              key={livro.id}
              id={livro.id}
              titulo={livro.titulo}
              autor={livro.autor}
              generos={livro.generos}
              status={livro.status}
              usuario={livro.usuario}
              />
            )
          )
          )}
        </Col>
        <Col xs={4}>
          <h1>Lendo</h1>
            {livros.map((livro) =>(
            livro.status == "Lendo" && (
              <CardLivro
              key={livro.id}
              id={livro.id}
              titulo={livro.titulo}
              autor={livro.autor}
              generos={livro.generos}
              status={livro.status}
              usuario={livro.usuario}
              />
            )
          )
          )}
        </Col>
        <Col xs={4}>
          <h1>Lido</h1>
            {livros.map((livro) =>(
            livro.status == "Lido" && (
              <CardLivro
              key={livro.id}
              id={livro.id}
              titulo={livro.titulo}
              autor={livro.autor}
              generos={livro.generos}
              status={livro.status}
              usuario={livro.usuario}
              />
            )
          )
          )}
        </Col>
      </Row>

    </div>
  )
}

export default Home
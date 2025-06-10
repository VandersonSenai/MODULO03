import React from "react";
import CardLivro from "../components/CardLivro.jsx";

import { useListaLivro } from "../hooks/useApi";

import { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";

const Home = () => {

 
  const livros = useListaLivro();

  return (
    <div>
      <h1>Lista</h1>
      <div className="d-flex col-12 gap-2 mt-3 justify-content-between flex-wrap">
        <CardProduto
          id="1"
          nome="Shampoo do CR7"
          descricao="Milior xampu de todos"
          preco="7,77"
          categoria="Saúde e beleza"
          imagemUrl="https://m.media-amazon.com/images/I/71wZzJ2ljRL.jpg"
        />

        {livros.map((livro) => (
          <CardProduto
            key={livro.id}
            id={livro.id}
            titulo={livro.titulo}
            autor={livro.autor}
            genero={livro.genero}
            status={livro.status}
            usuario_id={livro.usuario_id}
            
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

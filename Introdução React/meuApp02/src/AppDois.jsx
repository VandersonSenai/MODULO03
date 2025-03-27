import { useState } from "react";
import "./App.css";
import ShowUserName from "./components/ShowUserName";
import Time from "./components/Time";
import ListaCantor from "./components/ListaCantor";

function AppDois() {

  const nj = 6;
  const titulo = true;

  const nome = "Vanderson";
  const [name] = useState("Ney");
  const [cantor] = useState([
    {
      id: 1,
      nome: "Bruce Dickson",
      estiloMusical: "RnR",
      premiado: true,
    },
    {
      id: 1,
      nome: "Fredy Mercury",
      estiloMusical: "RnR",
      premiado: true,
    },
    {
      id: 1,
      nome: "Tiririca",
      estiloMusical: "PoP",
      premiado: false,
    },
  ]);
  return (
    <>
      {/* passando para o componente ShowUserName
    os parametros name e shirt 
    */}
      <ShowUserName name={nome} shirt="7" />

      {/* Props com desestruturação */}
      {/* <hr />
      <Time nome="Sao Paulo" estado="SP" posicao={1} campeao={true}/>
      <hr/>
      <Time nome="Real Madrid" estado="MD" posicao={2} campeao={true}/>
      <hr/>
      <Time nome="Vasco da Gama" estado="RJ" posicao={100} campeao={false}/> */}
      <hr />
      <hr />
      {
        // Posicao dentro da matriz
        cantor.map((item) => (
          <ListaCantor
            key={item.id}
            nome={item.nome}
            estiloMusical={item.estiloMusical}
            premiado={item.premiado}
          />
        ))
      }

      <h2
      // usamo esse IF para verificar se nj>5
        style={
          nj > 5
            ? { color: "green", backgroundColor: "yellow", fontSize: "30px" }
            : { color: "red", backgroundColor: "white", fontSize: "20px" }
        }
      >
        Este CSS é dinâmico
      </h2>
      <h2       // usamo esse IF para verificar se nj>5
        style={
          nj < 5
            ? { color: "green", backgroundColor: "yellow", fontSize: "30px" }
            : { color: "red", backgroundColor: "white", fontSize: "20px" }
        }>Este CSS também é dinâmico</h2>
        <hr />

        <h1 className={titulo ? "titulo-incrivel" : "textoPaia" }
        
        >Titulo Superb! para testes!</h1>
      {/*       
      <ListaCantor
      key="" nome={cantor.nome} estiloMusical={cantor.estiloMusical} premiado={cantor.premiado}
      /> */}
    </>
  );
}

export default AppDois;

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import CardTarefa from "../components/CardTarefa.jsx";

import { useListaTarefas } from "../hooks/useTarefa.js";
const Home = () => {
  const tarefas = useListaTarefas();
  console.log();
  
  return (
    <>
      <Container className=" m-3 justify-content-evenly">
      {/* <Container className="mt-3" > */}
        <Row>
          <Col xs={12} className="text-center m-3 justify-content-center">
            <h2>Bem-vindo(a) à sua lista de tarefas!</h2>
          </Col>
        </Row>
        
      <Row xs={12} className="justify-content-evenly">
        
        <Col xs={4} className="m-2" style={{ width: "18rem" }}>
          <h1 className="text-center" style={{ width: "16rem" }}>
            A fazer
          </h1>
          
           {tarefas.map((tarefa) => 
            tarefa.status == "a fazer" && (
              <CardTarefa
                key={tarefa.id}
                id={tarefa.id}
                descricao={tarefa.descricao}
                setor={tarefa.setor}
                prioridade={tarefa.prioridade}
                datacadastro={tarefa.data}
                status={tarefa.status}
                usuarios={tarefa.usuarios}
              />             
            )
          )}
        </Col>
        
        <Col xs={4} className="m-2" style={{ width: "18rem" }}>
          <h1 className="text-center" style={{ width: "16rem" }}>
            Fazendo
            </h1>
           {tarefas.map((tarefa) => 
            tarefa.status == "fazendo" && (
              <CardTarefa
                key={tarefa.id}
                id={tarefa.id}
                descricao={tarefa.descricao}
                setor={tarefa.setor}
                prioridade={tarefa.prioridade}
                datacadastro={tarefa.data}
                status={tarefa.status}
                usuarios={tarefa.usuarios}
              />
            )
          )}
        </Col>
        
        <Col xs={4} className="m-2" style={{ width: "18rem" }}>
          <h1 className="text-center" style={{ width: "16rem" }}>
            Pronto
          </h1>
          {tarefas.map((tarefa) => 
            tarefa.status == "pronto" && (
              <CardTarefa
                key={tarefa.id}
                id={tarefa.id}
                descricao={tarefa.descricao}
                setor={tarefa.setor}
                prioridade={tarefa.prioridade}
                datacadastro={tarefa.data}
                status={tarefa.status}
                usuarios_id={tarefa.usuarios_id}
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

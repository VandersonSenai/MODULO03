import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useDeletaTarefa } from "../hooks/useTarefa";

const CardTarefa = (props) => {
  const { deletarTarefa } = useDeletaTarefa();

  const handleDelete = async () => {
    const deletado = await deletarTarefa(props.id);
    alert("Tarefa deletado com sucesso!");
    window.location.reload();
  };

  return (
    <div>
      <Card className="mb-2" border="primary" style={{ minWidth: "16rem"}}>
        <Card.Body>
          <Card.Text>
            <b>Tarefa : </b> {props.descricao}
          </Card.Text>
          <Card.Text>
            <b>Setor : </b> {props.setor}
          </Card.Text>
          <Card.Text>
            <b>Prioridade : </b> {props.prioridade}
          </Card.Text>
          <Card.Text>
            <b>Data : </b> {props.datacadastro}
          </Card.Text>
          <Card.Text>
            <b>Status : </b> {props.status}
          </Card.Text>
          <Card.Text>
            <b>Usuário : </b> {props.usuarios}
          </Card.Text>

          <div className="d-flex justify-content-center">
              <Button
                size="lg"
                variant="warning"
                type="button"
                href={`/editatarefa/${props.id}`}
                className="me-3"
                >
                Editar
              </Button>
              <Button
                size="lg"
                variant="danger"
                type="button"
                onClick={handleDelete}
                
                >
                Deletar
              </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardTarefa;

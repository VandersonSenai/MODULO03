import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useDeletaLivro } from "../hooks/useLivro";

const CardLivro = (props) => {
  const { deletarLivro } = useDeletaLivro();

  const handleDelete = async () => {
    const deletado = await deletarLivro(props.id);
    alert("Livro deletado com sucesso!");
    window.location.reload();
  };

  return (
    <div>
      <Card className="mb-2" border="primary" style={{ minWidth: "16rem"}}>
        <Card.Body>
          <Card.Text>
            <b>Título:</b> {props.titulo}
          </Card.Text>
          <Card.Text>
            <b>Autor:</b> {props.autor}
          </Card.Text>
          <Card.Text>
            <b>Gênero:</b> {props.genero}
          </Card.Text>
          <Card.Text>
            <b>Dono:</b> {props.usuario}
          </Card.Text>

          <div className="d-flex justify-content-center">
              <Button
                size="lg"
                variant="warning"
                type="button"
                href={`/editalivro/${props.id}`}
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

export default CardLivro;

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useDeletaLivro } from "../hooks/useLivro";

const CardLivro = (props) => {
  const { deletarLivro } = useDeletaLivro();

  const handleDelete = async () => {
    const deletado = await deletarLivro(props.id);
    alert("livro deletado com sucesso");
    window.location.reload();
  };
  return (
    <div>
      <Card border="primary" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Text>
            <b>Título:</b> <br /> {props.titulo}
          </Card.Text>
          <Card.Text>
            <b>Autor:</b> <br /> {props.autor}
          </Card.Text>
          <Card.Text>
            <b>Gênero:</b> <br /> {props.genero}
          </Card.Text>
          <Card.Text>
            <b>Dono:</b> <br /> {props.usuario}
          </Card.Text>
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
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardLivro;

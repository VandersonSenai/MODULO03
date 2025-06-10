import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDeleteLivro } from "../hooks/useApi"

const CardLivro = (props) => {
  const { deletarProduto } = useDeleteLivro()
   const handleDelete = async () =>{
    const deletado = await deletarProduto(props.id)
    console.log()
    alert(`Livro ${deletado.titulo} deletado com sucesso`)
    window.location.reload()
  }
  
  return (
    <div>
      <Card style={{ width: "15rem", height: "30rem" }}>

        <Card.Body>
          <Card.Title>{props.titulo}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Autor:{props.autor}
          </Card.Subtitle>
          <Card.Text>
            <b>Gênero:</b> <br></br>
            {props.genero}
          </Card.Text>
          <Card.Text>
            <b>Status:</b>
            <br></br>
            {props.status}
          </Card.Text>
          <Card.Text>
            <b>Usuario:</b>
            <br></br>
            {props.usuario_id}
          </Card.Text>
          <Card.Link href={`/editarlivro/${props.id}`}>
            <Button variant="warning">Editar</Button>
          </Card.Link>
          <Card.Link>
            <Button variant="danger" 
                    type="button" 
                    onClick={handleDelete}>
              Excluir
            </Button>
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardLivro;

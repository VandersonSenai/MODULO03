import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';

const CardCurso = (props) => {
  return (
          <Card bg="info" border="info" style={{ width: "19rem", padding:"0.1rem", marginBottom:"20px", marginTop:"20px", borderRadius:"10px" }} className="text-center">
        <Card.Img
          variant="top"
          src={
            props.imagemUrl != "null"
              ? props.imagemUrl
              : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
          }
          height="200px"
        />
        <Card.Body >
          <Card.Title style={{ color: "var(--clr-text)" }}>{props.nome}</Card.Title>
          <Card.Text>
            <b>Modalidade : </b>            
            {props.modalidade}
          </Card.Text>
          <Card.Text>
            <b>Cidade : </b> {props.cidade}
          </Card.Text>
          <Card.Subtitle style={{ color: "var(--clr-text-secondary)" }} className="mb-4 ">
            <b>Preço: </b>{props.valor}
          </Card.Subtitle>
          <Card.Link href={`/detalhecurso/${props.id}`}>
            <Button variant="outline-info">Saiba mais...</Button>
          </Card.Link>
        </Card.Body>
      </Card>
  )
}

export default CardCurso
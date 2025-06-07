import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

const CardLivro = (props) => {
  return (
          <Card bg="info" 
          border="light" 
          style={{  width: "21rem", 
                    padding:"0.05rem", 
                    marginBottom:"20px", 
                    marginTop:"20px", 
                    borderRadius:"10px 10px 10px 10px",
                    boxShadow: "0.1rem 0.1rem 0.8rem 0.01rem rgb(4, 10, 37)"
                  }} 
                    className="text-center"> 
        <Card.Body 
           style={{  
            backgroundColor: "var(--clr-base-dark)",
            borderRadius:"0px 0px 10px 10px",
              }}
        className="d-flex flex-column justify-content-between"
        >
          <Card.Title style={{ color: "var(--clr-text)"  }}>{props.livro_titulo}</Card.Title>
          <Card.Text className="d-flex text-start align-items-center">
            <b className="px-1">Autor : </b>
            {props.livro_autor}
          </Card.Text>
          <Card.Text className="text-start">
            <b className="px-1">Genero : </b> 
            {props.livro_genero}
          </Card.Text>          <Card.Text className="text-start">
            <b className="px-1">Status : </b> 
            {props.livro_status}
          </Card.Text>
  
          <Card.Link  as={NavLink} to={`/editalivro/${props.livro_id}`}>
            <Button className="" 
                    size="lg"
                    variant="outline-info">
                      Editar
                      </Button>
          </Card.Link>
        </Card.Body>
      </Card>

    
  )
}

export default CardLivro
// importando components do bootstrap
import Button from "react-bootstrap/Button";
//Importação do navigate pra transitar entre páginas
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap"

const PaginaErro = () => {
  // Criando o navigate
  const navigate = useNavigate();
  return (

  <Container 
    style={{ height: "100vh" }}
    className="text-center justify-content-center
              align-content-center ">
                
    <h2> Essa página não existe</h2>
    <Button onClick={() => navigate("/home")}>Voltar para home</Button>

  </Container>



  );
};

export default PaginaErro;

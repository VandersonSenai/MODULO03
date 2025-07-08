// importando components do bootstrap
import Container from "react-bootstrap/Container";


// Importando o componente de formulário
import FormularioUsuario from "../components/FormularioUsuario";

const CadastraUsuario = () => {

  return (
    <Container style={{ height: "93vh" }}
              className="text-center justify-content-center
              align-content-center "
              >
        <h3 className="mt-1">Cadastrar Usuário</h3>
        <FormularioUsuario page="cadastro" />
    </Container>
  );
};

export default CadastraUsuario;

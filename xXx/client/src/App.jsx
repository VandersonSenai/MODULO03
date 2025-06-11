// Importando o outlet do Router dom
import { Outlet } from "react-router-dom";

// Importação do React Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Importação do componentes do bootstrap
import Container from "react-bootstrap/Container";

// Importando o componente de barra de navegação
import BarraNavegacao from "./components/BarraNavegacao.jsx";

function App() {
  return (
    <>
      <div className="App d-flex flex-column min-vh-100" >
        <BarraNavegacao />
        <Container className="flex-grow-1 p-0">
          <Outlet />
        </Container>
      </div>
    </>
  );
}

export default App;

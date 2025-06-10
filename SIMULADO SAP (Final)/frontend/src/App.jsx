// Importando o outlet do Router dom
import { Outlet } from "react-router-dom";

// Importação do React Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Importação do componentes do bootstrap
import Container from "react-bootstrap/Container";

import BarraNavegacao from "./components/BarraNavegacao.jsx";
import './App.css'

function App() {
  

  return (
    <>
                <BarraNavegacao />
          <Container>
            <Outlet />
          </Container>
    </>
  )
}

export default App

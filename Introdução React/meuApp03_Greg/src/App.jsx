import "./App.css";
import { Outlet } from "react-router-dom";
// import NavBar from "./components/NavBar";
import { NewNavBar } from "./components/NewNavBar";

//Importação do React-Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
// import Container from "react-bootstrap/esm/Container";

function App() {
  return(
    <>
      <NewNavBar />
      
    <Container  >
{/* xpand={'sm' | 'md' | 'lg' | 'xl' | 'xxl'} */}
{/* xpand='xxl'} */}
      {/* <NavBar /> */}
      <Outlet />

    </Container>
   
    </>
  )
}

export default App;

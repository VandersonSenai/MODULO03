
import './App.css'
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";

function App() {

  return (
    <>
      <NavBar />
      
          <Container  >
{/* xpand={'sm' | 'md' | 'lg' | 'xl' | 'xxl'} */}
{/* xpand='xxl'} */}
      {/* <NavBar /> */}
            <Outlet />

          </Container>
    </>
  )
}

export default App

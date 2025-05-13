
import './App.css'
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer";


function App() {

  return (
    <>
      <NavBar />
      
        <Container  >
{/* xpand={'sm' | 'md' | 'lg' | 'xl' | 'xxl'} */}
{/* xpand='xxl'} */}
      {/* <NavBar /> */}
            <Outlet />

            <Footer />
        </Container>


    </>
  )
}

export default App

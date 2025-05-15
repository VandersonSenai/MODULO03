
import './App.css'
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer";
import { AuthProvider } from "./contexts/UserContext";

function App() {

  return (
    <>
      {/* xpand={'sm' | 'md' | 'lg' | 'xl' | 'xxl'} */}
      {/* xpand='xxl'} */}

      <AuthProvider>
      <div className="App">
      <NavBar  />
        <Container className="container-fluid py-2">
          <Outlet />
        </Container>
          <Footer />

      </div>
      </AuthProvider>
    </>
  )
}

export default App

import React from "react";

import { Outlet } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container"

import BarraNavegacao from "./component/BarraNavegacao.jsx"

import { AuthProvider } from "./contexts/UserContext.jsx";

function App() {
  return (
    <>
      <AuthProvider>
        <div className="App">
          <BarraNavegacao/>
            <Container>
                <Outlet />
            </Container>
        </div>
      </AuthProvider>
    </>
  )
}

export default App

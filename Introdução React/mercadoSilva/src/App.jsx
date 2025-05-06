import React from "react";

import { Outlet } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container"

import BarraNavegacao from "./component/BarraNavegacao.jsx"

function App() {
  return (
    <>
      <div className="App">
        <BarraNavegacao/>

        <Container>
             <Outlet />
        </Container>

      </div>
    </>
  )
}

export default App

// import { useState } from 'react'
import './App.css'

import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
function App() {
  

  return (
    <>
       <div className="App ">

        <Container className="container-fluid py-0 px-0 ">
            <NavBar  />

            <Outlet />

            
        </Container>
          

      </div>
    </>
  )
}

export default App

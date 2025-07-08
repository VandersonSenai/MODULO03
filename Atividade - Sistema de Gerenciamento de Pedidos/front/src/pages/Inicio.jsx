import React from 'react'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import CardPedido from "../components/CardPedido"
const Inicio = () => {
  return (
    <Container className="text-center 
              justify-content-center 
              align-content-center"
              style={{ height: "89vh" }} 
    >
    <h3 className="mt-3" >DashBoard de Pedidos</h3>
    {/* <CardPedido/> */}

    </Container>
    
  )
}

export default Inicio
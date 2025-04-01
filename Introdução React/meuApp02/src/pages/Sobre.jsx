import React from 'react'
import { Link } from "react-router-dom"

const Sobre = () => {
  
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <h1>Sobre2</h1>
      <hr />
      <br />
      <Link to="/informacao/1">Infocard 1</Link>
      <Link to="/informacao/2">Infocard 2</Link>
      <Link to="/informacao/3">Infocard 3</Link>
    </div>
  );
};

export default Sobre
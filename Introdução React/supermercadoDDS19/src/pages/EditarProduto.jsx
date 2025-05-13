import React from "react";

import { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";

const EditarProduto = () => {
  const { usuarioNome } = useContext(AuthContext);

  if (usuarioNome === "Visitante") return <Navigate to="/login" />;
  
  return <div>EditarProduto</div>;
};

export default EditarProduto;

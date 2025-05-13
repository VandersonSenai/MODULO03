import React from "react";

import { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";

const CadastrarProduto = () => {
  const { usuarioNome } = useContext(AuthContext);

  if (usuarioNome === "Visitante") return <Navigate to="/login" />;
  return <div>CadastrarProduto</div>;
};

export default CadastrarProduto;

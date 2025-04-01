import React from "react";
import { Navigate } from "react-router-dom";

const Homedois = () => {
  const isAuth = true;

  return (
    <div>
      {
      isAuth
      ? <Navigate to="/" /> 
      : <Navigate to="/login" />
      }
      Home nao Autenticado faça login
    </div>
  );
};

export default Homedois;

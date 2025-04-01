import React from "react";
import { Navigate } from "react-router-dom";

const Homedois = () => {
  const isAuth = false;

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

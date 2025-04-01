import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
  return (
    <div>
      <h1>Erro!!! Pagina nao encontrada</h1>
      <br />
      <Link to="/">Retornar</Link>
    </div>
  )
}

export default Errorpage
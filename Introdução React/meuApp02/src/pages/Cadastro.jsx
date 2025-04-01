import React from 'react'
import Forms from '../components/forms'
import { NewForms } from '../components/NewForms';

const Cadastro = () => {
  return (
    <div>
      <h1>Cadastro</h1>
      {/* <Forms/> */}
      {/* <Forms nome="Vanderson" email="vandersondasilva@gmail.com" senha="226677"/> */}

      <NewForms 
      nome="Vanderson" email="vandersondasilva@gmail.com" senha="226677"
      />
      
    </div>
  );
};

export default Cadastro
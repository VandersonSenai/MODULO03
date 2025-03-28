import React, { useState } from 'react';
import  Styles from '../pages/css/Cadastro.module.css';


const Cadastro = () => {
  return (
    
    <div className={Styles.div}>

      <div >
        <label for="nome" className={Styles.label}>Nome : </label>
        <input type="text" name="nome" id="nome" required placeholder="Vanderson da Silva"></input>
      </div>

      <div>
        <label for="mail">e-mail : </label>
        <input type="mail" name="mail" id="email" required placeholder="teste@mail.com"></input>
      </div>
      <div>
        <label for="mail">Senha : </label>
        <input type="password" id="pass" name="password" minlength="8" required />
      </div>

      <div>
        <label for="mail">Confirmação de Senha : </label>
        <input type="password" id="pass" name="password" minlength="8" required />
      </div>


    </div>

  )
}

export default Cadastro
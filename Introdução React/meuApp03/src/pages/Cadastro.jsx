import React, { useState } from 'react';
import  Styles from '../pages/css/Cadastro.module.css';


const Cadastro = () => {
  return (
    
    <div className={Styles.div}>

      <div className={Styles.filed}>
        <label for="nome" >Nome : </label>
        <input type="text" name="nome" id="nome" required placeholder="Vanderson da Silva"></input>
      </div>

      <div>
        <label for="email"className={Styles.label}>e-mail : </label>
        <input type="mail" name="mail" id="email" required placeholder="teste@mail.com"></input>
      </div>
      <div>
        <label for="password">Senha : </label>
        <input type="password" id="password" name="password" minlength="8" required />
      </div>

      <div>
        <label for="passwordConf">Confirmação de Senha : </label>
        <input type="password" id="passwordConf" name="passwordConf" minlength="8" required />
      </div>
      

    </div>

  )
}

export default Cadastro
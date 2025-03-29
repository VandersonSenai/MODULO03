import React, { useState } from 'react'
import Styles from '../pages/css/Cadastro.module.css'

const Cadastro = () => {
  return (
    <div className={Styles.loginBox}>
      <div>
        <label for="nome">Nome :</label>
        <input
          type="text"
          name="nome"
          id="nome"
          required
          placeholder="Vanderson da Silva"
        ></input>
      </div>

      <div>
        <label for="email">e-mail :</label>
        <input
          type="mail"
          name="mail"
          id="email"
          required
          placeholder="seuemail@dominio.com"
        ></input>
      </div>
      <div>
        <label for="password">Senha :</label>
        <input
          type="password"
          id="password"
          name="password"
          minlength="8"
          required
        />
      </div>

      <div>
        <label for="passwordConf">Confirmação de Senha :</label>
        <input
          id="passwordConf"
          type="password"
          inputmode="text"
          minlength="8"
          maxlength="16"
          size="8"
          required
        />
      </div>
      <div>
        <button type="submit">Cadastrar</button>
      </div>
    </div>
  )
}

export default Cadastro

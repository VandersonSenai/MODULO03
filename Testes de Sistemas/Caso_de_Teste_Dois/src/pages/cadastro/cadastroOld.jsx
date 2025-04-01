// import React from 'react'
import Styles from './cadastro.module.css'

export const Cadastro = () => {
  return (
    // <div>cadastro</div>
    <div className={Styles.formulario}>
        <div className={Styles.formularioItems}>
            <div>
              <label htmlFor="nome">Nome :</label>
              <input
                type="text"
                name="nome"
                id="nome"
                required
                placeholder="Vanderson da Silva"
              ></input>
            </div>
            <div>
              <label htmlFor="email">e-mail :</label>
              <input
                type="mail"
                name="mail"
                id="email"
                required
                placeholder="seuemail@dominio.com"
              ></input>
            </div>
            <div>
              <label htmlFor="password">Senha :</label>
              <input
                type="password"
                id="password"
                name="password"
                min-length="8"
                required
              />
            </div>
            <div>
              <label htmlFor="passwordConf">Confirmação de Senha :</label>
              <input
                id="passwordConf"
                type="password"
                // inputmode="text"
                min-length="8"
                max-length="16"
                size="8"
                required
              />
            </div>
            <div>
            <button type="submit">Salvar</button>
              <a href="/">
              <button>Retornar</button>
              </a>
            </div>      
              
        </div>
    </div>
  )
}

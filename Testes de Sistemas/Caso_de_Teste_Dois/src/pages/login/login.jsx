// import React from 'react'
// import './index.css'
import Styles from './login.module.css'

export const Login = () => {
  return (
    // <div>login</div>
<div className={Styles.formulario}>
        <div className={Styles.formularioItems}>
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
              <button type="submit">Login</button>
              <a href="/">
              <button>Retornar</button>
              </a>
            </div>      
        </div>
    </div>
  )
}

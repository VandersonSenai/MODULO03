import { useState } from 'react'
import { Outlet } from "react-router-dom";
// import './App.css'
import './index.css'
// import { Styles } from './index.css'

export function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className="divcontainer">
        <div className="container">
          <p>Deseja realizar um <a href="/login">login</a> ou <a href="/cadastro">cadastrar</a> uma conta?</p>
        </div>
      </div>  */}
    <div className="divcontainer2">
        <div className="container2">
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
              <a href="/">Retornar</a>
        </div>
    </div>
      <Outlet style={{}}/> 
      {/* Responsável pela troca das rotas */}

    </>
  )
}



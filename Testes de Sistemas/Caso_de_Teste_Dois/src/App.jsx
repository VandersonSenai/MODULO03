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
    <Outlet style={{}}/> 
    {/* Responsável pela troca das rotas */}

    </>
  )
}



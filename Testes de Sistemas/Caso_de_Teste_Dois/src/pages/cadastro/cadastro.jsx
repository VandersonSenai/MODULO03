// import React from 'react'
import React, { useState } from 'react'
import Styles from './cadastro.module.css'
import { Link } from "react-router-dom"

export const Cadastro = () => {
  const [nome, setNome] = useState()
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
  const [senhaConfirm, setSenhaConfirm] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    console.log("Nome : ", nome)        
    console.log("email : ", email)        
    console.log("senha : ", senha)        
    console.log("senha Confirm : ", senhaConfirm)  
}

  return (
    // <div>cadastro</div>
    <div className={Styles.formulario}>

        <form id="mform" htmlFor="mform"  className={Styles.formularioItems} onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome: </label>
        <input type="text" name="nome" autoComplete="username" id="nome" placeholder='Digite seu nome...'
                onChange={(e)=>{
                    setNome(e.target.value);
                }}/>
        <label htmlFor="email">e-mail :</label>
        <input type="email" name="email" id="" autoComplete="new-email" placeholder='Digite seu email...'
                onChange={(e)=>{
                    setEmail(e.target.value);
                }}/>
        <label htmlFor="senha">Senha :</label>
        <input type="password" name="senha" autoComplete="new-password" id="senha" maxLength={16} minLength={8}
                placeholder='Digite sua senha...'               
                onChange={(e)=>{
                    setSenha(e.target.value);
                }}/>
        <label htmlFor="senhaconf">Confirmação de Senha :</label>
        <input type="password" name="senha" autoComplete="new-password" id="senhaconf" maxLength={16} minLength={8}
                placeholder='Digite sua senha...'               
                onChange={(e)=>{
                    setSenhaConfirm(e.target.value);
                }}/>
            
              <a href="#" onClick={
                () => document.getElementById("mform").submit()} className="btn">
                Enviar
                </a>
              <a href="/">Retornar</a>
         </form>

    </div>
  )
}

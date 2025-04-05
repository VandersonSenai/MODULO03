//import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom"
import Styles from './cadastro.module.css'
import { useState } from 'react'
import {Login} from "../login/login.jsx";

export const Cadastro = (props) => {
  // const [nome, setNome]   = useState(props ? props.nome : "")
  const [email, setEmail] = useState(props ? props.email : "")
  const [senha, setSenha] = useState(props ? props.senha : "")
  const navigate = useNavigate();

  const { 
    watch,
    register, 
    handleSubmit,
    formState: { errors },
     } = useForm();

const onSubmit = (data) => {
    console.log("DADOS : ", data)
    // setEmail(data.email);
    // setSenha(data.senha);
    
    //     <Login 
    //     email={email} senha={senha}
    //     />
};
      

const onError = (errors) => {
    console.log("ERROS : ", errors)
};  
const VoltarHome = () => {
  navigate("/")
}
// const irParaLogin = () => {
//   navigate("/login")
// }

  return (
<div className={Styles.divformulario}>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className={Styles.formularioItems}
      >
        <label>
          <span>Nome :{errors.nome && <p className={Styles.error}>{errors.nome.message}</p>}
          </span>
          <input
          placeholder="Nome"
            {...register("nome", {
              required: "O nome é obrigatório",
              mimLength: {
                value: 4,
                message: "O nome deve ter menos de 20 caracteres",
              },
              maxLength: {
                value: 30,
                message: "O nome deve ter menos de 20 caracteres",
              },
              pattern: {
                value: /^[A-Za-z\s]+$/i,
                // value: /^[A-Za-z]+$/i,
                message: "O nome só pode conter letras",
              },
            })}

          />
        </label>
        <label>
          <span>Email :{errors.email && (
            <p className={Styles.error}>{errors.email.message}</p>
          )}</span>
          <input
            placeholder="Email" autoComplete="new-password"
            {...register("email", {
              required: "O e-mail é obrigatório",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "E-mail inválido",
              },
              validate: (value) => value.includes("@") || "Email inválido",
            })}
            onChange={(formData)=>{
              setEmail(formData.target.value);
          }} 
          />
        </label>
        <label>
          <span>Senha:{errors.senha && (
            <p className={Styles.error}>{errors.senha.message}</p>
          )}
          </span>
          <input id="senha" name="senha" placeholder="Senha"
            type="password" autoComplete="new-password"
            {...register("senha", {
              required: "A senha é obrigatória",
              minLength: {
                value: 8,
                message: "Deve ter pelo menos 8 caracteres",
              },
              maxLength: {
                value: 20,
                message: "Deve ter menos de 20 caracteres",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Deve conter uma letra maiúscula, uma minúscula, um número e um caracter especial",
              },
            })}
          />

        </label>
        <label>
          <span>Confirme a senha :
          {errors.confirmarSenha && (
            <p className={Styles.error}>{errors.confirmarSenha.message}</p>
          )}</span>
          <input
             id="confirmarSenha" name="confirmarSenha" placeholder="Confirmar Senha"
            type="password" autoComplete="new-password"
            {...register("confirmarSenha", {
              required: "A confirmação de senha é obrigatória",
              validate: (value) =>
                value === watch('senha') || "As senhas não coincidem",
            })}
            />
        </label>

          <button type="submit" className={Styles.button_link}>Cadastrar</button>
          <button className={Styles.button_link} onClick={VoltarHome}>Retornar</button>

      </form>
    </div>
  )
}


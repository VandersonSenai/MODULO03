// import React from 'react'
// import './index.css'
import { useForm } from 'react-hook-form';
import Styles from './login.module.css'
import { useState } from 'react'

export const Login = (props) => {
   const [email, setEmail] = useState(props ? props.email : "")
   const [senha, setSenha] = useState(props ? props.senha : "")
    const { 
      watch,
      register, 
      handleSubmit,
      formState: { errors },
       } = useForm();

    const onSubmit = (data) => {
        console.log("DADOS : ", data)
    };
    const onError = (errors) => {
        console.log("ERROS : ", errors)
    };  

  return (
    // <div>login</div>
<div className={Styles.divformulario}>
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className={Styles.formularioItems}
        >
        <label>
          <span>Email :{errors.email && (
            <p className={Styles.error}>{errors.email.message}</p>
          )}</span>
          <input
            placeholder="Email" autoComplete="new-password"
            {...register("email", {
              required: "O email é obrigatório",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Email inválido",
              },
              validate: (value) => value.includes("@") || "Email inválido",
            })}
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

          <div className={Styles.button_link}>
            <a type="submit" >Salvar
            </a>
            {/* <a type="submit" href="/login">Salvar
            </a> */}
            <a href="/">Retornar
            </a>
          </div>
          <button type="submit" className={Styles.button}>Enviar</button>

        </form>

 
    </div>
  )
}
// import React from 'react'
// import './index.css'
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom"
import Styles from './login.module.css'

export const Login = (props) => {
  const navigate = useNavigate();
  const [emailBanco, setEmailBanco] = useState('plmedeiros@findes.org.br');
  const [senhaBanco, setSenhaBanco] = useState('123456789');
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  // setEmail("pertraplmedeiros@findes.org.br");
  // setSenha("123456");
  
  console.log("emailBanco : ", {emailBanco})
  console.log("senhaBanco : ", {senhaBanco})
  console.log("emailForm : ", {email})
  console.log("senhaForm : ", {senha})
  
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
    const VoltarHome = () => {
      navigate("/")
    }

  return (
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
              validate: (value) =>
                value === emailBanco || "Email invalido",
                // value === watch(emailBanco) || "Email invalido",
              // pattern: {
              //   value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              //   message: "Email inválido",
              // },
              // validate: (value) => value.includes("@") || "Email inválido",
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
              validate: (value) =>
              value === senhaBanco || "Senha invalida",
              // value === watch(senhaBanco) || "Senha invalida",
              minLength: {
                value: 8,
                message: "Deve ter pelo menos 8 caracteres",
              },
              maxLength: {
                value: 10,
                message: "Deve ter menos de 20 caracteres",
              },
              // pattern: {
              //   value:
              //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              //   message:
              //     "Deve conter uma letra maiúscula, uma minúscula, um número e um caracter especial",
              // },
            })}
            onChange={(formData)=>{
              setSenha(formData.target.value);
          }} 
          />

        </label>

          <button type="submit" className={Styles.button_link}>Cadastrar</button>
          <button className={Styles.button_link} onClick={VoltarHome}>Retornar</button>
        </form>
        <label htmlFor="">Login efetuado com sucesso</label>
 
    </div>
  )
}
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom"
import Styles from './cadastronovo.module.css'

export const Cadastronovo = (props) => {
  const navigate = useNavigate();
  // const [nome, setNome]   = useState(props ? props.nome : "")
  // const [email, setEmail] = useState(props ? props.email : "")
  // const [senha, setSenha] = useState(props ? props.senha : "")

  const { 
    watch,
    register, 
    handleSubmit,
    formState: { errors },
     } = useForm();
// const { handleSubmit, register, formState: { errors } } = useForm();
// const onSubmit = values => console.log(values);
// const onSubmit = values => console.log(values);
const onSubmit = (data) => {
    console.log("DADOS : ", data)

};
const onError = (errors) => {
    console.log("ERROS : ", errors)
};  
const VoltarHome = () => {
  navigate("/")
}


// const teste = watch("confirmarSenha");

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
              maxLength: {
                value: 2,
                message: "O nome deve ter menos de 20 caracteres",
              },
              pattern: {
                value: /^[A-Za-z\s]+$/i,
                // value: /^[A-Za-z]+$/i,
                message: "O nome só pode conter letras",
              },
            })}
             
          />
          {/* {errors.nome && <p className={Styles.error}>{errors.nome.message}</p>} */}
        </label>
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
          {/* {errors.email && (
            <p className={Styles.error}>{errors.email.message}</p>
          )} */}
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
                  // "Deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caracter especial",
                  "Deve conter uma letra maiúscula, uma minúscula, um número e um caracter especial",
              },
            })}
          />
          {/* {errors.senha && (
            <p className={Styles.error}>{errors.senha.message}</p>
          )} */}
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
       
        {/* <label>
          <span>Concordo com os termos:</span>
          <input type="checkbox" {...register("checkbox")} />
        </label> */}
        {/* <button type="submit" className={Styles.botao}>
          Enviar
        </button> */}
{/*
          <div className={Styles.button_link}>
            <a href="#" type="submit" onSubmit={handleSubmit(onSubmit, onError)} >Salvar
            </a>
             <a type="submit" href="/login">Salvar
            </a> 
            <a href="/">Retornar
            </a>
          </div>
          */}

          <button type="submit" className={Styles.button_link}>Cadastrar</button>
          <button className={Styles.button_link} onClick={VoltarHome}>Retornar</button>

      </form>
    </div>
  )
}


// import React from 'react'
// import './index.css'
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom"
import Styles from './login.module.css'
 
export const Login = (props) => {
  var resultado = document.getElementById('resultado');
  const [isModalOpen, setIsModalOpen] = useState(false);
   
  const navigate = useNavigate();
  const [emailBanco, setEmailBanco] = useState('teste@teste.com.br');
  const [senhaBanco, setSenhaBanco] = useState('asd23AA3$as');
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  function openModal(){
    setIsModalOpen(true);
  }

  function closeModal(){
    setIsModalOpen(false);
  }
  // asd23AA3$as
  console.log("emailBanco : ", emailBanco)
  console.log("senhaBanco : ", senhaBanco)
  console.log("emailForm : ", email)
  console.log("senhaForm : ", senha)
  
  console.log("toggleStatus: ", resultado)


  function toggleMessage(data){
    // if ((emailBanco == email) & (senhaBanco == senha)){
    //   toggleStatus.classList.toggle("sucesso");
    // }
    // alert("Login com sucesso!");
    
    if ((emailBanco == email) && (senhaBanco == senha)) {
      // resultado.innerHTML = 'Digite um valor válido';
      // document.write('Digite um valor válido </br>');
      resultado.innerHTML = 'Login com sucesso!';
      resultado.classList.toggle('sucessoLogin')
      // return;     
    } else  {
      resultado.classList.toggle('errorLogin')
      resultado.innerHTML = '';
    }
    
  };

    const { 
      watch,
      register, 
      handleSubmit,
      formState: { errors },
       } = useForm();

    const onSubmit = (data) => {
        console.log("DADOS : ", data)
        toggleMessage({data});
        openModal();
        
    };
    const onError = (errors) => {
        console.log("ERROS : ", errors);
        toggleMessage();
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
            <span className={Styles.error}>{errors.email.message}</span>
          )}</span>
          <input
            placeholder="Email" autoComplete="new-password"
            {...register("email", {
              required: "O email é obrigatório",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Email inválido",
              },
              validate: { 
                naoCadastrado: (value) =>
                  value === emailBanco || "E-mail não cadastrado",
                // naoContemArroba: (value) => 
                // value.includes("@") || "Email inválido",
              }
            })}
            onChange={(formData)=>{
              setEmail(formData.target.value);
          }} 
          />
        </label>
        <label>
          {/* <span>Senha:{errors.senha && (
            <p className={Styles.error}>{errors.senha.message}</p>
          )} */}
          <span>Senha:{errors.senha && (
            <span className={Styles.error}>{errors.senha.message}</span>
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
                value: 16,
                message: "Deve ter menos de 20 caracteres",
              },
            })}
            onChange={(formData)=>{
              setSenha(formData.target.value);
          }} 
          />

        </label>
        <div className={Styles.botoesWrapper}>
          <button type="submit" className={Styles.button}>
            Login
            </button>
          <button className={Styles.button} onClick={VoltarHome}>
            Retornar
            </button>
        </div>

        <p className={Styles.resultado} id="resultado"></p>
        
        </form>

        {/* Testes para uma futuro modal */}
        {/* {isModalOpen && (
          <div className={Styles.modal}>
            <div className={Styles.modalWindows}>
              <span>Login com sucesso!</span>

                <button className={Styles.button} 
                  onClick={VoltarHome}>Retornar
                </button>

            </div>
          </div>
        )} */}
    </div>
  )
}

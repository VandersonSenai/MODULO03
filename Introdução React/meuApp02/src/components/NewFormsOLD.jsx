// https://stackoverflow.com/questions/50644976/react-button-onclick-redirect-page
// onClick={event =>  window.location.href='/your-href'}

// First, import it:
// import { useHistory } from 'react-router-dom';
// Then, in function or class:
// const history = useHistory();
// Finally, you put it in the onClick function:
{/* <Button onClick={()=> history.push("/mypage")}>Click me!</Button> */}


import styles from './Forms.module.css';
import React from 'react'
import { useForm } from 'react-hook-form';

export const NewForms = () => {
    const { 
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

  return (
        <div >
            <h3>NewForms</h3>     
            <hr />
            <br /> 
            {/* função handleSubmit com preventDefault para evitar que sera feito um refresh na pagina */}
            <form className={styles.formulario} 
            onSubmit={handleSubmit(onSubmit, onError)}>
                <label htmlFor="nome">Nome: </label>
                <input type="text" id="nome"
                placeholder='Digite seu nome...'
                {...register("nome",
                    {required: "Nome é obrigatório", 
                    maxLength:{
                        value: 10,
                        message: "Tamanho máximo de 10 caracteres",
                    },
                    minLength:{
                        value: 5,
                        message: "Tamanho mínimo de 5 caracteres",
                    },
                    pattern:{
                        value: /^[A-Za-z\s]+$/i,
                        // value: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/,
                        message: "Apenas letras",
                    },
                })}/>
                {errors.nome && <p className={styles.error}>{errors.mail.message}</p>}
                {/* o evento onChance é chamado sempre que se altera o valor dentro do input */}
                <br />
                {/* label envolvendo input */}
                <label >
                    <span>email:</span>
                    <input type="email" id="email" 
                    placeholder='Digite seu email...'
                    {...register("email",{
                        required: "O email é obrigatório.",
                        pattern:{
                            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                            message: "Email invalido"
                        },
                        validate: (value) => value.includes("@") || "Email invalido",
                     })}
                    />
                    {errors.email && <p className={styles.error}>{errors.nome.message}</p>}
                </label>
                <br />
                <label >
                    <span>Senha: </span>
                    <input type="password" id="senha" 
                    maxLength={16} minLength={5}
                    placeholder='Digite sua senha...'               
                    {...register("senha", {
                        required: "A senha é obrigatória",
                        minLength: {
                          value: 8,
                          message: "A senha deve ter pelo menos 8 caracteres",
                        },
                        maxLength: {
                          value: 20,
                          message: "A senha deve ter menos de 20 caracteres",
                        },
                        pattern: {
                          value:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                          message:
                            "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial",
                        },
                      })} />
                </label>
    
                {/* input e buttom devem ficar dentro do form para que o browser engenda o que fazer com os campos do form quando for clicado*/}

                <input type="submit" value="Enviar" style={{backgroundColor:"blue", color:"white"}}/>
                <button type="submit">teste</button>
            </form>
        </div>
  )
}

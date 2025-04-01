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
                {...register("nome")}/>
                {/* o evento onChance é chamado sempre que se altera o valor dentro do input */}
                <br />
                {/* label envolvendo input */}
                <label >
                    <span>email:</span>
                    <input type="email" id="email" 
                    placeholder='Digite seu email...'
                    {...register("email")}
                    />
                </label>
                <br />
                <label >
                    <span>Senha: </span>
                    <input type="password" id="senha" 
                    maxLength={16} minLength={5}
                    placeholder='Digite sua senha...'               
                    {...register("senha")} />
                </label>
    
                {/* input e buttom devem ficar dentro do form para que o browser engenda o que fazer com os campos do form quando for clicado*/}

                <input type="submit" value="Enviar" style={{backgroundColor:"blue", color:"white"}}/>
                <button type="submit">teste</button>
            </form>
        </div>
  )
}

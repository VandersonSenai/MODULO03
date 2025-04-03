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
<div>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className={styles.formulario}
      >
        <label>
          <span>Nome:</span>
          <input
            {...register("nome", {
              required: "O nome é obrigatório",
              maxLength: {
                value: 20,
                message: "O nome deve ter menos de 20 caracteres",
              },
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "O nome só pode conter letras",
              },
            })}
            placeholder="Nome"
          />
          {errors.nome && <p className={styles.error}>{errors.nome.message}</p>}
        </label>

        <label>
          <span>Email:</span>
          <input
            {...register("email", {
              required: "O email é obrigatório",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Email inválido",
              },
              validate: (value) => value.includes("@") || "Email inválido",
            })}
            placeholder="Email"
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            placeholder="Senha"
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
            })}
          />
          {errors.senha && (
            <p className={styles.error}>{errors.senha.message}</p>
          )}
        </label>
        <label>
          <span>Confirmar Senha:</span>
          <input
            type="password"
            {...register("confirmarSenha", {
              required: "A confirmação de senha é obrigatória",
              validate: (value) =>
                value === watch("senha") || "As senhas não coincidem",
            })}
            placeholder="Confirmar Senha"
          />
          {errors.confirmarSenha && (
            <p className={styles.error}>{errors.confirmarSenha.message}</p>
          )}
        </label>
        {/* <label>
          <span>Descrição:</span>
          <textarea {...register("descricao")} placeholder="Descrição" />
        </label>
        <label>
          <span>Tipo:</span>
          <select {...register("tipo")} defaultValue="tipo1">
            <option value="tipo1">Tipo 1</option>
            <option value="tipo2">Tipo 2</option>
          </select>
        </label>
        <label>
          <span>Data:</span>
          <input type="date" {...register("data")} />
        </label>
        <label>
          <span>Hora:</span>
          <input type="time" {...register("hora")} />
        </label>
        <label>
          <span>Arquivo:</span>
          <input type="file" {...register("arquivo")} />
        </label>
        <label>
          <span>Cor:</span>
          <input type="color" {...register("cor")} />
        </label>
        <label>
          <span>URL:</span>
          <input type="url" {...register("url")} placeholder="URL" />
        </label>
        <label>
          <span>Telefone:</span>
          <input type="tel" {...register("telefone")} placeholder="Telefone" />
        </label>

        <label>
          <span>Range:</span>
          <input type="range" {...register("range")} min="0" max="100" />
        </label>
        <label>
          <span>Data e Hora:</span>
          <input type="datetime-local" {...register("dataHora")} />
        </label>
        <label>
          <span>Busca:</span>
          <input type="search" {...register("busca")} placeholder="Busca" />
        </label>
        <label>
          <span>Concordo com os termos:</span>
          <input type="checkbox" {...register("checkbox")} />
        </label>
         */}
        <button type="submit" className={styles.botao}>
          Enviar
        </button>
      </form>
    </div>
  )
}

// import React, { useState } from 'react'
import { useState } from 'react'
import styles from './Forms.module.css';


const Forms = (props) => {

    const [nome, setNome]   = useState(props ? props.nome : "")
    const [email, setEmail] = useState(props ? props.email : "")
    const [senha, setSenha] = useState(props ? props.senha : "")

    const handleName = (e) => {
        // sempre que é chamado definimos um novo valor para a variavel que no caso recebe o nome
        // console.log(e.target.value)
        setNome(e.target.value)
    }
    // const [ varForm, setvarForm ] = useState() {
    //     nome,
    //     email,
    //     senha
    // }

        // aqui que devem ser feitas as verificações
    const handleSubmit = (e) => {
        e.preventDefault()
        
        console.log("Nome : ", nome)        
        console.log("email : ", email)        
        console.log("senha : ", senha)        
    }
  return (
    <div >
        <h3>Forms</h3>     
        <hr />
        <br /> 
        {/* função handleSubmit com preventDefault para evitar que sera feito um refresh na pagina */}
        <form className={styles.formulario} 
        onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome: </label>
            <input type="text" name="nome" id="nome"
            value={nome} placeholder='Digite seu nome...' onChange={handleName} />
            {/* o evento onChance é chamado sempre que se altera o valor dentro do input */}
            <br />
            {/* label envolvendo input */}
            <label >
                <span>email:</span>
                <input type="email" name="email" id="email" 
                value={email}
                placeholder='Digite seu email...'
                onChange={(e)=>{
                    setEmail(e.target.value);
                }} 
                // com a funcao de seta dentro do onChange
                // praticamente repetimos o que ja esta no topo do da pagina porem deste vez ele só vai atualizar o valor para visualizar no console.log quando for clicado no submit

                />
            </label>

            <br />
            <label >
                <span>Senha: </span>
                <input type="password" name="senha" id="senha" maxLength={16} minLength={5}
                value={senha}
                placeholder='Digite sua senha...'               
                onChange={(e)=>{
                    setSenha(e.target.value);
                }} />
            </label>

            {/* input e buttom devem ficar dentro do form para que o browser engenda o que fazer com os campos do form quando for clicado*/}
            <input type="submit" value="Enviar" style={{backgroundColor:"blue", color:"white"}}/>

            <button type="submit">teste</button>
        </form>
    </div>
  )
}

export default Forms
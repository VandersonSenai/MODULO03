import React from 'react'

// declara que ShowUserName ira receber propriedade/dados
const ShowUserName = (props) => {

// exibe o quais dados estão dentro de props
    console.log(props)

    return (
    <div>ShowUserName

        <h1>Dado 01 - é: {props.name}</h1>
        <h1>Dado 02 - é: {props.shirt}</h1>

        
    </div>
  )
}

export default ShowUserName
import React from 'react'

const Events = () => {

    const tesTe = (e) => {
        // e = propriedades do evendo que chamou a funcão.
        console.log(e)

        console.log("teste função externa")
    }

  return (
    <div>Events
        <button onClick={ () => {console.log("teste o 1º btn")}}>Clic AKI</button>
        <br />
        {/* nao precisa carregar a funcao teste() assim pq ela esta dento de uma variavel e nao desejamos que seja executada a nao ser que seja chamado o evento
        se dixamos ela com os parantezes ela roda no momento da carga do codigo */}
        <button onClick={tesTe}>Cli KA KI</button>
    </div>
  )
}

export default Events

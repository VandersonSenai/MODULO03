import React from 'react'

const Events = () => {

    const tesTe = (e) => {
        // Definindo [e] = para receber os eventos relacionados a esta função.
        console.log(e)

        console.log("teste função externa")
    }

  return (
    <div>Events
        <button onClick={ () => {console.log("teste o 1º btn")}}>Clic AKI</button>
        <br />
        {/* nao precisa carregar a função teste() assim pq ela esta dento de uma variável e nao desejamos que seja executada a nao ser que seja chamado o evento
        se deixamos ela com os parenteses ela roda no momento da carga do código */}
        <button onClick={tesTe}>Cli KA KI</button>
    </div>
  )
}

export default Events

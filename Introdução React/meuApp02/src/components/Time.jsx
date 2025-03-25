import React from 'react'

// Desestruturando as propriedades enviadas para o componente, facilita o uso do componente dentro da app
const Time = ({nome, estado, posicao, campeao}) => {
  return (
    <div>

        <h3>Nome do time: {nome}</h3>
        <h2>Fica no estado: {estado}</h2>
        <h2>Posição: {posicao}</h2>

        {/* verifica se campeao "if campeao == true/False"
        {campeao && <h3>Este time é muito Campeão</h3>}
        */}

        {/* verifica se campeao "if campeao == true/False" else */}
        {
        (campeao && <h3>Este time é muito Campeão</h3>)
        ||
        (<h3>Não é campeão</h3>)
        }

    </div>
  )
}

export default Time
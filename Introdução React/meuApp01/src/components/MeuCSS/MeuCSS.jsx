import React from 'react'
import './MeuCSS.css'

const MeuCSS = () => {
    return (
    <div>MeuCSS
        <h1>Meu Titulo do componente</h1>
        
        <p>Paragrafo 1</p>
        <p>Paragrafo 2</p>
        <p className="testeClasse">Paragrafo 3</p>
        <p style={ {color:"green", 
            backgroundColor:"yellow",
            fontSize:"70px"
            }}>Paragrafo 4</p>
    </div>
  )
}

export default MeuCSS
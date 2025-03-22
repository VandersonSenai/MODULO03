// Trabalhando com variáveis entre componentes 
import React from 'react'
import { useState } from 'react';

const Varia = () => {
    // variáveis padrão do javaScript
    let algo = 10;
    console.log("Valor inicial de algo: ", algo);
    
    // variáveis utilizando o hook useState
    // Para definir um valor precisa do método setNumber
    // set + nome da variável
    // Para ler o valor basta usar o nome padrão mesmo.

    const [number, setNumber] = useState();
    // variáveis utilizando o hook useState inicando com valor = 7
    const [number2, setNumber2] = useState(7);
    // variáveis do hook useState podem ser:
    // lista []
    // objetos{}
    console.log("Minha variável number: ", number)
    console.log("Minha variável number2: ", number2)
    return (
        <div>
            <p>Minha Variável</p>
            <button onClick={() => {
                algo = 20;
                console.log("Valor inicial de algo: ", algo);
            }}> 
            Varia</button>

            <hr />
            <p>
                Valor da variável [number] : {number2}
                </p>
                <hr />
                <button onClick={() => {setNumber2(number2+5)}
                }>+</button>
                <button onClick={() => {setNumber2(7)}
                }>Reset</button>
                <button onClick={() => {setNumber2(number2-5)}
                }>-</button>
            

                
            
        </div>
    )
}

export default Varia;
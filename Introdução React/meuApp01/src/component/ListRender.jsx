// Trabalhando com lista e .map

import React from 'react'
import { useState } from 'react';

export const ListRender = () => {
    // let listaNome = ["Vanderson", "Maria", "Pedro", "José"];

    const [number, setNumber] = useState(0);

    const [listaNome, setListaNome] = useState(["1", "2", "3", "4", "5"])

    const [users] = useState([
        {
            id:1,
            name:"Jesus",
            number:25,
        },
        {
            id:2,
            name:"Juca",
            number:22,
        },
        {
            id:10,
            name:"Neymar",
            number:35,
        }
    ]);
    return (
    <div>Lista com Index de Chave
        <ul>
        {/* Lista index de Chave */}
            {listaNome.map( (item, index) => (
                <li key={index}>{item}</li>
                ))}
            
            <hr />  
        </ul>
        <hr />

        {/* Lista com ID de Chave */}
        {users.map ( (usuario) => (
        <h2 key={usuario.id}>O nome é {usuario.name}, 
         e seu número é {usuario.number}</h2>
                ))}

        {/* Add item a uma lista */}
        <button onClick= {() => {
            setNumber(number + 1);
            // console.log([...listaNome]);
            setListaNome([...listaNome, number]);
        }}> ADD </button>

    </div>
   
  )
}

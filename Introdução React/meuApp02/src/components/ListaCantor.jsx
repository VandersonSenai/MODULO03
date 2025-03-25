import React from 'react'

// const ListaCantor = (props) => {
const ListaCantor = ({nome, estiloMusical, premiado}) => {
    
  return (
    <div>Lista de Cantores
        
        <h2>Nome: {nome}</h2>
        <h3>estiloMusical: {estiloMusical}</h3>
        {/* verifica se "if premiado == true/False" else */}
        {
        (premiado && <h2>Cantor Premiado</h2>)
        ||
        (<h2>Porqueira</h2>)
        }
        
        {/* <h2>Nome: {props.nome}</h2> 
        <h3>estiloMusical: {props.estiloMusical}</h3> 
        {
        // verifica se "if premiado == true/False" else 
        (props.premiado && <h2>Cantor Premiado</h2>)
        ||
        (<h2>Porqueira</h2>)
        } */}


    <hr />
    </div>
  )
}

export default ListaCantor
import React from 'react'
//  o arquivo CSS com a extensao ".module" impede que o css
//  vaze para outros modulos a nao ser que seja importado o estilo/styles
import styles from "./MyCSS.module.css";

const MyCSS = () => {
  return ( 
    <div>
      <h1 className={styles.meuTitulo}>TESTE CSS Module</h1>  
    </div>
  )
}

export default MyCSS
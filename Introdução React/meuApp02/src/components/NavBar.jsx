import { NavLink } from "react-router-dom"  // componente para manipular barra de navegação
import React from 'react'
import styles  from "./css/NavBar.module.css" //importar o CSS especifico para esta navbar "impede que o CSS vaze para outros componentes"

const NavBar = () => {
  return (

        <nav className={styles.navbar}>
            <NavLink to="/" className={styles.link}>Home</NavLink>
            <NavLink to="/Login" className={styles.link}>Login</NavLink>
            <NavLink to="/Cadastro" className={styles.link}>Cadastro</NavLink>
            <NavLink to="/Sobre" className={styles.link}>Sobre</NavLink>
            <NavLink to="/Contato" className={styles.link}>Contato</NavLink>
        </nav>   

  )
}

export default NavBar
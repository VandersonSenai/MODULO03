import { NavLink } from "react-router-dom"  // componente para manipular barra de navegação
import React from 'react'
import styles  from "./css/NavBar.module.css" //importar o CSS especifico para esta navbar "impede que o CSS vaze para outros componentes"

const NavBar = () => {
  return (

        <nav className={styles.navbar}>
            <NavLink to="/" className={styles.link}style={({ isActive }) => {
          return { color: isActive ? '#5e63ff' : '#e6e6ef' }
        }}>Login</NavLink>
            <NavLink to="/Cadastro" className={styles.link}style={({ isActive }) => {
          return { color: isActive ? '#5e63ff' : '#e6e6ef' }
        }}>Cadastro</NavLink>
            <NavLink to="/Sobre" className={styles.link}style={({ isActive }) => {
          return { color: isActive ? '#5e63ff' : '#e6e6ef' }
        }}>Sobre</NavLink>
            <NavLink to="/cadNovo" className={styles.link}style={({ isActive }) => {
          return { color: isActive ? '#5e63ff' : '#e6e6ef' }
        }}>cadNovo</NavLink>
        </nav>   

  )
}

export default NavBar
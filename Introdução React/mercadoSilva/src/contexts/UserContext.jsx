// o nome dos arquivos de contextos precisa seguir o mesmo padrão dado neste arquivo
//  Ex: variavelContext.jsx = UserContext.jsx

// para que seja utilizado por todo o app, precisamos englobar


import { useState, useEffect, createContext } from "react";
export const AuthContext = createContext()

export const AuthProvider = ({children}) =>{
    const [usuarioNome, setUsuarioNome] = useState("")

    useEffect(() =>{
        const nome = localStorage.getItem("userName") || "Visitante"
        setUsuarioNome(nome)
    }, [])

    const login = (data) => {
        console.log("Usuário atual : ", data)
        localStorage.setItem("userName", data.nome)
        localStorage.setItem("email", data.mail)
        setUsuarioNome(data.nome)
    }

    const logout = () => {
        localStorage.removeItem("userName")
        localStorage.removeItem("email")
        setUsuarioNome("Visitante")
    }

    return (
        <AuthContext.Provider value={{usuarioNome, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
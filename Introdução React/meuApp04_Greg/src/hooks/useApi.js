// Importação do useState para criar as variáveis
import { useState, useEffect } from "react";

// Variável para url da api, vindo do arquivo .env
// const url = import.meta.env.VITE_API_URL;
const url = "http://localhost:5000/funcionarios";

// Função para requisitar todos os funcionários
// em aula tivemos um erro por que o nome da função era getFuncionarios e nao GetFuncionarios
export function GetFuncionarios() {
  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    async function fetchData() {
        try{
           const resposta = await fetch(url)
           const dataResposta = await resposta.json()
           setFuncionarios(dataResposta)
           console.log("Dados recebidos:", dataResposta)
        }
        catch(error){
            console.log("Erro ao buscar os dados:", error)
        }
    }
    fetchData()
  }, []);
// retorna lisa de funcionários
  return funcionarios;
}

export function AddFuncionario(funcionario){

    async function fetchData() {
        try{
            const envFuncionario = await fetch(url, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(funcionario)
            })
            const data = await envFuncionario.json()
            console.log("Usuario adicionado com sucesso!", data)
        }
        catch(error){
            console.log("Erro ao cadastrar dados:", error)
        }
        
    }
    fetchData()
}

export function DeletarFuncionario(funcionarioId){
    async function fetchData() {
        try{
            const resposta = await fetch(`${url}/${funcionarioId}`,{
                method:"DELETE",
            })
            const data = await resposta.json()
            console.log("Funcionário excluído com sucesso :", data)
        }
        catch(error){
            console.log("Erro ao deletar funcionário:", error)
        }
    }
    fetchData()
}

export function EditarFuncionario(funcionario){
    async function fetchData() {
        try{
            const resposta = await fetch(`${url}/${funcionario.id}`,{
                method: "PUT",
                headers: {
                    "Content-type":"application/json"
                },
                body: JSON.stringify(funcionario)
            })
            const data = await resposta.json()
            console.log("Funcionario editado :", data)
        }
        catch(error){
            console.log("Erro ao editar funcionário:", error)
        }

    }
    fetchData()
}
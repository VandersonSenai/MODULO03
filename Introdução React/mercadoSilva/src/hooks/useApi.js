//  necessário para fazer o transporte dos dados
//  entre o form e a API

// definindo a variável que ira conter o endereço
// da api
const url = import.meta.env.API_URL

import { useState, useEffect } from "react"


// para o react entender que é um hook a função precisa conter o "use" em seu nome.
export function useVerificaLogin(){
    // carregar lista de usuários da api.
    const [usuarios, setUsuarios] = useState([])

    useEffect( () =>{

        async function fetchData() {
            try{
                const req = await fetch(
                    `${url}/usuarios`) // acessa a rota que envia alista de usuarios.
                const users = await req.json()
                setUsuarios(users)
            }
            catch (error){
                console.log("Error", error.message)
            }
        }

        fetchData() //executo a função acima para garantir uma execução.
    }, [])
    // esse " , [] " é algum evento ou variável que eu forneco para o useEffect saber quando ele deve rodar novamente. Suponho que posso colocar a variavel com o vetor que recebe a lista de usuários.

    // Criando uma funcao que verifica se o user.email existe
    const verificaLogin = (data) =>{
        const userToFind = usuarios.find((user)=>{
            // percorre a lista de usuarios e vai checando se existe dentro da lista o email que foi fornecido pela variavel DATA que sera fornecida do form.
            return user.email === data.email
        });
        // verfica o user nao é "indefinido" que significaria que ele nao foi encontrado e depois compara se a senha é igual a que esta atribuída ao user encontrado.
        if(userToFind != undefined && userToFind.senha == data.senha){
            console.log("user logged", userToFind.nome)
            return "login efetuado com sucesso!"
        }else{
            return "Usuário ou senha inválidos!"
        }
    };

    return { verificaLogin }
}



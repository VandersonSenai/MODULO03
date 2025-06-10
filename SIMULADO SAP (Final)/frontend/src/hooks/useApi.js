// Importa a url da api vindo do .env
const url = import.meta.env.VITE_API_URL;

// import { useState, useEffect, useContext } from "react";
import { useState, useEffect } from "react";

// import { AuthContext } from "../contexts/UserContext";

// export function useVerificaLogin() {
//   const [usuarios, setUsuarios] = useState([]);

//   const { login } = useContext(AuthContext);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const req = await fetch(`${url}/usuarios`);
//         const users = await req.json();
//         setUsuarios(users);
//       } catch (erro) {
//         console.log(erro.message);
//       }
//     }
//     fetchData();
//   }, []);

//   const verificaLogin = (data) => {
//     const userToFind = usuarios.find((user) => {
//       return user.email_usu === data.email;
//     });

//     if (userToFind != undefined && userToFind.senha_usu == data.senha) {
//       login(userToFind);
//       console.log("Usuário logado", userToFind.nome);
//       return "Login efetuado com sucesso";
//     } else {
//       return "Usuário ou senha inválidos";
//     }
//   };
//   return { verificaLogin };
// }

export function useListaLivro() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const req = await fetch(`${url}/livros`);
        const livros = await req.json();
        setLivros(livros);
      } catch (erro) {
        console.log(erro.message);
      }
    }
    fetchData();
  }, []);

  return livros;
}

// DELETA LIVRO do Banco
export function useDeleteLivro() {
  const DeletarLivro = async (id) => {
    const req = await fetch(`${url}/produtos/${id}`, {
      method: "DELETE",
    });
    const res = await req.json();
    console.log("Produto deletado:", res);
    return res;
  };

  return { DeletarLivro };
}

export function useBuscarProdutoPorId() {
  const buscarProdutoPorId = async (idProduto) => {
    const req = await fetch(`${url}/produtos/${idProduto}`);
    const res = await req.json();
    console.log("Produto encontrado:", res);
    return res;
  };
  return { buscarProdutoPorId };
}

export function useListaCategorias() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const req = await fetch(`${url}/categorias`);
        const cate = await req.json();
        console.log(cate);
        setCategorias(cate);
      } catch (erro) {
        console.log(erro.message);
      }
    }
    fetchData();
  }, []);
  return categorias;
}

export function useInserirProduto() {
  const inserirProduto = async (data) => {
    const req = await fetch(`${url}/produtos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await req.json();
    console.log("Produto inserido:", res);
    return res;
  };
  return { inserirProduto };
}












export function useAtualizaProduto() {
  const atualizaProduto = async (data, idProduto) => {
    const req = await fetch(`${url}/produtos/${idProduto}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await req.json();
    console.log("Produto atualizado:", res);
    return res;
  };
  return { atualizaProduto };
}

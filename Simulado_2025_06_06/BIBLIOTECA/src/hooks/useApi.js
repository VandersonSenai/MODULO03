// Importa a url da api vindo do .env
const url = import.meta.env.VITE_API_URL;

import { useState, useEffect, useContext } from "react";

import { AuthContext } from "../contexts/UserContext";

export function useListaLivros() {
  const [livros, setLivros] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
              const resposta = await fetch(`${url}/livros`);
              const livros = await resposta.json();
              setLivros(livros);
            } catch (erro) {
              console.log(erro.message);
            }
      }
      fetchData();
    }, []);
  return livros
}

export function useBuscaLivroId() {
  const BuscaLivroId = async (id) => {
    const req = await fetch(`${url}/livros/${id}`);
    const res = await req.json();
    // console.log("Curso encontrado:", res);
    return res;
  };
  return { BuscaLivroId };
}

export function useSalvaUsuario() {
  const Salvarusuario = async (data) => {
    const req = await fetch(`${url}/usuarios`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await req.json();
    console.log("Usuarios salvo:", res);
    return res;
  };
  return { Salvarusuario };
}
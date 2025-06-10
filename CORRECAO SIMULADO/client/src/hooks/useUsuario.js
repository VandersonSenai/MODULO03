const url = import.meta.env.VITE_API_URL;
import { useState, useEffect } from 'react';

export function useListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        async function fetchData() {
        try {
            const req = await fetch(`${url}/usuarios`);
            if (!req.ok) {
            throw new Error('Erro ao buscar usuários');
            }
            const res = await req.json();
            setUsuarios(res);
        } 
        catch (error) {
            console.log('Erro ao buscar usuários:', error);
            }
        }

        fetchData();
    }, []);
//   return { usuarios, carregando, erro };
  return usuarios;
}

export function useInserirUsuario() {
    const InserirUsuario = async (data) => {
        const req = await fetch(`${url}/usuarios`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
        }
    );
        const res = await req.json();
        return res;

        } 
    return {InserirUsuario};

}
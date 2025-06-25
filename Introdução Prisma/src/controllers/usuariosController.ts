import { prisma } from '../lib/prisma'

export const buscarUsuarios = async (request: any, response: any) => {
    const usuarios = await prisma.usuario.findMany()
    response.status(200).send(usuarios).end();
};


export const buscarUsuarioPorId = async (request: any , response: any) => {
    const { id } = request.params as {
    id: string;
    };
  const usuario = await prisma.usuario.findUnique({
    where: { id: Number(id) },
    select: {
        id: true,
        nome: true,
        login: true,
        senha: true,
        tipo: true,
        // ativo: true,
                    },
  });

  if (!usuario) {
    return response.status(404).send({ error: "Usuario não encontrado" });
  }
  return usuario;
};
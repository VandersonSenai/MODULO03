import { prisma } from '../lib/prisma'

export const buscarUnidades = async (request: any, response: any) => {
    const unidades = await prisma.produto_unidade.findMany()
    response.status(200).send(unidades).end();
};


export const buscarUnidadesPorId = async (request: any , response: any) => {
    const { id } = request.params as {
    id: string;
    };
    const unidade = await prisma.produto_unidade.findUnique({
    where: { id: Number(id) },
    select: {
        id: true,
        nome: true,
        abreviacao: true,
        ativo: true,
                    },
  });

  if (!unidade) {
    return response.status(404).send({ error: "Unidade não encontrada" });
  }
  return unidade;
};
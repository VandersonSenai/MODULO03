import { prisma } from '../lib/prisma'

export const buscarCategorias = async (request: any, response: any) => {
    const categorias = await prisma.produto_categoria.findMany()
    response.status(200).send(categorias).end();
};


export const buscarCategoriaPorId = async (request: any , response: any) => {
    const { id } = request.params as {
    id: string;
    };
    const categoria = await prisma.produto_categoria.findUnique({
    where: { id: Number(id) },
    select: {
        id: true,
        nome: true,
        descricao: true,
        // ativo: true,
                    },
  });

  if (!categoria) {
    return response.status(404).send({ error: "Categoria não encontrada" });
  }
  return categoria;
};
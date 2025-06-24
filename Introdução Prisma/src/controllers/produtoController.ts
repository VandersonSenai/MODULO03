import { Decimal } from '../generated/prisma/runtime/library';
import { prisma } from '../lib/prisma'

export const buscarProdutos = async (request : any, response: any) => {
    const produtos = await prisma.produto.findMany()
    response.status(200).send(produtos).end();
};

export const buscarProdutoPorId = async (request: { id: string }, response: any) => {
     const { id } = request
                        
const produto = await prisma.produto.findUnique({
    where: { id: Number(id) },
    select: {
          id: true,
          nome: true,
          preco_custo: true,
          preco_venda: true,
          unidade_id: true,
          categoria_id: true,
          estado: true,
              produto_categoria: {
                      select: {
                      id: true,
                      nome: true,
                  },
              },
              produto_unidade: {
                  select: {
                  id: true,
                  abreviacao: true,
                  },
              },
          },
  });

  if (!produto) {
    return response.status(404).send({ error: "Produto não encontrado" });
  }
  response.status(200).send(produto).end();

}

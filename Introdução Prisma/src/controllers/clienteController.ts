import { prisma } from '../lib/prisma'

export const buscarClientes = async (request: any, response: any) => {
    const clientes = await prisma.pedido_cliente.findMany()
    response.status(200).send(clientes).end();
};


export const buscarClientePorId = async (request: any , response: any) => {
    const { id } = request.params as {
    id: string;
    };
    const cliente = await prisma.pedido_cliente.findUnique({
    where: { id: Number(id) },
    select: {
        id: true,
        nome: true,
        telefone: true,
        data_cadastro: true,
        pedido: false,
        // ativo: true,
                    },
  });

  if (!cliente) {
    return response.status(404).send({ error: "Cliente não encontrado" });
  }
  return cliente;
};
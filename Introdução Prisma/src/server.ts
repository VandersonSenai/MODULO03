import fastify from "fastify";

import { prisma } from './lib/prisma'

const app = fastify();

app.listen({ port : 3333 }).then(() => {
    console.log("BackEnd rodando na porta 3333.")
})

app.get("/", async (request, reply) => {
return { message: "Rota raiz!" };
});

app.get("/teste", async (request, reply) => {
    return { message: "Rota teste!" };
});console.log("Server running")


app.get("/produtos", async () => {
     const produtos = await prisma.produto.findMany()
  return produtos;
});

app.get("/categorias", async () => {
     const produtos = await prisma.produto_categoria.findMany()
  return produtos;
});

app.get("/usuarios", async () => {
     const usuarios = await prisma.usuario.findMany()
  return usuarios;
});

app.get("/unidades", async () => {
     const unidades = await prisma.produto_unidade.findMany()
  return unidades;
});


app.get("/pedidos/:id", async (request, reply) => {
  const { id } = request.params as {
    id: string;
  };
  const pedido = await prisma.pedido.findUnique({
    where: { id: Number(id) },
    select: {
        id: true,
        dthr_criacao_pedido: true,
        entrega_tipo: true,
        entrega_dthr: true,
        valor_frete: true,
        valor_total_pedido: true,
        valor_custo_pedido: true,
        dt_venc_pagamento: true,
        dt_pagamento: true,
        dest_logradouro: true,
        dest_numero: true,
        dest_bairro: true,
        dest_cidade: true,
        dest_estado: true,
        status: true,
        observacao: true,
        pedido_cliente: {
        select: {
          id: true,
          nome: true,
          telefone: true,
        },
      },
      usuario: {
        select: {
          id: true,
          nome: true,
        },
      },
      pedido_produto: {
        select: {
            id: true,
            quantidade: true,
            valor_venda: true,
            valor_custo: true,
            infor_adicional: true,
                produto: {
                    select: {
                    id: true,
                    nome: true,
                    unidade_id: true,
                    categoria_id: true,
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
                },
        },
      },
    },
  });

  if (!pedido) {
    return reply.status(404).send({ error: "Pedido não encontrado" });
  }
  return pedido;
});


app.get("/pedidos4", async (request, reply) => {
  const { id } = request.params as {
    id: string;
  };
  const pedido = await prisma.pedido.findMany({
    select: {
        id: true,
        dthr_criacao_pedido: true,
        entrega_tipo: true,
        entrega_dthr: true,
        valor_frete: true,
        valor_total_pedido: true,
        valor_custo_pedido: true,
        dt_venc_pagamento: true,
        dt_pagamento: true,
        dest_logradouro: true,
        dest_numero: true,
        dest_bairro: true,
        dest_cidade: true,
        dest_estado: true,
        status: true,
        observacao: true,
        pedido_cliente: {
        select: {
          id: true,
          nome: true,
          telefone: true,
        },
      },
      usuario: {
        select: {
          id: true,
          nome: true,
        },
      },
      pedido_produto: {
        select: {
            id: true,
            quantidade: true,
            valor_venda: true,
            valor_custo: true,
            infor_adicional: true,
                produto: {
                    select: {
                    id: true,
                    nome: true,
                    unidade_id: true,
                    categoria_id: true,
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
                },
        },
      },
    },
  });

  if (!pedido) {
    return reply.status(404).send({ error: "Pedido não encontrado" });
  }

  return pedido;
});
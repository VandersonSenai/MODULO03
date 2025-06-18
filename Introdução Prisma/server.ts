import fastify from "fastify";

import { PrismaClient } from './src/generated/prisma'
import { Param } from "@prisma/client/runtime/library";
const prisma = new PrismaClient({
    // Habilita a exibição de informações no terminal do servidor como [queries, info, warnings, and errors] se preferir deixe apenas a visualização das query's.
    // log: ["query", "info", "warn", "error"],
    log: ["query"],
});

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


   
app.get("/pedidos", async () => {
     const produtos = await prisma.pedido.findMany()
  return produtos;
});

app.get("/produtos", async () => {
     const produtos = await prisma.produto.findMany()
  return produtos;
});
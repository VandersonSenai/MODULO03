import express from "express"
const app = express()
const port = 5000


import { buscarUsuarios } from "./controllers/usuarioController.js"
import { atualizarProduto, buscarCategorias, buscarProdutoPorId, buscarProdutos, criarProdutos, deletarProduto } from "./controllers/produtoController.js"

import cors from "cors"

const corsOptions = {
    origin: "http://localhost:5173",
    credetials:true,
    optionSucessStatus: 200
}

app.use(cors(corsOptions))

app.use ( express.urlencoded ({ extended:true }))
app.use(express.json())

// ROTAS PARA USUÁRIO
app.get("/usuarios", buscarUsuarios)

// ROTAS PARA PRODUTO
// BUSCA AS CATEGORIAS
app.get("/categorias", buscarCategorias)
// BUSCA TODOS OS PRODUTOS
app.get("/produtos", buscarProdutos)
// DELETA PRODUTO ESPECÍFICO
app.delete("/produtos/:id", deletarProduto)
// CRIA UM PRODUTO 
app.post("/produtos", criarProdutos)
// BUSCA UM PRODUTO ESPECÍFICO PASSANDO UM ID
app.get("/produtos/:id", buscarProdutoPorId)
// ATUALIZA UM PRODUTO ESPECÍFICO
app.put("/produtos/:id", atualizarProduto)


app.get("/", (req, res) => {
    res.status(200).send("Tá funcionando")
})

app.listen(port, () => {
    console.log("Servidor iniciado na porta 5000");
})
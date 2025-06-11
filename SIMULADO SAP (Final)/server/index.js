import express from "express"
const app = express()
const port = 5000


import { buscarUsuarios, listarUsuarios } from "./controllers/usuarioController.js"
import { atualizarLivro, buscarLivroPorId, buscarLivros, criarLivro, deletarLivro } from "./controllers/livroController.js"

import cors from "cors"

const corsOptions = {
    origin: "*",
    // origin: "http://localhost:5173",
    credetials:true,
    optionSucessStatus: 200
}

app.use(cors(corsOptions))

app.use ( express.urlencoded ({ extended:true }))
app.use(express.json())

// ROTAS PARA USUÁRIO
app.get("/usuarios", buscarUsuarios)
app.get("/listarusuarios", listarUsuarios)

// ROTAS PARA PRODUTO
// BUSCA AS CATEGORIAS
// app.get("/categorias", buscarCategorias)
// BUSCA TODOS OS PRODUTOS
app.get("/livros", buscarLivros)
// DELETA PRODUTO ESPECÍFICO
app.delete("/livros/:id", deletarLivro)
// CRIA UM PRODUTO 
app.post("/livros", criarLivro)
// BUSCA UM PRODUTO ESPECÍFICO PASSANDO UM ID
app.get("/livros/:id", buscarLivroPorId)
// ATUALIZA UM PRODUTO ESPECÍFICO
app.put("/livros/:id", atualizarlivro)


app.get("/", (req, res) => {
    res.status(200).send("Nois trupica mas nao cai!")
})

app.listen(port, () => {
    console.log("V9 Server iniciado na porta 5000");
})
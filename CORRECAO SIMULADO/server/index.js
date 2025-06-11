import express from "express";
const app = express();
const port = 5000;

import cors from "cors";


const corsOptions = {
  origin: "http://localhost:5173",
  credetials: true,
  optionSucessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Rotas Ususarios
import { buscarUsuarios, criaUsuario } from "./controlers/usuarioController.js";
// Busca usuários
app.get("/usuarios", buscarUsuarios);
// Cria usuário
app.post("/usuarios", criaUsuario);


// Rotas Livros
import { buscarLivros, criaLivro, buscarLivrosPorId, deletarLivro, editarLivro } from "./controlers/livroController.js";
// Busca livro
app.get("/livros", buscarLivros);
// Cria livro
app.post("/livros", criaLivro); 
// Busca livro por ID
app.get("/livros/:id", buscarLivrosPorId);
// Atualiza livro
app.put("/livros/:id", editarLivro);
// Deleta livro
app.delete("/livros/:id", deletarLivro);

app.get("/", (req, res) => {
    res.status(200).send("Tá funcionando")
})

app.listen(port, () => {
    console.log("Servidor iniciado na porta 5000");
})
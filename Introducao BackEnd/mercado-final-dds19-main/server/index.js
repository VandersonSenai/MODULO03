import express from 'express';
const app = express();
const port = 5000;

import { buscarUsuarios } from './controllers/usuarioController.js';
import { buscarCategorias, buscarProdutos, deletarProduto, criarProdutos, buscarProdutosPorId, atualizarProduto } from './controllers/produtoController.js';

// Importa o middleware CORS para habilitar requisições de diferentes origens
import cors from 'cors';

const corsOptions = {
    // Permite requisições de qualquer origem
    // origin: '*', 

    origin: 'http://localhost:5173', // Permite requisições apenas do frontend
    credentials: true, // Permite cookies e credenciais 
    optionsSuccessStatus: 200, // Para navegadores antigos

    // Métodos permitidos
    // methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], 

    // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',  
    // Define os métodos HTTP permitidos para as requisições CORS
};

// Habilita o CORS com as opções definidas
app.use(cors(corsOptions)); 

// Permite que o Express entenda JSON no corpo das requisições
app.use ( express.urlencoded ({extended:true}) ); 
app.use( express.json() );


// Rota para buscar usuários
app.get("/usuarios",buscarUsuarios);

// Rota para buscar categorias
app.get("/categorias",buscarCategorias);

// Rota para buscar produtos
app.get("/produtos",buscarProdutos);

// Rota para deletar um produto por ID
app.delete("/produtos/:id",deletarProduto);

// Rota para criar um novo produto
app.post("/produtos", criarProdutos);

// Rota para buscar um produto por ID
app.get("/produtos/:id", buscarProdutosPorId);

// Rota para atualizar um produto
app.put("/produtos/:id", atualizarProduto);

// Rota raiz que retorna uma mensagem simples
app.get("/", (req, res) => {
    console.log("Rota raiz acessada");    
    res.status(200).send("Servidor rodando!");
}); 

// Inicia o servidor na porta especificada
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
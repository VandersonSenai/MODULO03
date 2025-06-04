// 1 - funções de validação
// 2 - rotas
// 3 - o que as rotas vão fazer


import conexao from "../conexao.js";

export const buscarCategorias = async (req, res) => {
    const sql = "SELECT * FROM categorias";

    conexao.query(sql, (erro, resultado) => {
        if (erro) {
            console.log("Erro ao buscar categorias:", erro);
            res.status(500).json({ error: "Erro ao buscar categorias" }).end();
        } else {
            console.log(resultado);
            res.status(200).json(resultado).end();
        }
    });
}

export const buscarProdutos = async (req, res) => {
    const sql = "SELECT * FROM prod_cat";

    conexao.query(sql, (erro, resultado) => {
        if (erro) {
            console.log("Erro ao buscar categorias:", erro);
            res.status(500).json({ error: "Erro ao buscar categorias" }).end();
        } else {
            console.log(resultado);
            res.status(200).json(resultado).end();
        }
    });
}

export const deletarProduto = async (req, res) => {
    const { id } = req.params.id;
    const sql = `DELETE FROM produtos WHERE id_prod = '${id}'`;

         
    conexao.query(sql, (erro, resultado) => {
        if (erro) {
            console.log("Erro ao deletar produto:", erro);
            res.status(500).json(erro.sqlMessage).end();
        } else {
            // Se a exclusão for bem-sucedida, você pode retornar uma mensagem de sucesso ou o resultado da exclusão
            console.log("Deletando produto com ID:", id);
            res.status(200).json(JSON.stringify(resultado)).end();
        }
    });
}

export const criarProdutos = async (req, res) => {
    const nome = req.body.nome;
    const descricao = req.body.descricao;
    const categoria = req.body.categoria;
    const preco = req.body.preco;
    const img = req.body.imagemUrl;

    const sql = `INSERT INTO produtos (nome_prod, descricao_prod, categoria_prod, preco_prod, imagem_prod) VALUES ('${nome}', '${descricao}', '${categoria}', ${preco}, '${img}')`;

    conexao.query(sql, (erro) => {
        if (erro) {
            console.log("Erro ao cadastrar produto:", erro);
            res.status(500).json(erro.sqlMessage).end();
        } else {
            // Se a exclusão for bem-sucedida, você pode retornar uma mensagem de sucesso ou o resultado da exclusão
            console.log("Produto cadastrado com sucesso");
            res.status(200).json("Produto cadastrado com sucesso").end();
        }
    });
}


export const buscarProdutosPorId = async (req, res) => {
    const { id } = req.params.id;
    const sql = `SELECT * FROM produtos WHERE id_prod = '${id}'`;

    conexao.query(sql, (erro, resultado) => {
        if (erro) {
            console.log("Erro ao buscar produto:", erro);
            res.status(500).json(erro.sqlMessage).end();
        } else {
                console.log("Produto encontrado:", resultado[0]);
                res.status(200).json(resultado).end();
            }
    });
}

export const atualizarProduto = async (req, res) => {
    const { id } = req.params.id;
    const nome = req.body.nome;
    const descricao = req.body.descricao;
    const categoria = req.body.categoria;
    const preco = req.body.preco;
    const img = req.body.imagemUrl;

    // const { nome, descricao, categoria, preco, imagemUrl } = req.body;

    const sql = `UPDATE produtos SET 
                                nome_prod =        '${nome}', 
                                descricao_prod =   '${descricao}', categoria_prod =   '${categoria}', 
                                preco_prod =       '${preco}', 
                                imagem_prod =      '${img}' 
                                WHERE id_prod =    '${id}'`;
                                
    conexao.query(sql, (erro) => {
        if (erro) {
            console.log("Erro ao atualizar produto:", erro);
            res.status(500).json(erro.sqlMessage).end();
        } else {
            console.log("Produto atualizado com sucesso");
            res.status(200).json("Produto atualizado com sucesso").end();
        }
    }); 
    


}
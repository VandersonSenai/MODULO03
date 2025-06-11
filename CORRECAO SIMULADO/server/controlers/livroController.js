import conn  from '../conexao.js'


export const buscarLivros = (req, res) => {
    const sql = "SELECT * FROM livros";

    conn.query(sql, (erro, resultado) => {
        if (erro) {
            console.log(erro);
            // Se ocorrer um erro, envia uma resposta de erro ao cliente
            // res.status(500).send({ erro: "Erro ao buscar usuários" });
            res.json(erro).end(); 
            // Envia o erro como JSON para o cliente
        }
        else {
            res.json(resultado).end();
            // Envia o resultado como JSON para o cliente
        }
    });
}

export const criaLivro = (req, res) => {
    // const { nome, email } = req.body;
    // Desestruturação para obter os valores de nome e email do corpo da requisição
    const { titulo } = req.body.titulo;
    const { autor } = req.body.autor;
    const { generos } = req.body.generos;
    const { status } = req.body.status;
    const { usuario } = req.body.usuario;
    
    const sql = `INSERT INTO livros (titulo, autor, generos, status, usuario) VALUES ('${titulo}','${autor}','${generos}','${status}','${usuario}')`;

    conn.query(sql, (erro) => {
        if (erro) {
            console.log(erro);
            res.json(erro.sqlMessage).end();
        } else {
            res.json("Cadastro Efetuado").end();
        }
    });
}


export const buscarLivrosPorId = (req, res) => {
    const id = req.params.id

    const sql = `SELECT * FROM livros WHERE id = '${id}'`;

    conn.query(sql, (erro, resultado) => {
        if (erro) {
            console.log(erro);
            // Se ocorrer um erro, envia uma resposta de erro ao cliente
            // res.status(500).send({ erro: "Erro ao buscar usuários" });
            res.json(erro).end(); 
            // Envia o erro como JSON para o cliente
        }
        else {
            res.json(resultado).end();
            // Envia o resultado como JSON para o cliente
        }
    });
}


export const editarLivro = (req, res) => {
    const id = req.params.id
    // const { nome, email } = req.body;
    // Desestruturação para obter os valores de nome e email do corpo da requisição
    const { titulo } = req.body.titulo;
    const { autor } = req.body.autor;
    const { generos } = req.body.generos;
    const { status } = req.body.status;
    const { usuario } = req.body.usuario;
    
    const sql = `UPDATE livros 
                SET titulo = '${titulo}',  autor = '${autor}', 
                    generos = '${generos}', status = '${status}',
                    usuario = '${usuario}' 
                    WHERE id = '${id}'`; 
    conn.query(sql, (erro) => {
        if (erro) {
            console.log(erro);
            res.json(erro.sqlMessage).end();
        } else {
            res.json("Cadastro Efetuado").end();
        }
    });
}


export const deletarLivro = (req, res) => {
    const id = req.params.id
    const sql = `DELETE FROM livros WHERE id = '${id}'`;
    conn.query(sql, (erro, resultado) => {
        if (erro) {
            console.log(erro);
            // Se ocorrer um erro, envia uma resposta de erro ao cliente
            // res.status(500).send({ erro: "Erro ao buscar usuários" });
            res.json(erro).end(); 
            // Envia o erro como JSON para o cliente
        }
        else {
            res.json(JSON.stringify(resultado)).end();
            // Envia o resultado como JSON para o cliente
        }
    });
}
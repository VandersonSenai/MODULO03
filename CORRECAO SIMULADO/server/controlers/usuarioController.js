import conn from '../conexao.js'


export const buscarUsuarios = (req, res) => {
    const sql = "SELECT * FROM usuarios";

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

export const criaUsuario = (req, res) => {
    // const { nome, email } = req.body;
    // Desestruturação para obter os valores de nome e email do corpo da requisição
    const { nome } = req.body.nome;
    const { email } = req.body.email;
    
    const sql = `INSERT INTO usuarios (nome, email) VALUES ('${nome}','${email}')`;

    conn.query(sql, (erro) => {
        if (erro) {
            console.log(erro);
            res.json(erro.sqlMessage).end();
        } else {
            res.json("Cadastro Efetuado").end();
        }
    });
}
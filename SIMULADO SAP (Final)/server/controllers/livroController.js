import conn from "../conexao.js";

export const buscarCategorias = async (req, res) => {
  const sql = `SELECT * FROM categorias`;

  conn.query(sql, (erro, dados) => {
    if (erro) {
      console.log(erro);
    } else {
      res.status(200).json(dados).end();
    }
  });
};

export const deletarLivro = async (req, res) => {
  const id = req.params.id;

  const sql = `DELETE FROM livros WHERE id_prod = '${id}'`;

  conn.query(sql, (erro, result) => {
    if (erro) {
      console.log(erro);
      res.status(500).json(erro.sqlMessage).end();
    } else {
      res.status(200).json(JSON.stringify(result)).end();
    }
  });
};

export const buscarLivros = async (req, res) => {
  const sql = `SELECT * FROM livros`;

  conn.query(sql, (erro, dados) => {
    if (erro) {
      console.log(erro);
    } else {
      res.status(200).json(dados).end();
    }
  });
};

export const criarLivro = async (req, res) => {
  const nome = req.body.nome;
  const descricao = req.body.descricao;
  const categoria = req.body.categoria;
  const preco = req.body.preco;
  const img = req.body.imagemUrl;

  const sql = `INSERT INTO produtos (nome_prod, descricao_prod, categoria_prod, preco_prod, imagem_prod)
                 VALUES ('${nome}','${descricao}','${categoria}','${preco}','${img}')`;

  conn.query(sql, (erro) => {
    if (erro) {
      console.log(erro);
      res.status(500).json(erro.sqlMessage).end();
    } else {
      res.status(200).json("Cadastro de produto efetuado").end();
    }
  });
};

export const buscarLivroPorId = async (req, res) => {
  const id = req.params.id;

  const sql = `SELECT * FROM produtos WHERE id = '${id}'`;

  conn.query(sql, (erro, result) => {
    if (erro) {
      console.log(erro);
      res.status(500).json(erro.sqlMessage).end();
    } else {
      res.status(200).json(result).end();
    }
  });
};

export const atualizarLivro = async (req, res) => {
  const id = req.params.id;
  const nome = req.body.nome;
  const descricao = req.body.descricao;
  const categoria = req.body.categoria;
  const preco = req.body.preco;
  const img = req.body.imagemUrl;

  const sql = `UPDATE produtos SET nome_prod = '${nome}',
                                    descricao_prod = '${descricao}',
                                    categoria_prod = '${categoria}',
                                    preco_prod = '${preco}',
                                    imagem_prod = '${img}'
                                    WHERE id_prod = '${id}'`

  conn.query(sql, (erro) => {
    if (erro) {
      res.status(500).json(erro.sqlMessage).end();
    } else {
      res.status(200).end();
    }
  });
};

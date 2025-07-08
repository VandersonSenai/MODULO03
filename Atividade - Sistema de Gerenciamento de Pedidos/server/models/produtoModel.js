import banco from "../config/conect.js"; 

export const buscarProdutos = (callback) => {
  const sql = `SELECT * FROM produtos`; 
  banco.query(sql, callback);
};

export const inserirProduto = (produto, callback) => {
  const sql = `
    INSERT INTO produtos (nome, descricao, preco, estoque)
    VALUES (?, ?, ?, ?)
  `;
  const valores = [
    produto.nome,
    produto.descricao,
    produto.estoque,
    produto.preco,
  ];
  banco.query(sql, valores, callback);
};

export const buscarProdutoPorId = (id, callback) => {
  const sql = `SELECT * FROM produtos WHERE id = ?`;
  banco.query(sql, [id], callback);
};

export const atualizarProduto = (id, produto, callback) => {
  const sql = `
    UPDATE produtos
    SET nome = ?, descricao = ?, preco = ?, estoque = ?
    WHERE id = ?
  `;
  const valores = [
    produto.nome,
    produto.descricao,
    produto.estoque,
    produto.preco,
    id,
  ];
  banco.query(sql, valores, callback);
};

export const deletarProduto = (id, callback) => {
  const sql = `DELETE FROM produtos WHERE id = ?`;
  banco.query(sql, [id], callback);
};

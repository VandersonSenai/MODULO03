import {
  inserirProduto,
  buscarProdutos,
  buscarProdutoPorId,
  atualizarProduto,
  deletarProduto,
}
from "../models/produtoModel.js";

export const criarProduto = (req, res) => {
  const produto = {
    nome: req.body.nome,
    descricao: req.body.descricao,
    estoque: req.body.estoque,
    preco: req.body.preco,
  };

  inserirProduto(produto, (erro) => {
    if (erro) {
      res.status(500).json({ erro: erro.sqlMessage });
    } else {
      res.status(201).json({ mensagem: "Produto cadastrado com sucesso" });
    }
  });
};

export const listarProdutos = (req, res) => {
  buscarProdutos((erro, dados) => {
    if (erro) {
      res.status(500).json({ erro: erro.sqlMessage });
    } else {
      res.status(200).json(dados);
    }
  });
};

export const listarProdutoPorId = (req, res) => {
  const { id } = req.params;
  buscarProdutoPorId(id, (erro, dados) => {
    if (erro) {
      res.status(500).json({ erro: erro.sqlMessage });
    } else {
      res.status(200).json(dados);
    }
  });
};

export const editarProduto = (req, res) => {
  const { id } = req.params;
  const produto = {
    nome: req.body.nome,
    descricao: req.body.descricao,
    estoque: req.body.estoque,
    preco: req.body.preco,
  };

  atualizarProduto(id, produto, (erro) => {
    if (erro) {
      res.status(500).json({ erro: erro.sqlMessage });
    } else {
      res.status(200).json({ mensagem: "Produto atualizado com sucesso" });
    }
  });
};

export const excluirProduto = (req, res) => {
  const { id } = req.params;
  deletarProduto(id, (erro) => {
    if (erro) {
      res.status(500).json({ erro: erro.sqlMessage });
    } else {
      res.status(200).json({ mensagem: "Produto excluído com sucesso" });
    }
  });
};



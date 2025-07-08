import {
  inserirPedido,
  buscarTodosPedidos,
  buscarPedidoPorId,
  atualizarPedido,
  excluirPedidoPorId,
}
from "../models/pedidoModel.js";

export const criarPedido = (req, res) => {

  const pedido = {
    cliente_id: req.body.cliente_id,
    status: req.body.status,
    usuario_id: req.body.usuario_id,
    forma_pgto: req.body.forma_pgto,
  };

  const produtos = req.body.produtos; 

  if (!Array.isArray(produtos) || produtos.length === 0) {
    return res.status(400).json({ erro: 'Produtos são obrigatórios' });
  }

  inserirPedido(pedido, produtos, (erro) => {
    if (erro) {
      res.status(500).json({ erro: erro.sqlMessage });
    } else {
      res.status(201).json({ mensagem: "Pedido cadastrado com sucesso" });
    }
  });
};


export const listarPedidoPorId = (req, res) => {
  const { id } = req.params;

  buscarPedidoPorId(id, (erro, dados) => {
    if (erro) {
      return res.status(500).json({ erro: erro.sqlMessage });
    }

    if (!dados) {
      return res.status(404).json({ mensagem: 'Pedido não encontrado' });
    }

    res.status(200).json(dados);
  });
};


export const listarTodosPedidos = (req, res) => {
  buscarTodosPedidos((erro, dados) => {
    if (erro) {
      return res.status(500).json({ erro: erro.sqlMessage });
    }

    if (!dados || dados.length === 0) {
      return res.status(404).json({ mensagem: 'Nenhum pedido encontrado' });
    }

    res.status(200).json(dados);
  });
};

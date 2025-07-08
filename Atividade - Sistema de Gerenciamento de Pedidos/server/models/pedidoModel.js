import banco from "../config/conect.js"; 

export const buscarPedido = (callback) => {
  const sql = `SELECT * FROM Pedido`; // View ou join
  banco.query(sql, callback);
};

// ------------------------------------------------------
export const inserirPedido = (pedido, produtos, callback) => {
  const sqlPedido = `
    INSERT INTO pedido (clientes_id, status, usuarios_id, forma_pgto)
    VALUES (?, ?, ?, ?)
  `;

  const valoresPedido = [
    pedido.cliente_id,
    pedido.status,
    pedido.usuario_id,
    pedido.forma_pgto,
  ];

  banco.query(sqlPedido, valoresPedido, (erro, resultado) => {
    if (erro) return callback(erro);

    const pedidoId = resultado.insertId;

    // Prepara múltiplos inserts para os produtos
    const valoresProdutos = produtos.map(produto => [
        produto.produtos_id,
        pedidoId,
        pedido.cliente_id,
        produto.quatidade,
    ]);

    const sqlProdutos = `
      INSERT INTO pedido_produtos (produtos_id, pedido_id, pedido_clientes_id, quatidade)
      VALUES ?
    `;

    banco.query(sqlProdutos, [valoresProdutos], callback);
  });
};

// ------------------------------------------------------
export const buscarPedidoPorId = (pedidoId, callback) => {
  const sql = `
    SELECT 
      p.id AS pedido_id,
      p.clientes_id,
      p.status,
      p.usuarios_id,
      p.forma_pgto,
      pp.produtos_id,
      pp.pedido_clientes_id,
      pp.quatidade,
      pr.nome AS produto_nome
    FROM pedido p
    LEFT JOIN pedido_produtos pp ON p.id = pp.pedido_id
    LEFT JOIN produtos pr ON pp.produtos_id = pr.id
    WHERE p.id = ?
  `;

  banco.query(sql, [pedidoId], (erro, resultados) => {
    if (erro) return callback(erro);

    if (resultados.length === 0) {
      return callback(null, null); // pedido não encontrado
    }

    const pedido = {
      pedido_id: resultados[0].pedido_id,
      clientes_id: resultados[0].clientes_id,
      status: resultados[0].status,
      usuarios_id: resultados[0].usuarios_id,
      forma_pgto: resultados[0].forma_pgto,
      produtos: []
    };

    resultados.forEach(row => {
      if (row.produtos_id) {
        pedido.produtos.push({
          produtos_id: row.produtos_id,
          pedido_clientes_id: row.pedido_clientes_id,
          quatidade: row.quatidade,
          nome: row.produto_nome
        });
      }
    });

    callback(null, pedido);
  });
};

// ------------------------------------------------------

export const excluirPedidoPorId = (pedidoId, callback) => {
  banco.beginTransaction(err => {
    if (err) return callback(err);

    // excluindo os produtos do pedido
    const sqlDeleteProdutos = 'DELETE FROM pedido_produtos WHERE pedido_id = ?';
    banco.query(sqlDeleteProdutos, [pedidoId], (err) => {
      if (err) {
        return banco.rollback(() => {
          callback(err);
        });
      }

      // Apagando o pedido
      const sqlDeletePedido = 'DELETE FROM pedido WHERE id = ?';
      banco.query(sqlDeletePedido, [pedidoId], (err) => {
        if (err) {
          return banco.rollback(() => {
            callback(err);
          });
        }

        // se okey comfirma o delete
        banco.commit(err => {
          if (err) {
            return banco.rollback(() => {
              callback(err);
            });
          }

          callback(null, { message: 'Pedido e produtos excluídos com sucesso.' });
        });
      });
    });
  });
};

// ------------------------------------------------------

export const atualizarPedido = (pedidoId, dadosPedido, produtos, callback) => {
  banco.beginTransaction(err => {
    if (err) return callback(err);

    // 1. Atualiza o pedido
    const sqlUpdatePedido = `
      UPDATE pedido 
      SET clientes_id = ?, status = ?, usuarios_id = ?, forma_pgto = ?
      WHERE id = ?
    `;

    const valoresPedido = [
      dadosPedido.cliente_id,
      dadosPedido.status,
      dadosPedido.usuario_id,
      dadosPedido.forma_pgto,
      pedidoId
    ];

    banco.query(sqlUpdatePedido, valoresPedido, (err) => {
      if (err) {
        return banco.rollback(() => callback(err));
      }

      // 2. Exclui os produtos antigos
      const sqlDeleteProdutos = 'DELETE FROM pedido_produtos WHERE pedido_id = ?';
      banco.query(sqlDeleteProdutos, [pedidoId], (err) => {
        if (err) {
          return banco.rollback(() => callback(err));
        }

        if (produtos.length === 0) {
          // Sem produtos para inserir, só comita
          return banco.commit(err => {
            if (err) return banco.rollback(() => callback(err));
            callback(null, { message: 'Pedido atualizado, sem produtos.' });
          });
        }

        // 3. Insere os novos produtos
        const valoresProdutos = produtos.map(produto => [
          produto.produtos_id,
          pedidoId,
          dadosPedido.cliente_id,
          produto.quatidade,
        ]);

        const sqlInsertProdutos = `
          INSERT INTO pedido_produtos (produtos_id, pedido_id, pedido_clientes_id, quatidade)
          VALUES ?
        `;

        banco.query(sqlInsertProdutos, [valoresProdutos], (err) => {
          if (err) {
            return banco.rollback(() => callback(err));
          }

          banco.commit(err => {
            if (err) return banco.rollback(() => callback(err));
            callback(null, { message: 'Pedido e produtos atualizados com sucesso.' });
          });
        });
      });
    });
  });
};


// ------------------------------------------------------

export const buscarTodosPedidos = (callback) => {
  const sql = `
    SELECT 
      p.id AS pedido_id,
      p.clientes_id,
      p.status,
      p.usuarios_id,
      p.forma_pgto,
      pp.produtos_id,
      pp.pedido_clientes_id,
      pp.quatidade,
      pr.descricao AS produto_descricao
    FROM pedido p
    LEFT JOIN pedido_produtos pp ON p.id = pp.pedido_id
    LEFT JOIN produtos pr ON pp.produtos_id = pr.id
    ORDER BY p.id
  `;

  banco.query(sql, (erro, resultados) => {
    if (erro) return callback(erro);

    const pedidosMap = new Map();

    resultados.forEach(row => {
      const id = row.pedido_id;

      if (!pedidosMap.has(id)) {
        pedidosMap.set(id, {
          pedido_id: row.pedido_id,
          clientes_id: row.clientes_id,
          status: row.status,
          usuarios_id: row.usuarios_id,
          forma_pgto: row.forma_pgto,
          produtos: []
        });
      }

      if (row.produtos_id) {
        pedidosMap.get(id).produtos.push({
          produtos_id: row.produtos_id,
          pedido_clientes_id: row.pedido_clientes_id,
          quatidade: row.quatidade,
          descricao: row.produto_descricao
        });
      }
    });

    const pedidos = Array.from(pedidosMap.values());
    callback(null, pedidos);
  });
};

USE db_final_boss;

SELECT * FROM db_final_boss.usuarios;

SELECT id, clientes_id, status, usuarios_id, forma_pgto, total 
from db_final_boss.pedido as pedido;

SELECT *  
FROM db_final_boss.pedido AS pedido  
JOIN db_final_boss.pedido_produtos AS produtos  
ON pedido.id = produtos.pedido_id;

SELECT pedido.id, COUNT(produtos.pedido_id) AS total_produtos
FROM db_final_boss.pedido AS pedido
JOIN db_final_boss.pedido_produtos AS produtos
ON pedido.id = produtos.pedido_id
GROUP BY pedido.id;

  
SELECT 
  pedido_produtos.pedido_id,
  pedido_produtos.pedido_clientes_id,
  SUM(pedido_produtos.quatidade * produtos.preco) AS total_pedido
FROM 
  pedido_produtos 
JOIN 
  produtos ON pedido_produtos.produtos_id = produtos.id
GROUP BY 
  pedido_produtos.pedido_id, pedido_produtos.pedido_clientes_id;
  
  
SELECT 
  p.id AS pedido_id,
  c.nome AS nome_cliente,
  u.nome AS nome_usuario,
  p.forma_pgto,
  p.status,
  SUM(pp.quatidade * pr.preco) AS total_pedido
FROM 
  pedido_produtos pp
JOIN 
  produtos pr ON pp.produtos_id = pr.id
JOIN 
  pedido p ON pp.pedido_id = p.id AND pp.pedido_clientes_id = p.clientes_id
JOIN 
  clientes c ON p.clientes_id = c.id
JOIN 
  usuarios u ON p.usuarios_id = u.id
GROUP BY 
  p.id, c.nome, u.nome, p.forma_pgto, p.status;



SELECT 
  pp.pedido_id,
  pp.produtos_id,
  pr.nome AS nome_produto,
  pr.preco,
  SUM(pp.quatidade) AS total_quantidade,
  SUM(pp.quatidade * pr.preco) AS total_por_produto
FROM 
  pedido_produtos pp
JOIN 
  produtos pr ON pp.produtos_id = pr.id
GROUP BY 
  pp.pedido_id, pp.produtos_id, pr.nome, pr.preco
ORDER BY 
  pp.pedido_id, pp.produtos_id;
  
  
CREATE VIEW listarItensdoPedido AS
SELECT 
  pp.pedido_id,
  pp.produtos_id,
  pr.nome AS nome_produto,
  pr.preco,
  SUM(pp.quatidade) AS total_quantidade,
  SUM(pp.quatidade * pr.preco) AS total_por_produto
FROM 
  pedido_produtos pp
JOIN 
  produtos pr ON pp.produtos_id = pr.id
GROUP BY 
  pp.pedido_id, pp.produtos_id, pr.nome, pr.preco
ORDER BY 
  pp.pedido_id, pp.produtos_id;
  
CREATE VIEW listarPedisosResumido AS
SELECT 
  p.id AS pedido_id,
  c.nome AS nome_cliente,
  u.nome AS nome_usuario,
  p.forma_pgto,
  p.status,
  SUM(pp.quatidade * pr.preco) AS total_pedido
FROM 
  pedido_produtos pp
JOIN 
  produtos pr ON pp.produtos_id = pr.id
JOIN 
  pedido p ON pp.pedido_id = p.id AND pp.pedido_clientes_id = p.clientes_id
JOIN 
  clientes c ON p.clientes_id = c.id
JOIN 
  usuarios u ON p.usuarios_id = u.id
GROUP BY 
  p.id, c.nome, u.nome, p.forma_pgto, p.status;

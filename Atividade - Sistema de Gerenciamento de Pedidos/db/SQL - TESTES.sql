USE db_final_boss;

SELECT * FROM db_final_boss.usuarios;

SELECT id, clientes_id, status, usuarios_id, forma_pgto, total 
from db_final_boss.pedido as pedido;

SELECT *  
FROM db_final_boss.pedido AS pedido  
JOIN db_final_boss.pedido_produtos AS produtos  
ON pedido.id = produtos.pedido_id;

SELECT *  , sum(totalStreams)
FROM db_final_boss.pedido_produtos AS produtos  
JOIN db_final_boss.pedido AS pedido  
ON produtos.pedido_id = pedido.id ;

SELECT pedido.id, COUNT(produtos.pedido_id) AS total_produtos
FROM db_final_boss.pedido AS pedido
JOIN db_final_boss.pedido_produtos AS produtos
ON pedido.id = produtos.pedido_id
GROUP BY pedido.id;

SELECT preco, sum(preco) AS total_preco
FROM db_final_boss.produtos AS produtos
JOIN db_final_boss.pedido AS pedido_produtos
ON pedido.id = produtos.pedido_id
GROUP BY pedido.id;

SELECT descricao, sum(preco)
FROM db_final_boss.produtos AS produtos
JOIN db_final_boss.pedido_produtos AS pedido_produtos
GROUP BY pedido_produtos.pedido_id;
;

  
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
  


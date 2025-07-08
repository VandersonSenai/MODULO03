import express from "express";
// import multer from "multer";
import {
  criarPedido,
  listarTodosPedidos,
  listarPedidoPorId,
//   editarPedido,
//   excluirPedido
} from "../controllers/pedidoController.js"

const router = express.Router();

// Rotas
router.post("/pedido", criarPedido);
router.get("/pedidos", listarTodosPedidos);
router.get("/pedido/:id", listarPedidoPorId);
// router.put("/produtos/:id", editarPedido);
// router.delete("/produtos/:id", excluirPedido);

export default router;

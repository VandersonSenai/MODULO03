import express from "express";
import cors from "cors";

import usuarioRoute from './routes/usuarioRoute.js';
import produtoRoute from './routes/produtoRoute.js';
import clienteRoute from './routes/clienteRoute.js';
import pedidoRoute from './routes/pedidoRoute.js';

const app = express();
const port = 5001;

// MW
app.use(cors({
  origin: `http://localhost:5184`,
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// RT
app.use("/", usuarioRoute);
app.use("/", clienteRoute);
app.use("/", produtoRoute);
app.use("/", pedidoRoute);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

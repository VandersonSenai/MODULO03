import express from 'express';

import {
  listarUsuarios,
  criarUsuario,
  listarUsuarioPorId,
  editarUsuario
} from '../controllers/usuarioController.js';


// import { upload } from '../config/multer.js';

const router = express.Router();

// Rotas
// router.post('/usuarios', upload.single('imagem'), criarUsuario)
router.get('/usuarios', listarUsuarios);
router.post('/usuarios', criarUsuario)
router.get('/usuarios/:id', listarUsuarioPorId)
router.put('/usuarios/:id', editarUsuario)
// router.put('/usuarios/:id', upload.single('imagem'), editarUsuario)
export default router;

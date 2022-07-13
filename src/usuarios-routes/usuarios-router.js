import express from 'express';
import usuariosController from '../controllers/usuariosController.js';

const router = express.Router();

router
    .get('/usuarios', usuariosController.listarUsuarios)
    .post('/usuarios', usuariosController.criarUsuario)
    .put('/usuarios/:id', usuariosController.atualizarUsuario)
    .delete('/usuarios/:id', usuariosController.deletarUsuario);

export default router;
import express from 'express';
const router = express.Router();
//Busca o JogoController
import JogoController from '../controllers/JogosController.js'
const controle = new JogoController();

const caminhobase = 'jogo/'

router.get('/' + caminhobase + 'add', controle.openAdd)
router.post('/' + caminhobase + 'add', controle.add)
router.get('/' + caminhobase + 'lst', controle.list)
router.get('/' + caminhobase + 'edt/:id', controle.openEdt)
router.post('/' + caminhobase + 'edt/:id', controle.edt)
router.get('/' + caminhobase + 'del/:id', controle.del)
export default router
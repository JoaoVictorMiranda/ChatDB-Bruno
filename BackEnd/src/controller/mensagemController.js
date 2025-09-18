import * as repo from '../repository/mensagemRepository.js'
import { Router } from 'express'
import { getAuthentication } from '../utils/jwt.js'

const endpoints = Router();
const auth = getAuthentication();

endpoints.post('/chat/:sala', auth, async (req, res) => {
    let mensagem = req.body.mensagem;
    let usuarioLogadoId = req.user.id;
    let idSala = req.params.sala;

    let registro = await repo.enviarMensagem(idSala, usuarioLogadoId, mensagem);
    res.send(registro)
})


endpoints.get('/chat/:sala', auth, async (req, res) => {
    let idSala = req.params.sala;
    let usuarioLogadoId = req.user.id;

    let registros = await repo.carregarMensagem(usuarioLogadoId, idSala);

    res.send(registros);
})





export default endpoints;
import * as repoSala from '../repository/permissaoSalaRepository.js'
import { getAuthentication } from '../utils/jwt.js'

import { Router } from 'express'


const auth = getAuthentication()
const endpoints = Router()

endpoints.post('/sala/:sala/entrar', auth, async (req, res) => {
    let salaId = req.params.sala;
    let usuarioLogadoId = req.user.id;

    let info = await repoSala.pedirPermissao(salaId, usuarioLogadoId);

    res.send({
        Permissao: "Pedido enviado aguarde o criador para aceitar"
    })

})


endpoints.post('/sala/:sala/aprovar/:usuario', auth, async (req, res) => {
    let salaId = req.params.sala;
    let userId = req.params.usuario;
    let usuarioLogadoId = req.user.id;

    let dono = await repoSala.verificarDonoSala(salaId)

    if (dono && usuarioLogadoId == dono.usuario_id) {
        let info = await repoSala.aceitarPermissao(salaId, userId);
        if (info > 0) {
            res.send({
                Permissao: "Permissão aceita"
            })
        } else {
            res.status(404).send({
                Permissao: "Pedido não encontrado"
            })
        }
    } else {
        res.status(401).send({
            Permissao: "Usuario não dono da sala não pode aceitar"
        })
    }

})


export default endpoints;

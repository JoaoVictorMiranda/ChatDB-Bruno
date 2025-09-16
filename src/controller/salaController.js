import * as repo from '../repository/salaRepository.js'
import * as repoSala from '../repository/permissaoSalaRepository.js'
import { getAuthentication } from '../utils/jwt.js'

import { Router } from 'express'


const auth = getAuthentication()
const endpoints = Router()


endpoints.post('/sala', auth, async (req, res) => {
    let nome = req.body;
    let usuarioId = req.user.id;

    let id = await repo.inserirSala(nome, usuarioId);
    await repoSala.inserirPermissao(id, usuarioId, true)
    res.send({
        id: id,
        Sala: "Sala Criada com sucesso"
    })
})


export default endpoints;
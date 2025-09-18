import * as repo from '../repository/userRepository.js'
import { generateToken } from '../utils/jwt.js'


import {Router} from 'express'

const endpoints = Router()


endpoints.post('/usuario', async (req, res) => {
        let dados = req.body;
        let NovoId = await repo.criarUsuario(dados);
        res.send({ NovoId: NovoId })

})

endpoints.post('/usuario/login', async (req, res) => {
        let email = req.body.email;
        let senha = req.body.senha;
      
        let credenciais = await repo.consultarCredencial(email, senha);
        if (!credenciais) {
          res.status(401).send({ erro: 'Credenciais inválidas' });
        }
        else {
          let token = generateToken(credenciais);
          res.send({
            token: token
          });
        }

})







export default endpoints
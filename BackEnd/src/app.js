import express from 'express'
import navegar from './rotas.js';
import cors from 'cors'


const api = express()
api.use(cors());
api.use(express.json());
navegar(api)





const PORT = 5011;
api.listen(PORT, () => console.log(` Api subiu com sucesso na porta ${PORT} `))
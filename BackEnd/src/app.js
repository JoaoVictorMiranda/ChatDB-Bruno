import express from 'express'
import navegar from './rotas.js';



const api = express()
api.use(express.json());
navegar(api)




const PORT = 5011;
api.listen(PORT, () => console.log(` Api subiu com sucesso na porta ${PORT} `))